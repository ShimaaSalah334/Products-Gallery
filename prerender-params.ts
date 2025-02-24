import { inject } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { ProductsService } from './src/app/core/services/products.service';

export async function getPrerenderParams() {
  const productsService = inject(ProductsService); // Inject the service

  try {
    // Fetch product IDs using lastValueFrom
    const productIds = await lastValueFrom(productsService.getProductIds());

    // Handle the case where productIds is undefined or empty
    if (!productIds || productIds.length === 0) {
      console.warn('No product IDs found.');
      return [];
    }

    // Map IDs to route parameters
    return productIds.map((id) => ({ id: id.toString() }));
  } catch (error) {
    console.error('Error fetching product IDs:', error);
    return []; // Return an empty array if there's an error
  }
}
