import { Routes } from '@angular/router';
import { ProductListLayoutComponent } from './layouts/product-list-layout/product-list-layout.component';
import { ProductsService } from './core/services/products.service';
import { inject } from '@angular/core';
import { firstValueFrom } from 'rxjs';

export const routes: Routes = [
  { path: '', redirectTo: 'products', pathMatch: 'full' },
  {
    path: '',
    component: ProductListLayoutComponent,
    title: 'blank',
    children: [

      {
        path: 'products',
        loadComponent: () =>
          import('./pages/products/products.component').then(
            (c) => c.ProductsComponent
          ),
        title: 'products',
      },



    ],
  },
  {
    path: 'details/:id',
    loadComponent: () =>
      import('./pages/details/details.component').then(
        (c) => c.DetailsComponent
      ),
    title: 'product Details',
    data: {
      prerender: true,
      getPrerenderParams: async () => {
        try {
          // Inject the ProductsService
          const productsService = inject(ProductsService);

          // Fetch products using firstValueFrom instead of .toPromise()
          const products = await firstValueFrom(productsService.getProducts());

          if (!products || products.length === 0) {
            console.warn('No products found for prerendering.');
            return []; // Return an empty array if no products are available
          }

          // Extract IDs safely
          return products.map((product) => ({ id: String(product.id) }));

        } catch (error) {
          console.error('Error fetching product IDs for prerendering:', error);
          return []; // Return empty to prevent further issues
        }
      }
    },
  },
  {
    path: '**',
    loadComponent: () =>
      import('./pages/not-found/not-found.component').then(
        (c) => c.NotFoundComponent
      ),
    title: 'not-found',
  },
];
