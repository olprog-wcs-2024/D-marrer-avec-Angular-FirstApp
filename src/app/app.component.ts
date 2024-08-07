import { Component, inject } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { BlockComponent } from './block/block.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { UserAdminComponent } from './user-admin/user-admin.component';
import { MenuComponent } from './menu/menu.component';
import { SignUpFormComponent } from './sign-up-form/sign-up-form.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { DeveloperComponent } from './developer/developer.component';
import { CreateOnomatopiaComponent } from "./create-onomatopia/create-onomatopia.component";
import { CommonModule } from '@angular/common';
import { KittenFormComponent } from './kitten-story/kitten-form/kitten-form.component';
import { KittenListComponent } from './kitten-story/kitten-list/kitten-list.component';
import { AdoptedKittenListComponent } from './kitten-story/kitten-adopted/kitten-adopted.component';
import { CocktailListComponent } from "./cocktail-list/cocktail-list.component";
import { NasaService, ObjectfromNasa } from './services/nasa.service';
import { UserTemplateFormQuete14Component } from './user-template-form-quete14/user-template-form-quete14.component';
import { UserReactiveFormQuete15Component } from "./user-reactive-form-quete15/user-reactive-form-quete15.component";
import { FormValidatorQuete16Component } from "./form-validator-quete16/form-validator-quete16.component";
import { InterceptorQuete17Component } from './interceptor-quete17/interceptor-quete17.component';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, CommonModule, RouterLink, BlockComponent, UserProfileComponent, UserAdminComponent, MenuComponent, SignUpFormComponent, ReactiveFormComponent, DeveloperComponent, CreateOnomatopiaComponent, KittenFormComponent, KittenListComponent, AdoptedKittenListComponent, CocktailListComponent, UserTemplateFormQuete14Component, UserReactiveFormQuete15Component, FormValidatorQuete16Component, InterceptorQuete17Component]
})
export class AppComponent {

  title = 'D-marrer-avec-Angular-FirstApp';

  onomatopoeiaList: string[] = [];

  onReceiveNewOnomatopia(newOnomatopia: string) {
    console.log('Received:', newOnomatopia); // Vérifiez que ce log s'affiche
    this.onomatopoeiaList.push(newOnomatopia);
    console.log('Updated list:', this.onomatopoeiaList); // Vérifiez que la liste est mise à jour
  }

  objectOfTheDay?: ObjectfromNasa;

  private nasaService = inject(NasaService);

  ngOnInit(): void {
    this.nasaService.getImageOfTheDay().subscribe(data => {
      this.objectOfTheDay = data;
    });
  }
  


}
