import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { map, Observable, shareReplay } from 'rxjs';

export interface Policy {
  number: string;
  premium: number;
  status: string;
}

@Injectable({
  providedIn: 'root',
})
export class PolicyService {
  private http = inject(HttpClient);
  private policies$ = this.http
    .get<Policy[]>('/policies.json')
    .pipe(shareReplay(1));

  getPolicies(): Observable<Policy[]> {
    return this.policies$;
  }

  getById(number: string): Observable<Policy | undefined> {
    return this.getPolicies().pipe(
      map((policies) => policies.find((policy) => policy.number === number)),
    );
  }
}
