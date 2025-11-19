import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Cv } from '../../models/cv';
import { ItemComponent } from '../item/item.component';

@Component({
  selector: 'app-liste',
  standalone: true,
  imports: [CommonModule, ItemComponent],
  templateUrl: './liste.component.html',
  styleUrls: ['./liste.component.css']
})
export class ListeComponent {
  @Input() persons: Cv[] = [];
  @Output() personSelected = new EventEmitter<Cv>();

  onPersonSelected(person: Cv): void {
    this.personSelected.emit(person);
  }
}