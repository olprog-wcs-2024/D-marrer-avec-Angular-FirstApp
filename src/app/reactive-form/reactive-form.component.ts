import { Component } from '@angular/core';
import { Movie } from '../models/movie.models';

@Component({
  selector: 'app-reactive-form',
  standalone: true,
  imports: [],
  templateUrl: './reactive-form.component.html',
  styleUrl: './reactive-form.component.css'
})
export class ReactiveFormComponent {

  newMovie: Movie = {
    id: '',
    title: '',
    type: '',
    yearRelease: 0,
    fiche: ''
  };

  onSubmit() {
    // Form submitted
    console.log(this.newMovie);
  }
}
