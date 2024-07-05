import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { User } from '../models/userTemplateForm.models';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-user-template-form-quete14',
  standalone: true,
  imports: [ReactiveFormsModule, NgIf],
  templateUrl: './user-template-form-quete14.component.html',
  styleUrls: ['./user-template-form-quete14.component.css']
})
export class UserTemplateFormQuete14Component {

  inscriptionForm = new FormGroup({
    userName: new FormControl('', Validators.required),
    userMail: new FormControl('', [Validators.required, Validators.email]),
    userPassword: new FormControl('', Validators.required),
    userAddress: new FormGroup({
      street: new FormControl('', Validators.required),
      postalCode: new FormControl('', Validators.required),
      city: new FormControl('', Validators.required)
    })
  });

  newUser!: User;

  onSubmit() {
    if (this.inscriptionForm.valid) {
      this.newUser = this.inscriptionForm.value as User;
      console.log('New User:', this.newUser);
    }
  }
}
