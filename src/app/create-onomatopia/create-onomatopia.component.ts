import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule} from '@angular/forms';


@Component({
  selector: 'app-create-onomatopia',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './create-onomatopia.component.html',
  styleUrl: './create-onomatopia.component.css'
})

export class CreateOnomatopiaComponent {
  newOnomatopia: string = '';
  @Output() sendOnomatopiaToParent = new EventEmitter<string>();

  createOnomatopia() {
    const onomatopoeiaToEmit = this.newOnomatopia.trim();
    if (onomatopoeiaToEmit) {
      console.log('Emitting:', onomatopoeiaToEmit); // Vérifiez que ce log s'affiche
      this.sendOnomatopiaToParent.emit(onomatopoeiaToEmit);
      this.newOnomatopia = ''; // Réinitialiser l'input après émission
    }
  }
}
