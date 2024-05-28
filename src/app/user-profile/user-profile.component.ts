import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { first } from 'rxjs';

@Component({
  selector: 'app-user-profile',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-profile.component.html',
  styleUrl: './user-profile.component.css'
})
export class UserProfileComponent {

  user = {
    name: 'Doe',
    firstName: 'John',
    age : 25,
    quote: '',
    photo : 'https://randomuser.me/api/portraits/lego/2.jpg'
  }

}
