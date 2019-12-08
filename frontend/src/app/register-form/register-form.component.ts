import { Component, OnInit, EventEmitter, Output, Input, OnChanges } from '@angular/core';
import { User } from '../models/user';
import { NgForm } from '@angular/forms';
import { UserRoles } from '../user-roles';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent implements OnChanges {
  public userRoles = UserRoles;

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

  selectedRole: string;
  public roles: String[] = ["ROLE_BARTENDER", "ROLE_BOSS", "ROLE_ADMIN"];

}
