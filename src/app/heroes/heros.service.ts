import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Hero } from './hero';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HerosService {

  constructor(private http: HttpClient) {   }

  
  getHeros() : Observable<Hero[]> {
    return this.http.get<Hero[]>('https://jsonplaceholder.typicode.com/users');
  }


  getHeroDetails(id : string) : Observable<Hero>{
    return this.http.get<Hero>('https://jsonplaceholder.typicode.com/users/'+id);
  }
}
