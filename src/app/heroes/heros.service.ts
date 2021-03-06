import { MessagesService } from './../messages/messages.service';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Hero } from './hero';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


@Injectable({
  providedIn: 'root'
})

export class HerosService {

  private heroesUrl = 'api/heroes';

  constructor(private http: HttpClient, private messageService: MessagesService) { }


  getHeros(): Observable<Hero[]> {
    return this.http.get<Hero[]>('https://jsonplaceholder.typicode.com/users').pipe( tap(_ => this.log('fetched heroes')));
  }


  getHeroDetails(id: string): Observable<Hero> {
    return this.http.get<Hero>('https://jsonplaceholder.typicode.com/users/' + id);
  }


  /** POST: add a new hero to the server */
  addHero(hero: Hero): Observable<Hero> {

    let body = JSON.stringify({
      title: 'foo',
      body: 'bar',
      userId: 1
    });
    return this.http.post<Hero>('https://jsonplaceholder.typicode.com/posts', body, httpOptions).pipe(
      tap((res: Hero) => {
        this.log(`added hero w/ id=${hero.name}`);
        res.name = hero.name;
        console.log(JSON.stringify(res));
        return;
      }),


    );
  }


  updateHero (hero: Hero): Observable<any> {
    let body = JSON.stringify({
      title: 'foo',
      body: 'bar',
      userId: 1
    });

    return this.http.put('https://jsonplaceholder.typicode.com/posts/1', body, httpOptions).pipe(
      map((res: Hero) => {
        this.log(`updated hero id=${hero.id}`); 
         res = hero;}),   
    
    );
  }



  /** DELETE: delete the hero from the server */
  deleteHero(hero: Hero | number): Observable<Hero> {
    const id = typeof hero === 'number' ? hero : hero.id;
    const url = `https://jsonplaceholder.typicode.com/posts/1`;

    return this.http.delete<Hero>(url, httpOptions).pipe(
      tap(_ => this.log(`deleted hero id=${id}`)),

    );
  }


  /* GET heroes whose name contains search term */
  searchHeroes(term: string): Observable<Hero[]> {
    if (!term.trim()) {
      // if not search term, return empty hero array.
      return of([]);
    }
    return this.http.get<Hero[]>(`https://jsonplaceholder.typicode.com/users`).pipe(
      map((res :Hero[]) => {
        if(!res) return [];
       res = res.filter( it => {
          return it.name.toLowerCase().includes(term.toLowerCase());
        });
        if (res.length > 0)
        this.log(`found heroes matching "${term}"`);
        else 
        this.log(`No matching heros found "${term}"`);        
        return res;
      }),   
    );
  }


  

  /** Log a HeroService message with the MessageService */
  private log(message: string) {
    this.messageService.add(`HeroService: ${message}`);
  }
}
