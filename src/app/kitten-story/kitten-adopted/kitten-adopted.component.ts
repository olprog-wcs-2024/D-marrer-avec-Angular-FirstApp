import { Component } from '@angular/core';
import { KittenService, Kitten } from '../../services/kitten.service';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-kitten-adopted',
  standalone: true,
  imports: [NgFor],
  templateUrl: './kitten-adopted.component.html',
  styleUrl: './kitten-adopted.component.css'
})

export class AdoptedKittenListComponent {
  adoptedKittens: Kitten[];

  constructor(private kittenService: KittenService) {
    this.adoptedKittens = this.kittenService.getAdoptedKittens();
  }
}
