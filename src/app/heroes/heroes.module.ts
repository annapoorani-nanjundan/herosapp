import { HerosListComponent } from './heros-list/heros-list/heros-list.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';



import { HeroesRoutingModule } from './heroes-routing.module';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { SearchHeroComponent } from './search-hero/search-hero.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HeroesRoutingModule
  ],
  declarations: [
    HerosListComponent,
    HeroDetailComponent, SearchHeroComponent
  ]
})
export class HeroesModule { }
