import { Component, signal } from '@angular/core';
import { NgClass } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SidebarService } from '../../Services/sidebar.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-sidebar',
  standalone: true,
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
  imports: [RouterModule, NgClass],
})
export class SidebarComponent {
  constructor(private router: Router, public sidebarService: SidebarService) {}

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
