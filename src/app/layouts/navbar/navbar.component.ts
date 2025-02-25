import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FlowbiteService } from '../../core/services/flowbite.service';

@Component({
  selector: 'app-navbar',
  imports: [FormsModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent implements OnInit {
  searchTerm: string = '';

  @Output() searchTermChange: EventEmitter<string> = new EventEmitter();
  constructor(private flowbiteService: FlowbiteService,) { }

  ngOnInit(): void {
    this.flowbiteService.loadFlowbite(flowbite => {
      // Your custom code here
      console.log('Flowbite loaded', flowbite);
    });
  }
  onSearchChange() {
    this.searchTermChange.emit(this.searchTerm);
  }

}
