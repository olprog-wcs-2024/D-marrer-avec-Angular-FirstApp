import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-sign-up-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './sign-up-form.component.html',
  styleUrl: './sign-up-form.component.css'
})
export class SignUpFormComponent {

  onSubmit(): void {
    // form submitted
    console.log('Formulaire envoyé !');
  }
  
}
