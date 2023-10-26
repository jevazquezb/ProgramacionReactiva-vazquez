import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Data, Todos } from '../components/users/users.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  url: string = '../../assets/data/base-alumnos.json';
  apiUrl: string = 'https://jsonplaceholder.typicode.com/todos';

  constructor(private http: HttpClient) { }

  getUsers(): Observable<Data> {
    return this.http.get<Data>(this.url);
  }

  getTodos(): Observable<Todos[]> {
    return this.http.get<Todos[]>(this.apiUrl);
  }
}
