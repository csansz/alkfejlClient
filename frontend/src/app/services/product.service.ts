import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../models/product';
import { AuthService, httpOptions } from './auth.service';

@Injectable({
  providedIn: 'root'
})

export class ProductService {

  private productUrl: string = "http://localhost:8080/products";
  constructor(
    private http: HttpClient,
    private authService: AuthService 
  ) { }

  getProducts(): Promise<Product[]>{
    return this.http.get<Product[]>(`${this.productUrl}`, httpOptions).toPromise();
  }

  getProductById(id: number): Promise<Product>{
    return this.http.get<Product>(`${this.productUrl}` + `${id}`, httpOptions).toPromise();
  }

  createProduct(product: Product): Promise<Product>{
    return this.http.post<Product>(`${this.productUrl}`, product, httpOptions).toPromise();
  }

  updateProduct(product: Product): Promise<Product>{
    return this.http.put<Product>(`${this.http.put}/${product.id}`, product, httpOptions).toPromise();
  }

  deleteProduct(id: number): Promise<Product>{
    return this.http.delete<Product>(`${this.productUrl}/${id}`, httpOptions).toPromise();
  }

  

}
