import { Injectable, signal } from '@angular/core';

export type UserProfile = {
  firstName?: string;
  lastName?: string;
  username?: string;
  email?: string;
  profileImageUrl?: string;
};

@Injectable({
  providedIn: 'root',
})
export class UserService {
  public user = signal<UserProfile | null>({
    firstName: 'Francisco',
    lastName: 'Ostolaza',
    username: 'francisco',
    email: 'francisco@example.com',
    profileImageUrl: '/assets/profile/avatar-default.svg'
  });

  async load() {
    // Dummy
  }
}
