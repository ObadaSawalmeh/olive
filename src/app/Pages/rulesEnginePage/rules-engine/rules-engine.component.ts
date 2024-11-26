import { Component } from '@angular/core';
import { TableComponent } from '../../../Components/table/table.component';

@Component({
  selector: 'app-rules-engine',
  standalone: true,
  imports: [TableComponent],
  templateUrl: './rules-engine.component.html',
  styleUrl: './rules-engine.component.css',
})
export class RulesEngineComponent {
  tableHeaders: string[] = [
    'Rule name',
    'Module',
    'Country',
    'Status',
    'Actions',
  ];
  tableData: Array<{ [key: string]: any }> = [
    {
      'Rule name': 'Leave Types',
      Module: { type: 'button', label: 'Leaves', class: 'module--btn' },
      Country: {
        type: 'image',
        src: 'https://cdn2.iconfinder.com/data/icons/world-flag-2/30/2-512.png',
        alt: 'Palestine',
      },
      Status: { type: 'button', label: 'Draft', class: 'status status--draft' },
      Actions: { type: 'icon', class: 'pi pi-ellipsis-v actions--btn' },
    },
    {
      'Rule name': 'Leave Types',
      Module: { type: 'button', label: 'Leaves', class: 'module--btn' },
      Country: {
        type: 'image',
        src: 'https://w7.pngwing.com/pngs/367/785/png-transparent-saudi-arab-asia-circle-country-flag-nation-national-o-shaped-flag-icon.png',
        alt: 'Saudi Arabia',
      },
      Status: {
        type: 'button',
        label: 'Active',
        class: 'status status--active',
      },
      Actions: { type: 'icon', class: 'pi pi-ellipsis-v actions--btn' },
    },
    {
      'Rule name': 'Country General',
      Module: { type: 'button', label: 'Attendance', class: 'module--btn' },
      Country: {
        type: 'image',
        src: 'https://cdn2.iconfinder.com/data/icons/world-flag-2/30/2-512.png',
        alt: 'Palestine',
      },
      Status: { type: 'button', label: 'Draft', class: 'status status--draft' },
      Actions: { type: 'icon', class: 'pi pi-ellipsis-v actions--btn' },
    },
    {
      'Rule name': 'Time Tracking',
      Module: { type: 'button', label: 'Leaves', class: 'module--btn' },
      Country: {
        type: 'image',
        src: 'https://cdn2.iconfinder.com/data/icons/world-flag-2/30/2-512.png',
        alt: 'Palestine',
      },
      Status: { type: 'button', label: 'Draft', class: 'status status--draft' },
      Actions: { type: 'icon', class: 'pi pi-ellipsis-v actions--btn' },
    },
    {
      'Rule name': 'Time Tracking',
      Module: { type: 'button', label: 'Leaves', class: 'module--btn' },
      Country: {
        type: 'image',
        src: 'https://w7.pngwing.com/pngs/367/785/png-transparent-saudi-arab-asia-circle-country-flag-nation-national-o-shaped-flag-icon.png',
        alt: 'Saudi Arabia',
      },
      Status: {
        type: 'button',
        label: 'Active',
        class: 'status status--active',
      },
      Actions: { type: 'icon', class: 'pi pi-ellipsis-v actions--btn' },
    },
  ];
}
