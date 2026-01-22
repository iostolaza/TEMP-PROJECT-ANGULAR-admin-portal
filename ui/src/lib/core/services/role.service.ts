import { Injectable, signal, computed } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class RoleService {
  private groups = signal<string[]>(['admin']); 

  public isAdmin$ = computed(() => this.groups().includes('admin') || this.groups().some(g => g.endsWith('_admin')));
  public isManager$ = computed(() => this.groups().includes('companyA_manager') || this.groups().includes('companyB_manager'));
  public isTenant$ = computed(() => this.groups().includes('companyA_user') || this.groups().includes('companyB_user'));
  public isFacilities$ = computed(() => this.groups().includes('companyA_facilities') || this.groups().includes('companyB_facilities'));

  async refreshGroups(): Promise<void> {
    this.groups.set(['admin']);
  }

  getGroups(): string[] {
    return this.groups();
  }

  hasGroup(group: string): boolean {
    return this.groups().includes(group);
  }
}
