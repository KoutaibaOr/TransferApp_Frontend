import { Component, OnInit, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TransferService, BranchService, CashService, ExchangeService } from '../../core/services/api.service';
import { AuthService } from '../../core/services/auth.service';
import { ToastService } from '../../core/services/toast.service';
import { I18nService } from '../../core/services/i18n.service';
import { CsvService } from '../../core/services/csv.service';
import { Transfer, Branch, TransferStats } from '../../core/models';

@Component({
  selector: 'app-bookkeeping',
  standalone: true,
  imports: [CommonModule, FormsModule],
  styles: [`
    /* ── Page Layout ── */
    .bk-header { display:flex; align-items:center; justify-content:space-between; margin-bottom:1.75rem; flex-wrap:wrap; gap:1rem; }
    .bk-title { font-size:1.6rem; font-weight:800; }
    .bk-subtitle { font-size:.875rem; color:var(--muted); margin-top:.1rem; }

    /* ── Tabs ── */
    .bk-tabs { display:flex; gap:.35rem; border-bottom:2px solid var(--border); margin-bottom:1.5rem; flex-wrap:wrap; }
    .bk-tab { padding:.65rem 1.3rem; background:none; border:none; border-bottom:2.5px solid transparent;
      margin-bottom:-2px; font-size:.875rem; font-weight:600; color:var(--muted); cursor:pointer; transition:all .15s; white-space:nowrap; }
    .bk-tab:hover { color:var(--ink); }
    .bk-tab.active { color:var(--accent); border-bottom-color:var(--accent); }
    .tab-badge { display:inline-flex; align-items:center; justify-content:center; min-width:18px; height:18px;
      background:var(--accent); color:#fff; font-size:.65rem; font-weight:700; border-radius:9px; padding:0 5px; margin-left:.4rem; }
    .tab-badge.orange { background:var(--warn); }
    .tab-badge.green  { background:var(--accent2); }
    .tab-badge.red    { background:var(--red); }

    /* ── KPI Row ── */
    .kpi-row  { display:grid; grid-template-columns:repeat(auto-fit,minmax(180px,1fr)); gap:1rem; margin-bottom:1.5rem; }
    .kpi-card { background:var(--bg2); border:1.5px solid var(--border); border-radius:var(--radius); padding:1.2rem 1.4rem;
      display:flex; align-items:center; gap:.9rem; transition:box-shadow .15s; }
    .kpi-card:hover { box-shadow:var(--shadow); }
    .kpi-icon { width:44px; height:44px; border-radius:var(--radius-sm); display:flex; align-items:center;
      justify-content:center; font-size:1.3rem; flex-shrink:0; }
    .kpi-icon.blue   { background:#EEF4FF; }
    .kpi-icon.green  { background:#E6FBF5; }
    .kpi-icon.orange { background:#FFF5E6; }
    .kpi-icon.purple { background:#F0E6FF; }
    .kpi-icon.red    { background:#FFE6EA; }
    .kpi-label { font-size:.72rem; color:var(--muted); font-weight:600; text-transform:uppercase; letter-spacing:.04em; }
    .kpi-value { font-size:1.45rem; font-weight:800; color:var(--ink); line-height:1.1; }
    .kpi-sub   { font-size:.72rem; color:var(--muted); margin-top:.1rem; }

    /* ── Card ── */
    .card  { background:var(--bg2); border:1.5px solid var(--border); border-radius:var(--radius); box-shadow:var(--shadow); margin-bottom:1.25rem; }
    .card-p { padding:1.4rem; }
    .card-header { display:flex; align-items:center; justify-content:space-between; padding:.9rem 1.4rem; border-bottom:1.5px solid var(--border); }
    .card-title  { font-weight:700; font-size:.95rem; }

    /* ── Filters ── */
    .filters { display:flex; gap:.75rem; flex-wrap:wrap; align-items:center; margin-bottom:1.25rem; }
    .filters .form-control { max-width:200px; }

    /* ── Table ── */
    .table-wrap { overflow-x:auto; }
    table { width:100%; border-collapse:collapse; font-size:.855rem; }
    thead th { background:var(--ink); color:#fff; padding:.7rem 1rem; text-align:left; font-size:.73rem;
      font-weight:600; text-transform:uppercase; letter-spacing:.06em; white-space:nowrap; }
    tbody tr { border-bottom:1px solid var(--border); transition:background .12s; }
    tbody tr:last-child { border-bottom:none; }
    tbody tr:hover { background:#f0f4ff; }
    tbody td { padding:.7rem 1rem; color:var(--ink2); vertical-align:middle; }
    .ref { font-family:monospace; font-size:.78rem; color:var(--accent); background:#eef4ff; padding:.15rem .4rem; border-radius:4px; }
    .fw-600 { font-weight:600; }
    .text-muted { color:var(--muted); }

    /* ── Status badges ── */
    .badge { display:inline-flex; align-items:center; gap:.25rem; padding:.22rem .6rem; border-radius:100px;
      font-size:.7rem; font-weight:700; text-transform:uppercase; letter-spacing:.03em; white-space:nowrap; }
    .badge-draft       { background:#F4F5FA; color:var(--muted); }
    .badge-created     { background:#EEF4FF; color:var(--accent); }
    .badge-in_progress { background:#FFF5E6; color:var(--warn); }
    .badge-completed   { background:#E6FBF5; color:var(--accent2); }
    .badge-paid_out    { background:#F0E6FF; color:#7C3AED; }
    .badge-cancelled   { background:#FFE6EA; color:var(--red); }
    .badge-blocked     { background:#fee2e2; color:#991b1b; }

    /* ── Direction arrows ── */
    .dir-out { color:var(--warn); font-weight:700; }
    .dir-in  { color:var(--accent2); font-weight:700; }

    /* ── Duplicate warning ── */
    .dup-row { background:#fff8e1 !important; }
    .dup-warn { font-size:.72rem; color:var(--warn); font-weight:700; display:flex; align-items:center; gap:.25rem; margin-top:.2rem; }

    /* ── Pagination ── */
    .pagination { display:flex; gap:.5rem; align-items:center; justify-content:center; padding:.9rem; }
    .page-btn { width:32px; height:32px; border-radius:var(--radius-sm); border:1.5px solid var(--border);
      background:var(--bg2); font-size:.82rem; font-weight:600; color:var(--ink2); cursor:pointer; transition:all .12s; }
    .page-btn:hover,.page-btn.active { background:var(--accent); color:#fff; border-color:var(--accent); }
    .page-btn:disabled { opacity:.4; pointer-events:none; }

    /* ── Branch profit table ── */
    .profit-grid { display:grid; grid-template-columns:repeat(auto-fill,minmax(260px,1fr)); gap:1rem; }
    .profit-card { background:var(--bg2); border:1.5px solid var(--border); border-radius:var(--radius); padding:1.2rem 1.4rem; }
    .profit-branch { font-weight:700; font-size:.95rem; margin-bottom:.75rem; display:flex; align-items:center; gap:.5rem; }
    .profit-row { display:flex; justify-content:space-between; align-items:center; padding:.35rem 0;
      border-bottom:1px solid var(--border); font-size:.855rem; }
    .profit-row:last-child { border-bottom:none; }
    .profit-label { color:var(--muted); font-size:.78rem; }
    .profit-val { font-weight:700; }
    .profit-val.pos { color:var(--accent2); }
    .profit-val.neg { color:var(--red); }

    /* ── Day close table ── */
    .dc-grid { display:grid; grid-template-columns:repeat(auto-fill,minmax(300px,1fr)); gap:1rem; }
    .dc-card  { background:var(--bg2); border:1.5px solid var(--border); border-radius:var(--radius); overflow:hidden; }
    .dc-head  { padding:.9rem 1.2rem; display:flex; align-items:center; justify-content:space-between;
      background:linear-gradient(135deg,var(--ink),#1e3a5f); color:#fff; }
    .dc-branch { font-weight:700; font-size:.95rem; }
    .dc-date   { font-size:.75rem; color:rgba(255,255,255,.6); }
    .dc-body   { padding:1rem 1.2rem; }
    .dc-row    { display:flex; gap:.5rem; align-items:center; padding:.4rem 0; border-bottom:1px solid var(--border); font-size:.845rem; }
    .dc-row:last-child { border-bottom:none; }
    .dc-currency { font-weight:700; min-width:45px; font-size:.78rem; color:var(--accent); }
    .dc-expected { flex:1; color:var(--muted); }
    .dc-counted  { flex:1; font-weight:600; }
    .dc-diff { font-weight:700; font-size:.82rem; min-width:70px; text-align:right; }
    .diff-ok  { color:var(--accent2); }
    .diff-bad { color:var(--red); }
    .diff-zero { color:var(--muted); }

    /* ── Export bar ── */
    .export-bar { display:flex; gap:.65rem; flex-wrap:wrap; align-items:center; }

    /* ── Form controls ── */
    .form-control { padding:.6rem .85rem; border-radius:var(--radius-sm); border:1.5px solid var(--border);
      background:var(--bg); font-size:.875rem; color:var(--ink); font-family:inherit; transition:border-color .15s; }
    .form-control:focus { outline:none; border-color:var(--accent); }
    .form-label { font-size:.78rem; font-weight:600; color:var(--ink2); text-transform:uppercase; letter-spacing:.04em; margin-bottom:.3rem; display:block; }

    /* ── Buttons ── */
    .btn { display:inline-flex; align-items:center; gap:.4rem; padding:.55rem 1.1rem; border-radius:var(--radius-sm);
      font-size:.855rem; font-weight:600; border:none; cursor:pointer; transition:all .15s; white-space:nowrap; line-height:1; }
    .btn:disabled { opacity:.5; cursor:not-allowed; }
    .btn-primary  { background:var(--accent);  color:#fff; }
    .btn-primary:hover  { filter:brightness(1.1); }
    .btn-success  { background:var(--accent2); color:#fff; }
    .btn-success:hover  { filter:brightness(1.1); }
    .btn-ghost    { background:transparent; border:1.5px solid var(--border); color:var(--ink2); }
    .btn-ghost:hover    { border-color:var(--accent); color:var(--accent); }
    .btn-sm { padding:.38rem .8rem; font-size:.8rem; }
    .btn-icon { padding:.4rem; background:transparent; border:1.5px solid var(--border); color:var(--ink2); }

    /* ── Empty state ── */
    .empty { text-align:center; padding:3rem 1rem; color:var(--muted); }
    .empty-icon { font-size:2.5rem; margin-bottom:.75rem; }

    /* ── Responsive ── */
    @media(max-width:768px) {
      .kpi-row { grid-template-columns:1fr 1fr; }
      .filters .form-control { max-width:100%; }
      .dc-grid,.profit-grid { grid-template-columns:1fr; }
    }
  `],
  template: `
    <!-- ── Header ── -->
    <div class="bk-header">
      <div>
        <h1 class="bk-title">📒 {{ t().bookkeeping }}</h1>
        <p class="bk-subtitle">{{ t().bookkeepingSubtitle }}</p>
      </div>
      <div class="export-bar">
        <button class="btn btn-ghost btn-sm" (click)="exportAll()">⬇ {{ t().exportAll }}</button>
        <button class="btn btn-ghost btn-sm" (click)="exportProfits()">📊 {{ t().exportProfits }}</button>
        <button class="btn btn-ghost btn-sm" (click)="load()">🔄 {{ t().refresh }}</button>
      </div>
    </div>

    <!-- ── KPI Row ── -->
    <div class="kpi-row">
      <div class="kpi-card">
        <div class="kpi-icon blue">💳</div>
        <div>
          <div class="kpi-label">{{ t().totalTransfers }}</div>
          <div class="kpi-value">{{ stats()?.totalCount ?? '—' }}</div>
          <div class="kpi-sub">{{ t().today }}: {{ stats()?.todayCount ?? 0 }}</div>
        </div>
      </div>
      <div class="kpi-card">
        <div class="kpi-icon orange">⏳</div>
        <div>
          <div class="kpi-label">{{ t().pending }}</div>
          <div class="kpi-value">{{ pendingCount() }}</div>
          <div class="kpi-sub">{{ t().waitingForProcessing }}</div>
        </div>
      </div>
      <div class="kpi-card">
        <div class="kpi-icon green">📈</div>
        <div>
          <div class="kpi-label">{{ t().profitToday }}</div>
          <div class="kpi-value">€ {{ fmt(stats()?.profitToday) }}</div>
          <div class="kpi-sub">{{ t().profitTotal }}: € {{ fmt(stats()?.profitTotal) }}</div>
        </div>
      </div>
      <div class="kpi-card">
        <div class="kpi-icon red">⚠️</div>
        <div>
          <div class="kpi-label">{{ t().duplicates }}</div>
          <div class="kpi-value">{{ duplicates().length }}</div>
          <div class="kpi-sub">{{ t().needsReview }}</div>
        </div>
      </div>
      <div class="kpi-card">
        <div class="kpi-icon purple">🏦</div>
        <div>
          <div class="kpi-label">{{ t().branches }}</div>
          <div class="kpi-value">{{ branches().length }}</div>
          <div class="kpi-sub">{{ t().activeLocations }}</div>
        </div>
      </div>
    </div>

    <!-- ── Tabs ── -->
    <div class="bk-tabs">
      <button class="bk-tab" [class.active]="tab()==='outgoing'" (click)="tab.set('outgoing')">
        ↑ {{ t().outgoing }}
        <span class="tab-badge orange">{{ outgoingCount() }}</span>
      </button>
      <button class="bk-tab" [class.active]="tab()==='incoming'" (click)="tab.set('incoming')">
        ↓ {{ t().incoming }}
        <span class="tab-badge green">{{ incomingCount() }}</span>
      </button>
      <button class="bk-tab" [class.active]="tab()==='settled'" (click)="tab.set('settled')">
        ✅ {{ t().settled }}
        <span class="tab-badge">{{ settledCount() }}</span>
      </button>
      <button class="bk-tab" [class.active]="tab()==='duplicates'" (click)="tab.set('duplicates')">
        ⚠️ {{ t().duplicates }}
        @if (duplicates().length > 0) {
          <span class="tab-badge red">{{ duplicates().length }}</span>
        }
      </button>
      <button class="bk-tab" [class.active]="tab()==='profits'" (click)="tab.set('profits')">
        📊 {{ t().branchProfit }}
      </button>
      <button class="bk-tab" [class.active]="tab()==='dayclose'" (click)="tab.set('dayclose')">
        📋 {{ t().dayCloseTitle }}
      </button>
    </div>

    <!-- ── OUTGOING / INCOMING / SETTLED tabs ── -->
    @if (tab()==='outgoing' || tab()==='incoming' || tab()==='settled') {
      <!-- Filters -->
      <div class="filters">
        <input class="form-control" type="search" [(ngModel)]="search" [placeholder]="t().search" (input)="filterTransfers()" />
        <select class="form-control" [(ngModel)]="filterBranch" (change)="filterTransfers()">
          <option value="">{{ t().allBranches }}</option>
          @for (b of branches(); track b.id) {
            <option [value]="b.name">{{ b.name }}</option>
          }
        </select>
        <input class="form-control" type="date" [(ngModel)]="dateFrom" (change)="filterTransfers()" />
        <input class="form-control" type="date" [(ngModel)]="dateTo"   (change)="filterTransfers()" />
        <button class="btn btn-ghost btn-sm" (click)="clearFilters()">✕ {{ t().cancel }}</button>
        <button class="btn btn-success btn-sm" (click)="exportCurrentTab()">⬇ CSV</button>
      </div>

      <div class="card" style="padding:0">
        <div class="card-header">
          <span class="card-title">
            @if (tab()==='outgoing') { ↑ {{ t().outgoing }} ({{ filteredTransfers().length }}) }
            @if (tab()==='incoming') { ↓ {{ t().incoming }} ({{ filteredTransfers().length }}) }
            @if (tab()==='settled')  { ✅ {{ t().settled }} ({{ filteredTransfers().length }}) }
          </span>
          <span class="text-muted" style="font-size:.82rem">
            {{ t().totalAmount }}: € {{ fmtList(filteredTransfers()) }}
          </span>
        </div>
        <div class="table-wrap">
          <table>
            <thead>
              <tr>
                <th>#</th>
                <th>Ref</th>
                <th>{{ t().sender }}</th>
                <th>{{ t().receiver }}</th>
                <th>{{ t().amount }}</th>
                <th>{{ t().fee }}</th>
                <th>{{ t().status }}</th>
                <th>{{ t().senderBranch }}</th>
                <th>{{ t().receiverBranch }}</th>
                <th>{{ t().employee }}</th>
                <th>{{ t().date }}</th>
              </tr>
            </thead>
            <tbody>
              @for (tr of pagedTransfers(); track tr.id; let i = $index) {
                <tr [class.dup-row]="isDuplicate(tr)">
                  <td class="text-muted" style="font-size:.78rem">{{ (page()-1)*limit + i + 1 }}</td>
                  <td>
                    <code class="ref">{{ tr.ref }}</code>
                    @if (isDuplicate(tr)) {
                      <div class="dup-warn">⚠️ {{ t().possibleDuplicate }}</div>
                    }
                  </td>
                  <td>
                    <div class="fw-600" style="font-size:.855rem">{{ tr.senderName }}</div>
                    <div class="text-muted" style="font-size:.75rem">{{ tr.senderPhone }}</div>
                  </td>
                  <td>
                    <div class="fw-600" style="font-size:.855rem">{{ tr.receiverName }}</div>
                    <div class="text-muted" style="font-size:.75rem">{{ tr.receiverCountry }}</div>
                  </td>
                  <td class="fw-600">{{ tr.amount | number:'1.2-2' }} {{ tr.currency }}</td>
                  <td class="text-muted">{{ tr.fee | number:'1.2-2' }}</td>
                  <td>
                    <span class="badge" [class]="'badge-' + tr.status.toLowerCase()">{{ tr.status }}</span>
                  </td>
                  <td class="text-muted" style="font-size:.8rem"><span class="dir-out">↑</span> {{ tr.senderBranch || tr.branch }}</td>
                  <td class="text-muted" style="font-size:.8rem"><span class="dir-in">↓</span> {{ tr.receiverBranch || '—' }}</td>
                  <td class="text-muted" style="font-size:.78rem">{{ tr.employee }}</td>
                  <td class="text-muted" style="font-size:.78rem">{{ tr.createdAt | date:'dd.MM.yy HH:mm' }}</td>
                </tr>
              } @empty {
                <tr><td colspan="11">
                  <div class="empty"><div class="empty-icon">💳</div><p>{{ t().noTransfers }}</p></div>
                </td></tr>
              }
            </tbody>
          </table>
        </div>
        <div class="pagination">
          <button class="page-btn" [disabled]="page()===1" (click)="page.set(page()-1)">‹</button>
          <span class="text-muted" style="font-size:.82rem">{{ page() }} / {{ totalPages() }}</span>
          <button class="page-btn" [disabled]="page()>=totalPages()" (click)="page.set(page()+1)">›</button>
        </div>
      </div>
    }

    <!-- ── DUPLICATES tab ── -->
    @if (tab()==='duplicates') {
      @if (duplicates().length === 0) {
        <div class="card card-p">
          <div class="empty"><div class="empty-icon">✅</div><p style="font-weight:600;color:var(--accent2)">{{ t().noDuplicates }}</p></div>
        </div>
      } @else {
        <div class="card" style="padding:0">
          <div class="card-header">
            <span class="card-title">⚠️ {{ t().possibleDuplicates }} ({{ duplicates().length }})</span>
            <span class="text-muted" style="font-size:.82rem">{{ t().duplicatesHint }}</span>
          </div>
          <div class="table-wrap">
            <table>
              <thead>
                <tr>
                  <th>Ref</th>
                  <th>{{ t().sender }}</th>
                  <th>{{ t().receiver }}</th>
                  <th>{{ t().amount }}</th>
                  <th>{{ t().date }}</th>
                  <th>{{ t().branch }}</th>
                  <th>{{ t().status }}</th>
                </tr>
              </thead>
              <tbody>
                @for (tr of duplicates(); track tr.id) {
                  <tr style="background:#fff8e1">
                    <td><code class="ref">{{ tr.ref }}</code></td>
                    <td class="fw-600">{{ tr.senderName }}</td>
                    <td>{{ tr.receiverName }}</td>
                    <td class="fw-600">{{ tr.amount | number:'1.2-2' }} {{ tr.currency }}</td>
                    <td class="text-muted" style="font-size:.8rem">{{ tr.createdAt | date:'dd.MM.yy HH:mm' }}</td>
                    <td class="text-muted" style="font-size:.8rem">{{ tr.branch }}</td>
                    <td><span class="badge" [class]="'badge-' + tr.status.toLowerCase()">{{ tr.status }}</span></td>
                  </tr>
                }
              </tbody>
            </table>
          </div>
        </div>
      }
    }

    <!-- ── PROFITS tab ── -->
    @if (tab()==='profits') {
      <!-- Summary KPIs -->
      <div class="kpi-row" style="margin-bottom:1.5rem">
        <div class="kpi-card">
          <div class="kpi-icon green">💰</div>
          <div>
            <div class="kpi-label">{{ t().profitToday }}</div>
            <div class="kpi-value" style="color:var(--accent2)">€ {{ fmt(stats()?.profitToday) }}</div>
          </div>
        </div>
        <div class="kpi-card">
          <div class="kpi-icon blue">📅</div>
          <div>
            <div class="kpi-label">{{ t().profitMonth }}</div>
            <div class="kpi-value">€ {{ fmt(stats()?.profitMonth) }}</div>
          </div>
        </div>
        <div class="kpi-card">
          <div class="kpi-icon purple">📈</div>
          <div>
            <div class="kpi-label">{{ t().profitTotal }}</div>
            <div class="kpi-value">€ {{ fmt(stats()?.profitTotal) }}</div>
          </div>
        </div>
      </div>

      <!-- Per-branch profit cards -->
      <div class="profit-grid">
        @for (b of branches(); track b.id) {
          <div class="profit-card">
            <div class="profit-branch">
              <span style="width:10px;height:10px;border-radius:50%;background:{{b.color}};display:inline-block"></span>
              {{ b.name }}
              <span class="text-muted" style="font-size:.75rem;font-weight:400">({{ b.city }})</span>
            </div>
            <div class="profit-row">
              <span class="profit-label">{{ t().transferProfit }}</span>
              <span class="profit-val pos">€ {{ fmt(branchTransferProfit(b.name)) }}</span>
            </div>
            <div class="profit-row">
              <span class="profit-label">{{ t().transferCount }}</span>
              <span class="profit-val">{{ branchTransferCount(b.name) }}</span>
            </div>
            <div class="profit-row">
              <span class="profit-label">{{ t().totalFees }}</span>
              <span class="profit-val">€ {{ fmt(branchFeeSum(b.name)) }}</span>
            </div>
            <div class="profit-row" style="padding-top:.5rem;margin-top:.15rem;border-top:2px solid var(--border)">
              <span class="profit-label" style="font-weight:700">{{ t().totalProfit }}</span>
              <span class="profit-val pos" style="font-size:1.05rem">€ {{ fmt(branchTotalProfit(b.name)) }}</span>
            </div>
          </div>
        }
      </div>
    }

    <!-- ── DAY CLOSE tab ── -->
    @if (tab()==='dayclose') {
      <div class="dc-grid">
        @for (b of branches(); track b.id) {
          <div class="dc-card">
            <div class="dc-head">
              <div>
                <div class="dc-branch">{{ b.name }}</div>
                <div class="dc-date">{{ t().dayCloseTitle }} — {{ today() }}</div>
              </div>
              <span style="font-size:1.5rem">🏦</span>
            </div>
            <div class="dc-body">
              @for (bal of b.balances || []; track bal.currency) {
                <div class="dc-row">
                  <span class="dc-currency">{{ bal.currency }}</span>
                  <span class="dc-expected">{{ t().expected }}: <strong>{{ bal.amount | number:'1.0-0' }}</strong></span>
                  <span class="dc-diff"
                    [class.diff-ok]="0===0"
                    [class.diff-zero]="true">
                    Δ 0
                  </span>
                </div>
              }
              @if (!b.balances?.length) {
                <div class="empty" style="padding:1rem"><p>{{ t().noData }}</p></div>
              }
            </div>
          </div>
        }
      </div>
      <div class="card card-p" style="margin-top:1rem">
        <p class="text-muted" style="font-size:.85rem;line-height:1.7">
          ℹ️ {{ t().dayCloseHint }}
        </p>
      </div>
    }
  `,
})
export class BookkeepingComponent implements OnInit {
  tab     = signal<'outgoing'|'incoming'|'settled'|'duplicates'|'profits'|'dayclose'>('outgoing');
  allTransfers = signal<Transfer[]>([]);
  branches     = signal<Branch[]>([]);
  stats        = signal<any>(null);

  search      = '';
  filterBranch = '';
  dateFrom    = '';
  dateTo      = '';
  page        = signal(1);
  limit       = 25;

  constructor(
    private transferSvc: TransferService,
    private branchSvc:   BranchService,
    private cashSvc:     CashService,
    private toast:       ToastService,
    public  auth:        AuthService,
    public  i18n:        I18nService,
    private csv:         CsvService,
  ) {}

  t = this.i18n.t;

  today() { return new Date().toLocaleDateString('de-DE'); }

  ngOnInit() {
    this.load();
  }

  load() {
    this.transferSvc.getAll({ limit: 9999 }).subscribe(r => this.allTransfers.set(r.data));
    this.branchSvc.getAll().subscribe(bs => this.branches.set(bs));
    this.transferSvc.getStats().subscribe(s => this.stats.set(s));
  }

  // ── Counts ──────────────────────────────────────────────────────
  outgoingCount = computed(() =>
    this.allTransfers().filter(t => ['CREATED','IN_PROGRESS','DRAFT'].includes(t.status)).length
  );
  incomingCount = computed(() =>
    this.allTransfers().filter(t => t.status === 'COMPLETED').length
  );
  settledCount = computed(() =>
    this.allTransfers().filter(t => t.status === 'PAID_OUT').length
  );
  pendingCount = computed(() =>
    this.allTransfers().filter(t => ['CREATED','IN_PROGRESS','DRAFT'].includes(t.status)).length
  );

  // ── Filtered by tab + search + branch + date ──────────────────
  filteredTransfers = computed(() => {
    let list = this.allTransfers();

    if (this.tab() === 'outgoing') {
      list = list.filter(t => ['CREATED','IN_PROGRESS','DRAFT'].includes(t.status));
    } else if (this.tab() === 'incoming') {
      list = list.filter(t => t.status === 'COMPLETED');
    } else if (this.tab() === 'settled') {
      list = list.filter(t => t.status === 'PAID_OUT');
    }

    if (this.search) {
      const q = this.search.toLowerCase();
      list = list.filter(t =>
        t.senderName.toLowerCase().includes(q) ||
        t.receiverName.toLowerCase().includes(q) ||
        t.ref.toLowerCase().includes(q) ||
        t.receiverCountry?.toLowerCase().includes(q)
      );
    }

    if (this.filterBranch) {
      list = list.filter(t => t.branch === this.filterBranch || t.senderBranch === this.filterBranch);
    }

    if (this.dateFrom) {
      list = list.filter(t => t.createdAt >= this.dateFrom);
    }
    if (this.dateTo) {
      const to = this.dateTo + 'T23:59:59';
      list = list.filter(t => t.createdAt <= to);
    }

    return list;
  });

  totalPages = computed(() => Math.max(1, Math.ceil(this.filteredTransfers().length / this.limit)));

  pagedTransfers = computed(() => {
    const p = this.page() - 1;
    return this.filteredTransfers().slice(p * this.limit, (p + 1) * this.limit);
  });

  filterTransfers() { this.page.set(1); }

  clearFilters() {
    this.search = '';
    this.filterBranch = '';
    this.dateFrom = '';
    this.dateTo = '';
    this.page.set(1);
  }

  // ── Duplicate detection ─────────────────────────────────────────
  duplicates = computed(() => {
    const list = this.allTransfers().filter(t => !['CANCELLED','BLOCKED'].includes(t.status));
    const seen = new Map<string, Transfer>();
    const dups: Transfer[] = [];
    for (const tr of list) {
      const day = tr.createdAt?.slice(0, 10) ?? '';
      const key = `${tr.senderName}|${tr.receiverName}|${tr.amount}|${tr.currency}|${day}`;
      if (seen.has(key)) {
        const orig = seen.get(key)!;
        if (!dups.find(d => d.id === orig.id)) dups.push(orig);
        dups.push(tr);
      } else {
        seen.set(key, tr);
      }
    }
    return dups;
  });

  isDuplicate(tr: Transfer): boolean {
    return this.duplicates().some(d => d.id === tr.id);
  }

  // ── Branch profit calculations ──────────────────────────────────
  branchTransfers(branchName: string): Transfer[] {
    return this.allTransfers().filter(t =>
      (t.branch === branchName || t.senderBranch === branchName) &&
      !['CANCELLED','BLOCKED'].includes(t.status)
    );
  }

  branchTransferCount(b: string): number { return this.branchTransfers(b).length; }
  branchFeeSum(b: string):  number { return this.branchTransfers(b).reduce((s, t) => s + (t.fee || 0), 0); }
  branchTransferProfit(b: string): number { return this.branchTransfers(b).reduce((s, t) => s + (t.profit || t.fee || 0), 0); }
  branchTotalProfit(b: string): number { return this.branchTransferProfit(b); }

  // ── Export ──────────────────────────────────────────────────────
  exportAll() {
    const headers = [
      { key: 'ref',             label: 'Reference'        },
      { key: 'senderName',      label: 'Sender'           },
      { key: 'senderPhone',     label: 'Sender Phone'     },
      { key: 'receiverName',    label: 'Receiver'         },
      { key: 'receiverCountry', label: 'Country'          },
      { key: 'receiverPhone',   label: 'Receiver Phone'   },
      { key: 'amount',          label: 'Amount'           },
      { key: 'currency',        label: 'Currency'         },
      { key: 'fee',             label: 'Fee'              },
      { key: 'profit',          label: 'Profit'           },
      { key: 'status',          label: 'Status'           },
      { key: 'branch',          label: 'Branch'           },
      { key: 'senderBranch',    label: 'Sender Branch'    },
      { key: 'receiverBranch',  label: 'Receiver Branch'  },
      { key: 'employee',        label: 'Employee'         },
      { key: 'createdAt',       label: 'Created At'       },
    ] as const;
    this.csv.export(this.allTransfers() as any[], headers as any, 'buchhalter_alle_transfers');
    this.toast.success(`${this.allTransfers().length} ${this.t().exported}`);
  }

  exportCurrentTab() {
    const headers = [
      { key: 'ref', label: 'Ref' }, { key: 'senderName', label: 'Sender' },
      { key: 'receiverName', label: 'Receiver' }, { key: 'receiverCountry', label: 'Country' },
      { key: 'amount', label: 'Amount' }, { key: 'currency', label: 'Currency' },
      { key: 'fee', label: 'Fee' }, { key: 'status', label: 'Status' },
      { key: 'branch', label: 'Branch' }, { key: 'createdAt', label: 'Date' },
    ] as const;
    const data = this.filteredTransfers();
    this.csv.export(data as any[], headers as any, `buchhalter_${this.tab()}`);
    this.toast.success(`${data.length} ${this.t().exported}`);
  }

  exportProfits() {
    const rows = this.branches().map(b => ({
      branch:        b.name,
      city:          b.city,
      transferCount: this.branchTransferCount(b.name),
      feeSum:        this.branchFeeSum(b.name).toFixed(2),
      totalProfit:   this.branchTotalProfit(b.name).toFixed(2),
      exportDate:    new Date().toISOString().slice(0, 10),
    }));
    const headers = [
      { key: 'branch', label: 'Branch' }, { key: 'city', label: 'City' },
      { key: 'transferCount', label: 'Transfers' }, { key: 'feeSum', label: 'Fees EUR' },
      { key: 'totalProfit', label: 'Total Profit EUR' }, { key: 'exportDate', label: 'Date' },
    ] as const;
    this.csv.export(rows as any[], headers as any, 'buchhalter_gewinne');
    this.toast.success(this.t().exported);
  }

  // ── Helpers ────────────────────────────────────────────────────
  fmt(n?: number | null): string {
    if (n == null) return '—';
    return new Intl.NumberFormat('de-DE', { maximumFractionDigits: 0 }).format(n);
  }

  fmtList(list: Transfer[]): string {
    const sum = list.reduce((s, t) => s + t.amount, 0);
    return this.fmt(sum);
  }
}
