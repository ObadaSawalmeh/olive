import { Component, Input } from '@angular/core';
import { NgFor, NgIf, NgSwitchCase, NgClass, NgSwitch } from '@angular/common';
import { Router } from '@angular/router';
import { IconService } from '../../Services/Icons/icon.service';
import { IconComponent } from "../icon/icon.component";
@Component({
  selector: 'app-table',
  standalone: true,
  imports: [NgSwitchCase, NgIf, NgFor, NgClass, NgSwitch, IconComponent],
  templateUrl: './table.component.html',
  styleUrl: './table.component.css',
})
export class TableComponent {
  constructor(private router: Router, public icon: IconService) {}
  navigateToDetails(arg0: any) {
    this.router.navigate(['rules-engine/leavetypes']);
  }
  @Input() headers: string[] = [];
  @Input() rows: Record<string, any>[] = [];
}
