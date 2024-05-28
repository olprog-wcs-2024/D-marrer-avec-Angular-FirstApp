import { Component } from '@angular/core';

@Component({
  selector: 'app-block',
  standalone: true,
  imports: [],
  templateUrl: './block.component.html',
  styleUrl: './block.component.css'
})
export class BlockComponent {

  title: string = 'Disposition des blocs';

  abcBlock = "A B C";
}
