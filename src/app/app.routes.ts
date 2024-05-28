import { Routes } from '@angular/router';
import { SignUpComponent } from './menu/sign-up/sign-up.component';
import { UserProfile2Component } from './menu/user-profile2/user-profile2.component';

export const routes: Routes = [
    {path:'sign-up', component: SignUpComponent},
    {path:'user-profile2', component: UserProfile2Component},
];
