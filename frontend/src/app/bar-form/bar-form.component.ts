import { Component, OnChanges, Input, Output, EventEmitter } from '@angular/core';
import { Bar } from '../models/bar';
import { NgForm } from '@angular/forms';
import { BarUnit } from '../bar-unit';

@Component({
  selector: 'bar-form',
  templateUrl: './bar-form.component.html',
  styleUrls: ['./bar-form.component.css']
})
export class BarFormComponent implements OnChanges {

  public barUnits = BarUnit;
  
  @Input() bar: Bar
  public model: Bar
  @Output() onSubmit = new EventEmitter<Bar>();
  
  constructor() { }
  
  ngOnChanges(): void {
    this.model = Object.assign({}, this.bar);
  }

  submit(form: NgForm): void{
    if(!form.valid){
      return;
    }
    this.onSubmit.emit(this.model);
  }

 

}
