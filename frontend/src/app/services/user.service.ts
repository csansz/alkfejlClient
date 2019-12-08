import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user';
import { AuthService, httpOptions } from './auth.service';

@Injectable({
  providedIn: 'root'
})

export class UserService {

  private userUrl: string = "http://localhost:8080/users";
  constructor(
    private http: HttpClient,
    private authService: AuthService 
  ) { }

  getUsers(): Promise<User[]>{
    return this.http.get<User[]>(`${this.userUrl}`, httpOptions).toPromise();
  }

  getUserById(id: number): Promise<User>{
    return this.http.get<User>(`${this.userUrl}` + `${id}`, httpOptions).toPromise();
  }

  createUser(user: User): Promise<User>{
    return this.http.post<User>(`${this.userUrl}`, user, httpOptions).toPromise();
  }

  updateUser(user: User): Promise<User>{
    return this.http.put<User>(`${this.http.put}/${user.id}`, user, httpOptions).toPromise();
  }

  deleteUser(id: number): Promise<User>{
    return this.http.delete<User>(`${this.userUrl}/${id}`, httpOptions).toPromise();
  }

}
