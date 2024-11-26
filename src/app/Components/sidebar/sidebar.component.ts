import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent {
  constructor(private router: Router) {}

  navigateTo(route: string): void {
    const validRoutes = [
      'rules-engine',
      'dashboard',
      'accounts',
      'billing',
      'usermanagement',
      'settings',
    ];
    if (validRoutes.includes(route)) {
      this.router.navigate([`/${route}`]);
    } else {
      console.warn(`Invalid route: ${route}`);
      this.router.navigate(['/notfound']);
    }
  }

  isActive(route: string): boolean {
    return this.router.url === `/${route}`;
  }
}
