import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CustomerService } from '../../core/services/api.service';
import { ToastService } from '../../core/services/toast.service';
import { I18nService } from '../../core/services/i18n.service';
import { CsvService } from '../../core/services/csv.service';
import { Customer } from '../../core/models';

const EXPORT_HEADERS = [
  { key: 'firstName',     label: 'First Name'  },
  { key: 'lastName',      label: 'Last Name'   },
  { key: 'phone',         label: 'Phone'       },
  { key: 'idNumber',      label: 'ID Number'   },
  { key: 'branch',        label: 'Branch'      },
  { key: 'transferCount', label: 'Transfers'   },
] as const;

const IMPORT_TEMPLATE = [
  { key: 'First Name', label: 'First Name' },
  { key: 'Last Name',  label: 'Last Name'  },
  { key: 'Phone',      label: 'Phone'      },
  { key: 'ID Number',  label: 'ID Number'  },
];

@Component({
  selector: 'app-customers',
  standalone: true,
  imports: [CommonModule, FormsModule],
  styleUrl: 'customers.component.css',
  template: `
    <div class="page-header">
      <div>
        <h1 class="page-title">{{ t().customers }}</h1>
        <p class="page-subtitle">{{ customers().length }} {{ t().customers }}</p>
      </div>
      <div class="header-actions">
        <button class="btn btn-ghost btn-sm" (click)="exportCsv()">⬇ CSV Export</button>
        <button class="btn btn-ghost btn-sm" (click)="csvInput.click()">⬆ CSV Import</button>
        <input #csvInput type="file" accept=".csv" style="display:none" (change)="importCsv($event)" />
        <button class="btn btn-ghost btn-sm" (click)="downloadTemplate()">📋 {{ t().template }}</button>
        <button class="btn btn-primary" (click)="showNew.set(true)">＋ {{ t().newCustomer }}</button>
      </div>
    </div>

    @if (importPreview().length) {
      <div class="card" style="margin-bottom:1.5rem">
        <div class="card-header">
          <span class="card-title">📥 {{ t().importPreview }} — {{ importPreview().length }} {{ t().rows }}</span>
          <div style="display:flex;gap:.5rem">
            <button class="btn btn-ghost btn-sm" (click)="importPreview.set([])">{{ t().cancel }}</button>
            <button class="btn btn-success btn-sm" (click)="confirmImport()">✓ {{ t().confirm }}</button>
          </div>
        </div>
        <div class="table-wrap">
          <table>
            <thead><tr><th>#</th><th>{{ t().firstName }}</th><th>{{ t().lastName }}</th><th>{{ t().phone }}</th><th>{{ t().idNumber }}</th></tr></thead>
            <tbody>
              @for (row of importPreview().slice(0,8); track $index) {
                <tr>
                  <td class="text-muted">{{ $index + 1 }}</td>
                  <td>{{ row['First Name'] }}</td>
                  <td>{{ row['Last Name'] }}</td>
                  <td>{{ row['Phone'] }}</td>
                  <td><code>{{ row['ID Number'] }}</code></td>
                </tr>
              }
            </tbody>
          </table>
        </div>
        @if (importPreview().length > 8) {
          <p class="text-muted" style="padding:.75rem 1rem;font-size:.8rem">… {{ importPreview().length - 8 }} {{ t().moreRows }}</p>
        }
      </div>
    }

    <div class="filters-bar">
      <input class="form-control" type="search" [(ngModel)]="search"
             [placeholder]="t().search" (input)="load()" />
    </div>

    <div class="card" style="padding:0">
      <div class="table-wrap">
        <table>
          <thead>
            <tr><th>Name</th><th>{{ t().phone }}</th><th>{{ t().idNumber }}</th><th>{{ t().branch }}</th><th>{{ t().transferCount }}</th><th>{{ t().actions }}</th></tr>
          </thead>
          <tbody>
            @for (c of customers(); track c.id) {
              <tr>
                <td><span class="fw-600">{{ c.firstName }} {{ c.lastName }}</span></td>
                <td class="text-muted">{{ c.phone }}</td>
                <td><code>{{ c.idNumber }}</code></td>
                <td>{{ c.branch }}</td>
                <td><span class="badge badge-created">{{ c.transferCount }}</span></td>
                <td>
                  <button class="btn btn-ghost btn-sm" (click)="select(c)">✏️ {{ t().edit }}</button>
                </td>
              </tr>
            } @empty {
              <tr><td colspan="6"><div class="empty-state"><div class="empty-icon">👥</div><h3>{{ t().noCustomers }}</h3></div></td></tr>
            }
          </tbody>
        </table>
      </div>
    </div>

    <!-- Edit Modal -->
    @if (selected()) {
      <div class="modal-backdrop" (click)="selected.set(null)">
        <div class="modal" (click)="$event.stopPropagation()">
          <div class="modal-header">
            <span class="modal-title">{{ selected()!.firstName }} {{ selected()!.lastName }}</span>
            <button class="btn btn-icon" (click)="selected.set(null)">✕</button>
          </div>
          <div class="modal-body">
            <div class="form-grid">
              <div class="form-group">
                <label class="form-label">{{ t().firstName }}</label>
                <input class="form-control" [(ngModel)]="editDto.firstName" />
              </div>
              <div class="form-group">
                <label class="form-label">{{ t().lastName }}</label>
                <input class="form-control" [(ngModel)]="editDto.lastName" />
              </div>
              <div class="form-group">
                <label class="form-label">{{ t().phone }}</label>
                <input class="form-control" [(ngModel)]="editDto.phone" />
              </div>
              <div class="form-group">
                <label class="form-label">{{ t().idNumber }}</label>
                <input class="form-control" [(ngModel)]="editDto.idNumber" />
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button class="btn btn-ghost" (click)="selected.set(null)">{{ t().cancel }}</button>
            <button class="btn btn-primary" (click)="save()">{{ t().save }}</button>
          </div>
        </div>
      </div>
    }

    <!-- New Modal -->
    @if (showNew()) {
      <div class="modal-backdrop" (click)="showNew.set(false)">
        <div class="modal" (click)="$event.stopPropagation()">
          <div class="modal-header">
            <span class="modal-title">{{ t().newCustomer }}</span>
            <button class="btn btn-icon" (click)="showNew.set(false)">✕</button>
          </div>
          <div class="modal-body">
            <div class="form-grid">
              <div class="form-group">
                <label class="form-label">{{ t().firstName }}</label>
                <input class="form-control" [(ngModel)]="newDto.firstName" />
              </div>
              <div class="form-group">
                <label class="form-label">{{ t().lastName }}</label>
                <input class="form-control" [(ngModel)]="newDto.lastName" />
              </div>
              <div class="form-group">
                <label class="form-label">{{ t().phone }}</label>
                <input class="form-control" [(ngModel)]="newDto.phone" />
              </div>
              <div class="form-group">
                <label class="form-label">{{ t().idNumber }}</label>
                <input class="form-control" [(ngModel)]="newDto.idNumber" />
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button class="btn btn-ghost" (click)="showNew.set(false)">{{ t().cancel }}</button>
            <button class="btn btn-primary" (click)="create()">{{ t().create }}</button>
          </div>
        </div>
      </div>
    }
  `,
})
export class CustomersComponent implements OnInit {
  customers     = signal<Customer[]>([]);
  selected      = signal<Customer | null>(null);
  showNew       = signal(false);
  importPreview = signal<Record<string, string>[]>([]);
  search        = '';
  editDto: any  = {};
  newDto: any   = { firstName:'', lastName:'', phone:'', idNumber:'' };

  constructor(
    private svc:   CustomerService,
    private toast: ToastService,
    public  i18n:  I18nService,
    private csv:   CsvService,
  ) {}

  t = this.i18n.t;

  ngOnInit() { this.load(); }

  load() {
    const p: any = {};
    if (this.search) p['search'] = this.search;
    this.svc.getAll(p).subscribe(c => this.customers.set(c));
  }

  select(c: Customer) {
    this.selected.set(c);
    this.editDto = { firstName: c.firstName, lastName: c.lastName, phone: c.phone, idNumber: c.idNumber };
  }

  // ── CSV EXPORT ───────────────────────────────────────────────
  exportCsv() {
    this.csv.export(this.customers(), EXPORT_HEADERS as any, 'customers');
    this.toast.success(`${this.customers().length} ${this.i18n.t().exported}`);
  }

  // ── VORLAGE ──────────────────────────────────────────────────
  downloadTemplate() {
    this.csv.downloadTemplate(IMPORT_TEMPLATE, 'customers_import');
    this.toast.info(this.i18n.t().templateDownloaded);
  }

  // ── CSV IMPORT ───────────────────────────────────────────────
  async importCsv(event: Event) {
    const file = (event.target as HTMLInputElement).files?.[0];
    if (!file) return;
    (event.target as HTMLInputElement).value = '';
    try {
      const rows = await this.csv.import(file);
      if (!rows.length) { this.toast.error(this.i18n.t().csvEmpty); return; }
      const required = ['First Name', 'Last Name'];
      const missing  = required.filter(f => !(f in rows[0]));
      if (missing.length) { this.toast.error(`${this.i18n.t().missingColumns} ${missing.join(', ')}`); return; }
      this.importPreview.set(rows);
      this.toast.info(`${rows.length} ${this.i18n.t().rowsLoaded}`);
    } catch (e: any) {
      this.toast.error(e.message ?? this.i18n.t().importFailed);
    }
  }

  confirmImport() {
    const rows = this.importPreview();
    let ok = 0, fail = 0;
    let idx = 0;
    const next = () => {
      if (idx >= rows.length) {
        this.toast.success(`Import: ${ok} ✓  ${fail} ✗`);
        this.importPreview.set([]);
        this.load();
        return;
      }
      const r = rows[idx++];
      this.svc.create({
        firstName: r['First Name'] || '',
        lastName:  r['Last Name']  || '',
        phone:     r['Phone']      || '',
        idNumber:  r['ID Number']  || '',
      }).subscribe({ next: () => { ok++;   next(); }, error: () => { fail++; next(); } });
    };
    next();
  }

  save() {
    this.svc.update(this.selected()!.id, this.editDto).subscribe({
      next: u => {
        this.customers.update(l => l.map(c => c.id === u.id ? u : c));
        this.toast.success(this.i18n.t().customerUpdated);
        this.selected.set(null);
      },
      error: () => this.toast.error(this.i18n.t().statusUpdateError),
    });
  }

  create() {
    this.svc.create(this.newDto).subscribe({
      next: () => { this.toast.success(this.i18n.t().customerCreated); this.showNew.set(false); this.load(); },
      error: () => this.toast.error(this.i18n.t().creationError),
    });
  }
}
