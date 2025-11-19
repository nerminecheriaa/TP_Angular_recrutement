import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Cv } from '../../models/cv';

@Component({
  selector: 'app-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent {
  @Input() person!: Cv;
  @Output() itemSelected = new EventEmitter<Cv>();

  selectItem(): void {
    this.itemSelected.emit(this.person);
    
  }
}