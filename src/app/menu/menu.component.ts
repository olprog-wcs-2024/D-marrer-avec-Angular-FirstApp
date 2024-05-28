import { Component } from '@angular/core';
import { SignUpComponent } from './sign-up/sign-up.component';
import { UserProfile2Component } from './user-profile2/user-profile2.component';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [RouterLink,RouterOutlet,SignUpComponent,UserProfile2Component],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {

  title = 'Fais-moi naviguer ⛵️';
}
