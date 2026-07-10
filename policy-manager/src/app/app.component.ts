import { Component, inject } from '@angular/core';
import { PolicyCardComponent } from './policy-card/policy-card.component';
import { PolicyService } from './policy.service';
import { AsyncPipe } from '@angular/common';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import {
  debounceTime,
  startWith,
  distinctUntilChanged,
  switchMap,
  mergeMap,
  concatMap,
} from 'rxjs';

@Component({
  selector: 'app-root',
  imports: [AsyncPipe, PolicyCardComponent, ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  private policyService = inject(PolicyService);
  policies$ = this.policyService.getPolicies(); // Observable<Policy[]>, The $ suffix on policies$ is a convention meaning 'this is an Observable'

  search = new FormControl('');
  result$ = this.search.valueChanges.pipe(
    startWith(''),
    debounceTime(300),
    distinctUntilChanged(),
    mergeMap((term) => this.policyService.searchPolicies(term ?? '')),
  );

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
