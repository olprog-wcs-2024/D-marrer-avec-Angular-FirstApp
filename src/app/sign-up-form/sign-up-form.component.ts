import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Order } from '../models/order.models';

@Component({
  selector: 'app-sign-up-form',
  standalone: true,
  imports: [FormsModule,],
  templateUrl: './sign-up-form.component.html',
  styleUrl: './sign-up-form.component.css'
})
export class SignUpFormComponent {

    newOrder: Order = {
      title: "",
      quantity: 0,
      date: new Date(),
      contact: ""
    };

  onSubmit(): void {
    // form submitted
    console.log(this.newOrder);
  }

}
