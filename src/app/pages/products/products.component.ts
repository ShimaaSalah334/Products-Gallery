import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { ProductsService } from '../../core/services/products.service';
import { IProduct } from '../../core/interfaces/iproduct';
import { RouterLink } from '@angular/router';
import { CurrencyPipe } from '@angular/common';
import { SearchPipe } from '../../shared/pipes/search.pipe';
import { FormsModule } from '@angular/forms';
import { FlowbiteService } from '../../core/services/flowbite.service';


@Component({
  selector: 'app-products',
  imports: [RouterLink, CurrencyPipe, SearchPipe, FormsModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent implements OnInit {
  @Input() searchTerm: string = '';
  productsList: IProduct[] = []

  constructor(private products: ProductsService, private flowbiteService: FlowbiteService) { }
  ngOnInit(): void {
    this.flowbiteService.loadFlowbite(flowbite => {
      // Your custom code here
      console.log('Flowbite loaded', flowbite);
    });
    this.displayProducts();

  }
  displayProducts() {
    this.products.getProducts().subscribe({
      next: (res) => {
        this.productsList = res

      }, error: (err) => {
        console.log(err);

      }
    })
  }

}
