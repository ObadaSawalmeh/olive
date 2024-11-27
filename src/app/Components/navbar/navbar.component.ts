import { Component } from '@angular/core';
import { SidebarService } from '../../Services/Sidebar/sidebar.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {
  // remember to have default values when dealing with data coming from da api's
  constructor(private sidebarService: SidebarService) {}
  userImage =
    'https://i.pinimg.com/564x/b5/12/68/b5126803cf115b044849b64ca565a4a7.jpg';
  userName = 'Gavano';
  userRole = 'HR Manager';
  toggleSidebar() {
    this.sidebarService.toggleSidebar();
  }
}
