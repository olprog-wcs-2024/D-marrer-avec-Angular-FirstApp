import { NgIf, NgStyle } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-user-admin',
  standalone: true,
  imports: [NgStyle,NgIf],
  templateUrl: './user-admin.component.html',
  styleUrl: './user-admin.component.css'
})
export class UserAdminComponent {

  title: string = 'Raclette party 🧀';


  isAdmin: boolean = true;

  changeRole() {
    this.isAdmin = !this.isAdmin;
  }

}
