import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { User } from '../models/userTemplateForm.models';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user-reactive-form-quete15',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './user-reactive-form-quete15.component.html',
  styleUrl: './user-reactive-form-quete15.component.css'
})
export class UserReactiveFormQuete15Component {

  userForm = this.fb.group({
    userName: ['', [Validators.required, Validators.minLength(3)]],
    credentials: this.fb.group({
      userMail: ['', [Validators.required, Validators.email]],
    userPassword: ['', [
      Validators.required,
      Validators.minLength(8),
      Validators.pattern('(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!@#$%^&*]).*')
    ]],
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

}
