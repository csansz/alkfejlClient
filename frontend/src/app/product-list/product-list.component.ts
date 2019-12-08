import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  public products: Product[];
  public selectedProduct: Product;

  private allProducts: Product[] = [];

  constructor(
    private productService: ProductService
  ) { }

  async ngOnInit(): Promise<void> {
    this.allProducts = await this.productService.getProducts();
    this.filter();
  }

  onSelectProduct(product: Product): void{
    this.selectedProduct = product;
  }

  onDeleteClick(id: number) {
    this.productService.deleteProduct(id)
    .then(async () => {
      this.selectedProduct = null;
      this.allProducts = await this.productService.getProducts();
      this.filter();
    })
  }

  onNewClick(): void {
    this.selectedProduct = new Product();
  }

  async onFormSubmit(product: Product): Promise<void> {
    if (product.id > 0) {
      await this.productService.updateProduct(product)
      this.selectedProduct.name = product.name;
      this.selectedProduct.price = product.price;
      this.selectedProduct.amount = product.amount;
    } else {
      this.selectedProduct.id = Math.floor(Math.random()*184597);
      this.selectedProduct.name = product.name;
      this.selectedProduct.price = product.price;
      this.selectedProduct.amount = product.amount;
      this.productService.createProduct(product)
                        .then(createdProduct => {
                          this.allProducts.push(createdProduct);
                        });
    }
    this.selectedProduct = null;
  }

  private filter(): void{
    this.products = this.allProducts;
  }
}
