import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-policy-card',
  standalone: true,
  templateUrl: './policy-card.component.html',
  styleUrl: './policy-card.component.css',
})
export class PolicyCardComponent {
  @Input() policyNumber = '';
  @Input() premium = 0;
  @Input() active = false;
  @Input() status = 'Active';
  @Output() view = new EventEmitter<string>();
  @Output() renew = new EventEmitter<string>();

  onView() {
    this.view.emit(this.policyNumber);
  }

  onRenew() {
    this.renew.emit(this.policyNumber);
  }

  get statusColor() {
    const normalizedStatus = this.status.trim().toLowerCase();

    if (normalizedStatus === 'active') {
      return '#198754';
    }

    if (normalizedStatus === 'pending') {
      return '#fd7e14';
    }

    if (normalizedStatus === 'expired' || normalizedStatus === 'inactive') {
      return '#dc3545';
    }

    return '#6c757d';
  }
}
