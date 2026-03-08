import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AuditService } from '../../core/services/api.service';
import { I18nService } from '../../core/services/i18n.service';
import { AuditLog } from '../../core/models';

@Component({
  selector: 'app-audit',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="page-header">
      <div>
        <h1 class="page-title">{{ t().audit }}</h1>
        <p class="page-subtitle">{{ total() }} {{ t().totalEntries }}</p>
      </div>
    </div>
    <div class="filters-bar">
      <input class="form-control" type="search" [(ngModel)]="search" [placeholder]="t().search" (input)="load()" />
    </div>
    <div class="card" style="padding:0">
      <div class="table-wrap">
        <table>
          <thead>
            <tr><th>{{ t().user }}</th><th>{{ t().action }}</th><th>{{ t().entity }}</th><th>ID</th><th>IP</th><th>{{ t().date }}</th></tr>
          </thead>
          <tbody>
            @for (a of logs(); track a.id) {
              <tr>
                <td class="fw-600">{{ a.user }}</td>
                <td><span class="badge badge-created">{{ a.action }}</span></td>
                <td class="text-muted">{{ a.entity }}</td>
                <td><code style="font-size:.75rem;color:var(--accent)">{{ a.entityId }}</code></td>
                <td class="text-muted">{{ a.ipAddress }}</td>
                <td class="text-muted">{{ a.createdAt | date:'dd.MM.yy HH:mm' }}</td>
              </tr>
            } @empty {
              <tr><td colspan="6"><div class="empty-state"><div class="empty-icon">📋</div><h3>{{ t().noEntries }}</h3></div></td></tr>
            }
          </tbody>
        </table>
      </div>
    </div>
  `,
})
export class AuditComponent implements OnInit {
  logs   = signal<AuditLog[]>([]);
  total  = signal(0);
  search = '';
  constructor(private svc: AuditService, public i18n: I18nService) {}
  t = this.i18n.t;
  ngOnInit() { this.load(); }
  load() {
    const p: any = {};
    if (this.search) p['search'] = this.search;
    this.svc.getAll(p).subscribe(r => { this.logs.set(r.data); this.total.set(r.total); });
  }
}
