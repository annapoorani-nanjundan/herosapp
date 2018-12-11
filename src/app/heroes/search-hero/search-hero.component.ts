import { Component, OnInit } from '@angular/core';
import { HerosService } from '../heros.service';
import { Observable, Subject } from 'rxjs';
import { Hero } from '../hero';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-search-hero',
  templateUrl: './search-hero.component.html',
  styleUrls: ['./search-hero.component.css']
})
export class SearchHeroComponent implements OnInit {

  heroes: Observable<Hero[]>;

  private searchTerms = new Subject<string>();

  constructor(private herosSrvc : HerosService) { }

  ngOnInit() {

    this.heroes = this.searchTerms.pipe(
      // wait 300ms after each keystroke before considering the term
      debounceTime(300),
 
      // ignore new term if same as previous term
      distinctUntilChanged(),
 
      // switch to new search observable each time the term changes
      switchMap((term: string) => this.herosSrvc.searchHeroes(term)),
    );

   
  }

  // Push a search term into the observable stream.
search(term: string): void {
  this.searchTerms.next(term);
}

}
