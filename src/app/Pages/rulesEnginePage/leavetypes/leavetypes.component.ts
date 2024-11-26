import { Component } from '@angular/core';
import { TableComponent } from '../../../Components/table/table.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-leavetypes',
  standalone: true,
  imports: [TableComponent],
  templateUrl: './leavetypes.component.html',
  styleUrl: './leavetypes.component.css',
})
export class LeavetypesComponent {
  tableHeaders = ['Type Name', 'Validity', 'Status', 'Actions'];

  tableData = [
    {
      'Type Name': 'Annual',
      Validity: {
        type: 'button',
        label: 'Limited',
        class: 'status status--draft',
      },

      Status: { type: 'button', label: 'Draft', class: 'status status--draft' },
      Actions: { type: 'icon', class: 'pi pi-ellipsis-v actions--btn' },
    },
    {
      'Type Name': 'Sick',
      Validity: {
        type: 'button',
        label: 'Unlimited',
        class: 'status status--draft',
      },

      Status: { type: 'button', label: 'Draft', class: 'status status--draft' },
      Actions: { type: 'icon', class: 'pi pi-ellipsis-v actions--btn' },
    },
    {
      'Type Name': 'Maternity',
      Validity: {
        type: 'button',
        label: 'Unlimited',
        class: 'status status--draft',
      },

      Status: { type: 'button', label: 'Draft', class: 'status status--draft' },
      Actions: { type: 'icon', class: 'pi pi-ellipsis-v actions--btn' },
    },
    {
      'Type Name': 'pligrimage',
      Validity: {
        type: 'button',
        label: 'Unlimited',
        class: 'status status--draft',
      },

      Status: { type: 'button', label: 'Draft', class: 'status status--draft' },
      Actions: { type: 'icon', class: 'pi pi-ellipsis-v actions--btn' },
    },
    {
      'Type Name': 'Not Paid',
      Validity: {
        type: 'button',
        label: 'Unlimited',
        class: 'status status--draft',
      },
      Status: { type: 'button', label: 'Draft', class: 'status status--draft' },
      Actions: { type: 'icon', class: 'pi pi-ellipsis-v actions--btn' },
    },
  ];
  constructor(private router: Router) {}
  navigateTo(route: string): void {
    this.router.navigate([`/${route}`]);
  }
}
