import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-user-template-form-quete14',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './user-template-form-quete14.component.html',
  styleUrl: './user-template-form-quete14.component.css'
})
export class UserTemplateFormQuete14Component {

  userName = new FormControl('');
  userMail = new FormControl('');
  userPassword = new FormControl('');
  userAdress = new FormControl({
    city: '',
    street: '',
    codePosal: ''
  });
}
