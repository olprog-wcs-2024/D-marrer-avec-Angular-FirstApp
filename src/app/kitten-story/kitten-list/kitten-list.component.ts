import { Component, NgModule } from '@angular/core';
import { KittenService, Kitten } from '../../services/kitten.service';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-kitten-list',
  standalone: true,
  imports: [NgFor],
  templateUrl: './kitten-list.component.html',
  styleUrl: './kitten-list.component.css'
})

export class KittenListComponent {
  kittens: Kitten[];

  constructor(private kittenService: KittenService) {
    this.kittens = this.kittenService.getKittens();
  }

  adoptKitten(index: number) {
    this.kittenService.adoptKitten(index);
  }
}
