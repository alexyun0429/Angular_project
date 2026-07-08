import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PolicyCardComponent } from './policy-card/policy-card.component';
import { PolicyService } from './policy.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, PolicyCardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'policy-manager';

  private policyService = inject(PolicyService);
  policies = this.policyService.getPolicies();

  onViewPolicy(policyNumber: string) {
    const policy = this.policyService.getById(policyNumber);
    console.log('Viewing policy:', policy);
  }

  onRenewPolicy(policyNumber: string) {
    const policy = this.policyService.getById(policyNumber);
    console.log('Renewing policy:', policy);
  }
}
