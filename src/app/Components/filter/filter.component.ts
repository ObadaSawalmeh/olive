import { Component } from '@angular/core';
import { IconComponent } from '../icon/icon.component';
@Component({
  selector: 'app-filter',
  standalone: true,
  imports: [IconComponent],
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.css',
})
export class FilterComponent {}
