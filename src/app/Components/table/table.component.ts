import { Component, Input } from '@angular/core';
import { NgFor, NgIf, NgSwitchCase, NgClass, NgSwitch } from '@angular/common';
import { Router } from '@angular/router';
@Component({
  selector: 'app-table',
  standalone: true,
  imports: [NgSwitchCase, NgIf, NgFor, NgClass, NgSwitch],
  templateUrl: './table.component.html',
  styleUrl: './table.component.css',
})
export class TableComponent {
  constructor(private router: Router) {}
  navigateToDetails(arg0: any) {
    this.router.navigate(['rules-engine/leavetypes']);
  }
  isActive(route: string): boolean {
    return this.router.url === `/${route}`;
  }
  @Input() headers: string[] = [];
  @Input() rows: Record<string, any>[] = [];
}
