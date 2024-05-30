import { Component } from '@angular/core';
import { Movie } from '../models/movie.models';
import { FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';


@Component({
  selector: 'app-reactive-form',
  standalone: true,
  imports: [ReactiveFormsModule, Validators, FormBuilder],
  templateUrl: './reactive-form.component.html',
  styleUrl: './reactive-form.component.css'
})
export class ReactiveFormComponent {

  movieForm = this.fb.group({
    id: ['', Validators.required],
    title: ['', Validators.required],
    type: ['', Validators.required],
    yearRelease: ['', Validators.required],
    fiche: ['', Validators.required],

  });

  constructor(private fb: FormBuilder) {}

  onSubmit() {
    // Form submitted
    console.log('movieForm : submitted', this.movieForm.value);
  }
}
