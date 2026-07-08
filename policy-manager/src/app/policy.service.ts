import { Injectable } from '@angular/core';

export interface Policy { 
  number: string;
  premium: number;
  status: string;
}

@Injectable({
  providedIn: 'root'
})
export class PolicyService {
  private policies: Policy[] = [
    { number: 'POL-1001', premium: 842, status: 'Active' }, 
    { number: 'POL-1002', premium: 1200, status: 'Lapsed' },
  ];

  getPolicies(): Policy[] { return this.policies; }

  getById(number: string): Policy | undefined {
    return this.policies.find((policy) => policy.number === number);
  }
}
