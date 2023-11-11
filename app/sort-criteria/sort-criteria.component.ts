import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sort-criteria',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sort-criteria.component.html',
  styleUrl: './sort-criteria.component.css'
})
export class SortCriteriaComponent {
  @Output() sortCriteriaChanged = new EventEmitter<string>();

  onSortCriteriaChange(criteria: string) {
    this.sortCriteriaChanged.emit(criteria);
  }
}
