import { Component, Input } from '@angular/core';
import { NavbarComponent } from "../navbar/navbar.component";
import { RouterOutlet } from '@angular/router';
import { ProductsComponent } from "../../pages/products/products.component";

@Component({
  selector: 'app-sidebar',
  imports: [NavbarComponent, ProductsComponent],
  templateUrl: './sidebar.component.html',

  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {
  searchTerm: string = '';

  onSearchTermChange(term: string) {
    this.searchTerm = term;
  }
}
