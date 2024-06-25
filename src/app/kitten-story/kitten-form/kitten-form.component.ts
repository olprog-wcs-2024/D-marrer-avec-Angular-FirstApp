import { Component } from '@angular/core';
import { KittenService, Kitten } from '../../services/kitten.service';

@Component({
  selector: 'app-kitten-form',
  standalone: true,
  imports: [],
  templateUrl: './kitten-form.component.html',
  styleUrl: './kitten-form.component.css'
})
export class KittenFormComponent {
  name = '';
  breed = '';
  birthDate = '';
  imageUrl = '';
  isValid = false;

  constructor(private kittenService: KittenService) {}

  validateForm() {
    this.isValid = this.name !== '' && this.breed !== '' && this.birthDate !== '' && this.imageUrl !== '';
  }

  addKitten() {
    if (this.isValid) {
      const newKitten: Kitten = {
        name: this.name,
        breed: this.breed,
        birthDate: this.birthDate,
        imageUrl: this.imageUrl
      };
      this.kittenService.addKitten(newKitten);
      this.name = '';
      this.breed = '';
      this.birthDate = '';
      this.imageUrl = '';
      this.isValid = false;
    }
  }
}
