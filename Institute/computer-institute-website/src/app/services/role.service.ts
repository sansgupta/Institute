import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class RoleService {
  private role: string = 'user'; // Default role

  setRole(role: string): void {
    this.role = role;
    localStorage.setItem('role', role); // Store the role in localStorage
  }

  getRole(): string {
    return this.role;
  }

  isAdmin(): boolean {
    return this.role === 'admin';
  }

  logout(): void {
    // Clear the role from localStorage and reset it to 'user'
    localStorage.removeItem('role');
    this.role = 'user';  // Set the default role as 'user' after logout
  }
}
