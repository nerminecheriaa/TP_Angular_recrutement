import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Cv } from '../../models/cv';

@Component({
  selector: 'app-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent {
  @Input() person: Cv | null = null;
}