import { Component } from '@angular/core';
import { Movie } from '../models/movie.models';
import { FormBuilder, Validators, ReactiveFormsModule, FormArray } from '@angular/forms';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-reactive-form',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './reactive-form.component.html',
  styleUrl: './reactive-form.component.css'
})
export class ReactiveFormComponent {

  movieForm = this.fb.group({

    // declare all controls with validation rules
    details: this.fb.group({
      id: ['', Validators.required],
      title: ['', Validators.required]
    }),
    type: ['séries', Validators.required],
    yearRelease: ['', Validators.required],
    fiche: ['', Validators.required],


    
  });

  

  constructor(private fb: FormBuilder) {}

  onSubmit() {
    // Form submitted
    console.log('movieForm : submitted', this.movieForm.value);
  }


  ngOnInit() {
    // get Observable from FormGroup
    this.movieForm.valueChanges
      // listen to value change
      .subscribe(value => {
        console.log('orderForm value changes : ', value);
      });
  }

  
}
