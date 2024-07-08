import { Component } from '@angular/core';
import { Validators, FormBuilder, ReactiveFormsModule, AbstractControl, ValidationErrors } from '@angular/forms';
import { User } from '../models/userTemplateForm.models';
import { CommonModule } from '@angular/common';
import { emailValidator } from './email-validator';

@Component({
  selector: 'app-form-validator-quete16',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './form-validator-quete16.component.html',
  styleUrl: './form-validator-quete16.component.css'
})
export class FormValidatorQuete16Component {

  userForm = this.fb.group({
    userName: ['', [Validators.required, Validators.minLength(3)]],
    credentials: this.fb.group({
      userMail: ['', [Validators.required, Validators.email, emailValidator]],
    userPassword: ['', [
      Validators.required,
      this.passwordValidator]],
    }),
    userAddress: this.fb.group({
      street: ['', Validators.required],
      postalCode: ['', [Validators.required, Validators.pattern('^[0-9]{5}$')]],
      city: ['', Validators.required]
    })
});


constructor(private fb: FormBuilder) {}

newUser!: User;

onSubmit() {
  if (this.userForm.valid) {
    this.newUser = this.userForm.value as User;
    console.log('New User:', this.newUser);
  }
}
 passwordValidator(control: AbstractControl): ValidationErrors | null {
  // One uppercase at least
  const passwordRegex = RegExp('(?=.*[A-Z])');
  const valid = passwordRegex.test(control.value);

  const errors = {
      password: {
          rules: 'must contain at least one uppercase letter'
      }
  };

  return !valid ? errors : null;
}


}
