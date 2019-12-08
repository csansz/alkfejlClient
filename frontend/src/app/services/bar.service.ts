import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Bar } from '../models/bar';
import { AuthService, httpOptions } from './auth.service';

@Injectable({
  providedIn: 'root'
})

export class BarService {

  private barUrl: string = "http://localhost:8080/bars";
  constructor(
    private http: HttpClient,
    private authService: AuthService 
  ) { }

  getBars(): Promise<Bar[]>{
    return this.http.get<Bar[]>(`${this.barUrl}`, httpOptions).toPromise();
  }

  getBarById(id: number): Promise<Bar>{
    return this.http.get<Bar>(`${this.barUrl}` + `${id}`, httpOptions).toPromise();
  }

  createBar(Bar: Bar): Promise<Bar>{
    return this.http.post<Bar>(`${this.barUrl}`, Bar, httpOptions).toPromise();
  }

  updateBar(Bar: Bar): Promise<Bar>{
    return this.http.put<Bar>(`${this.http.put}/${Bar.id}`, Bar, httpOptions).toPromise();
  }

  deleteBar(id: number): Promise<Bar>{
    return this.http.delete<Bar>(`${this.barUrl}/${id}`, httpOptions).toPromise();
  }

}
