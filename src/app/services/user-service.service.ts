import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  private urlApi='https://jsonplaceholder.typicode.com/users';


  constructor(private http:HttpClient) { };

  getAll():Observable<string[]>{
    return this.http.get<string[]>(this.urlApi);
  }
}
