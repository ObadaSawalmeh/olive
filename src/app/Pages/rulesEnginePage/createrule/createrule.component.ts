import { Component } from '@angular/core';
import { FormComponent } from '../../../Components/form/form.component';

@Component({
  selector: 'app-create-rule',
  standalone: true,
  imports: [FormComponent],
  templateUrl: './createrule.component.html',
  styleUrls: ['./createrule.component.css'],
})
export class CreateRuleComponent {}
