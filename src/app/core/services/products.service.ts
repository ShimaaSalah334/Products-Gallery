import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { IProduct } from '../interfaces/iproduct';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http: HttpClient) { }
  getProducts(): Observable<IProduct[]> {
    return this.http.get<IProduct[]>("https://fakestoreapi.com/products");
  }
  getSpecificProduct(productId: string): Observable<IProduct> {
    return this.http.get<IProduct>(
      `https://fakestoreapi.com/products/${productId}`
    );
  }
  getProductsByCategory(category: string): Observable<IProduct[]> {
    return this.http.get<IProduct[]>(`https://fakestoreapi.com/products/category/${category}`);
  }
  getProductIds(): Observable<string[]> {
    return this.getProducts().pipe(
      map((products: IProduct[]) => // Explicitly define the type of 'products'
        products.map((product) => product.id.toString())
      ),
    );
  }
}
