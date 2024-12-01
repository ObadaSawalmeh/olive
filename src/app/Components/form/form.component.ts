import { Component } from '@angular/core';
import {
  ReactiveFormsModule,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { InputGroupModule } from 'primeng/inputgroup';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { CheckboxModule } from 'primeng/checkbox';
import { InputNumberModule } from 'primeng/inputnumber';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    InputGroupModule,
    InputGroupAddonModule,
    CheckboxModule,
    InputNumberModule
  ],

  templateUrl: './form.component.html',
  styleUrl: './form.component.css',
})
export class FormComponent {
  form: FormGroup;
  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      name: [''],
      type: [''],
      unit: [''],
      entitled: [''],
      gender: [''],
      docsRequired: [''],
      employmentType: [''],
      gracePeriod: [''],
      dispute: [''],
      validity: [''],
    });
  }

  onSubmit() {
    console.log(this.form.value);
    this.form.reset();
  }
}
