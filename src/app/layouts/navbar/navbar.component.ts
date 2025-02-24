import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-navbar',
  imports: [FormsModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  searchTerm: string = '';

  @Output() searchTermChange: EventEmitter<string> = new EventEmitter();

  onSearchChange() {
    this.searchTermChange.emit(this.searchTerm);
  }

}
