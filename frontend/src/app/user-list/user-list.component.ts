import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  public users: User[];
  public selectedUser: User;

  private allUser: User[] = [];

  constructor(
    private userService: UserService
  ) { }

  async ngOnInit(): Promise<void> {
    this.allUser = await this.userService.getUsers();
    console.log(this.allUser);
    this.filter();
  }

  onSelectUser(user: User): void{
    this.selectedUser = user;
  }

  onDeleteClick(id: number) {
    this.userService.deleteUser(id)
    .then(async () => {
      this.selectedUser = null;
      this.allUser = await this.userService.getUsers();
      this.filter();
    })
  }

  onNewClick(): void {
    this.selectedUser = new User();
  }

  async onFormSubmit(user: User): Promise<void> {
    if (user.id > 0) {
      await this.userService.updateUser(user)
      this.selectedUser.username = user.username;
      this.selectedUser.role = user.role;

    } else {
      this.selectedUser.id = Math.floor(Math.random()*184597);
      this.selectedUser.username = user.username;
      this.selectedUser.role = user.role;

      this.userService.createUser(user)
                        .then(createdUser => {
                          this.allUser.push(createdUser);
                        });
    }
    this.selectedUser = null;
  }

  private filter(): void{
    this.users = this.allUser;
  }
}
