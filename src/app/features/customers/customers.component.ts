import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CustomerService } from '../../core/services/api.service';
import { ToastService } from '../../core/services/toast.service';
import { I18nService } from '../../core/services/i18n.service';
import { Customer } from '../../core/models';

@Component({
  selector: 'app-customers',
  standalone: true,
  imports: [CommonModule, FormsModule],
  styleUrl: 'customers.component.css',
  template: `
    <div class="page-header">
      <div>
        <h1 class="page-title">{{ t().customers }}</h1>
        <p class="page-subtitle">{{ customers().length }} Kunden</p>
      </div>
      <button class="btn btn-primary" (click)="showNew.set(true)">＋ Neuer Kunde</button>
    </div>

    <div class="filters-bar">
      <input class="form-control" type="search" [(ngModel)]="search"
             [placeholder]="t().search" (input)="load()" />
    </div>

    <div class="card" style="padding:0">
      <div class="table-wrap">
        <table>
          <thead>
            <tr><th>Name</th><th>Telefon</th><th>Ausweis-Nr.</th><th>Filiale</th><th>Transfers</th><th>Aktionen</th></tr>
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
                  <button class="btn btn-ghost btn-sm" (click)="select(c)">✏️ Bearbeiten</button>
                </td>
              </tr>
            } @empty {
              <tr><td colspan="6"><div class="empty-state"><div class="empty-icon">👥</div><h3>Keine Kunden</h3></div></td></tr>
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
                <label class="form-label">Vorname</label>
                <input class="form-control" [(ngModel)]="editDto.firstName" />
              </div>
              <div class="form-group">
                <label class="form-label">Nachname</label>
                <input class="form-control" [(ngModel)]="editDto.lastName" />
              </div>
              <div class="form-group">
                <label class="form-label">Telefon</label>
                <input class="form-control" [(ngModel)]="editDto.phone" />
              </div>
              <div class="form-group">
                <label class="form-label">Ausweis-Nr.</label>
                <input class="form-control" [(ngModel)]="editDto.idNumber" />
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button class="btn btn-ghost" (click)="selected.set(null)">Abbrechen</button>
            <button class="btn btn-primary" (click)="save()">Speichern</button>
          </div>
        </div>
      </div>
    }

    <!-- New Modal -->
    @if (showNew()) {
      <div class="modal-backdrop" (click)="showNew.set(false)">
        <div class="modal" (click)="$event.stopPropagation()">
          <div class="modal-header">
            <span class="modal-title">Neuer Kunde</span>
            <button class="btn btn-icon" (click)="showNew.set(false)">✕</button>
          </div>
          <div class="modal-body">
            <div class="form-grid">
              <div class="form-group">
                <label class="form-label">Vorname</label>
                <input class="form-control" [(ngModel)]="newDto.firstName" />
              </div>
              <div class="form-group">
                <label class="form-label">Nachname</label>
                <input class="form-control" [(ngModel)]="newDto.lastName" />
              </div>
              <div class="form-group">
                <label class="form-label">Telefon</label>
                <input class="form-control" [(ngModel)]="newDto.phone" />
              </div>
              <div class="form-group">
                <label class="form-label">Ausweis-Nr.</label>
                <input class="form-control" [(ngModel)]="newDto.idNumber" />
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button class="btn btn-ghost" (click)="showNew.set(false)">Abbrechen</button>
            <button class="btn btn-primary" (click)="create()">Anlegen</button>
          </div>
        </div>
      </div>
    }
  `,
})
export class CustomersComponent implements OnInit {
  customers = signal<Customer[]>([]);
  selected  = signal<Customer | null>(null);
  showNew   = signal(false);
  search    = '';
  editDto: any = {};
  newDto:  any = { firstName:'', lastName:'', phone:'', idNumber:'' };

  constructor(
    private svc:   CustomerService,
    private toast: ToastService,
    public  i18n:  I18nService,
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

  save() {
    const id = this.selected()!.id;
    this.svc.update(id, this.editDto).subscribe({
      next: updated => {
        this.customers.update(list => list.map(c => c.id === updated.id ? updated : c));
        this.toast.success('Kunde aktualisiert');
        this.selected.set(null);
      },
      error: () => this.toast.error('Fehler beim Speichern'),
    });
  }

  create() {
    this.svc.create(this.newDto).subscribe({
      next: () => { this.toast.success('Kunde angelegt'); this.showNew.set(false); this.load(); },
      error: () => this.toast.error('Fehler beim Anlegen'),
    });
  }
}
