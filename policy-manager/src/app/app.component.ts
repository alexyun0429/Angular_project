import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PolicyCardComponent } from './policy-card/policy-card.component';
import { PolicyService } from './policy.service';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [AsyncPipe, PolicyCardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'policy-manager';

  private policyService = inject(PolicyService);
  policies$ = this.policyService.getPolicies(); // Observable<Policy[]>, The $ suffix on policies$ is a convention meaning 'this is an Observable'

  onViewPolicy(policyNumber: string) {
    this.policyService.getById(policyNumber).subscribe((policy) => {
      console.log('Viewing policy:', policy);
    });
  }

  onRenewPolicy(policyNumber: string) {
    this.policyService.getById(policyNumber).subscribe((policy) => {
      console.log('Renewing policy:', policy);
    });
  }
}
