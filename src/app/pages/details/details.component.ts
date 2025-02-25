import { Component, OnInit } from '@angular/core';
import { IProduct } from '../../core/interfaces/iproduct';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { ProductsService } from '../../core/services/products.service';
import { CurrencyPipe } from '@angular/common';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';
import { FlowbiteService } from '../../core/services/flowbite.service';
@Component({
  selector: 'app-details',
  imports: [CurrencyPipe, RouterLink, CarouselModule],
  templateUrl: './details.component.html',
  styleUrl: './details.component.scss'
})
export class DetailsComponent implements OnInit {
  id: string = '';
  productData: IProduct = {} as IProduct;
  relatedProducts: IProduct[] = [];
  constructor(private activatedRoute: ActivatedRoute, private products: ProductsService, private flowbiteService: FlowbiteService) { }
  customOptions: OwlOptions = {
    loop: false,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    margin: 50,
    navSpeed: 700,
    navText: ['<i class="fa-solid fa-angle-left text-black" ></i>',
      '<i class="fa-solid fa-angle-right text-black"></i>',],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      }
    },
    nav: true
  }
  ngOnInit(): void {
    this.flowbiteService.loadFlowbite(flowbite => {
      // Your custom code here
      console.log('Flowbite loaded', flowbite);
    });
    this.activatedRoute.paramMap.subscribe({
      next: (p) => {
        this.id = p.get('id') as string
        this.displayProductDetails();
      }
    })

  }
  displayProductDetails() {
    this.products.getSpecificProduct(this.id).subscribe({
      next: (res) => {
        this.productData = res
        this.loadRelatedProducts(res.category);


      }, error: (err) => {
        console.log(err);

      }
    })
  }
  loadRelatedProducts(category: string) {
    this.products.getProductsByCategory(category).subscribe({
      next: (res) => {
        this.relatedProducts = res.filter(product => product.id !== this.id); // Exclude current product
      },
      error: (err) => {
        console.log(err);
      }
    });
  }
}
