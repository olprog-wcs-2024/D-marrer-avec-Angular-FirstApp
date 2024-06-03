import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { BlockComponent } from './block/block.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { UserAdminComponent } from './user-admin/user-admin.component';
import { MenuComponent } from './menu/menu.component';
import { SignUpFormComponent } from './sign-up-form/sign-up-form.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { DeveloperComponent } from './developer/developer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,RouterLink,BlockComponent,UserProfileComponent,UserAdminComponent,MenuComponent,SignUpFormComponent,ReactiveFormComponent,DeveloperComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'

})
export class AppComponent {
  title = 'Bienvenue sur le site de Mounir !';
}
