import { Component, OnChanges, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../models/product';
import { NgForm } from '@angular/forms';
import { ProductUnit } from '../product-unit';

@Component({
  selector: 'product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnChanges {

  public productUnits = ProductUnit;
  
  @Input() product: Product
  public model: Product
  @Output() onSubmit = new EventEmitter<Product>();
  
  constructor() { }
  
  ngOnChanges(): void {
    this.model = Object.assign({}, this.product);
  }

  submit(form: NgForm): void{
    if(!form.valid){
      return;
    }
    this.onSubmit.emit(this.model);
  }

  selectedUnit: string;
  units: String[] = ["BOTTLE","DECILITER","CENTILITER"];
 

}
