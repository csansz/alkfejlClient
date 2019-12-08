import { Component, OnChanges, Input, Output, EventEmitter } from '@angular/core';
import { User } from '../models/user';
import { NgForm } from '@angular/forms';
import { UserUnit } from '../user-unit';

@Component({
  selector: 'user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnChanges {

  public userUnits = UserUnit;
  
  @Input() user: User
  public model: User
  @Output() onSubmit = new EventEmitter<User>();
  
  constructor() { }
  
  ngOnChanges(): void {
    this.model = Object.assign({}, this.user);
  }

  submit(form: NgForm): void{
    if(!form.valid){
      return;
    }
    this.onSubmit.emit(this.model);
  }

 

}
