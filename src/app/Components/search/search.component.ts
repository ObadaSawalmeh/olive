import { Component } from '@angular/core';
import { IconComponent } from '../icon/icon.component';
@Component({
  selector: 'app-search',
  standalone: true,
  imports: [IconComponent],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css',
})
export class SearchComponent {}
