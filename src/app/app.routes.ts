import { Routes } from '@angular/router';
import { ProductListLayoutComponent } from './layouts/product-list-layout/product-list-layout.component';

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
    data: { renderMode: 'client' },
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
