import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
// sidebar service to toggle the menu
import { SidebarService } from '../../Services/Sidebar/sidebar.service';
import { IconComponent } from '../icon/icon.component';
import { RouterModule, Router } from '@angular/router';
@Component({
  selector: 'app-sidebar',
  standalone: true,
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
  imports: [RouterModule, IconComponent, NgFor],
})
export class SidebarComponent {
  sidebarItems = [
    { label: 'Dashboard', icon: 'dashboard', link: '/dashboard' },
    { label: 'Rules Engine', icon: 'rulesEngine', link: '/rules-engine' },
    { label: 'Accounts', icon: 'accounts', link: '/accounts' },
    { label: 'Billing', icon: 'billing', link: '/billing' },
    {
      label: 'User Management',
      icon: 'usermanagement',
      link: '/usermanagement',
    },
    { label: 'Settings', icon: 'settings', link: '/settings' },
  ];

  constructor(private router: Router, public sidebarService: SidebarService) {}
}
