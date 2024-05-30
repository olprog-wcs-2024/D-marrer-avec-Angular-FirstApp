import { Component,} from '@angular/core';
import { FormsModule,} from '@angular/forms';
import { Order } from '../models/order.models';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-sign-up-form',
  standalone: true,
  imports: [FormsModule,NgIf],
  templateUrl: './sign-up-form.component.html',
  styleUrl: './sign-up-form.component.css'
})
export class SignUpFormComponent {

  

    newOrder: Order = {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
    };

  onSubmit(): void {
    // form submitted
    console.log(this.newOrder);
  }

}
