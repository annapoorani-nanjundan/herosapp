
import { HerosListComponent } from './heros-list/heros-list/heros-list.component';
import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroDetailComponent }  from './hero-detail/hero-detail.component';

const heroesRoutes: Routes = [
  { path: '', 
  component: HerosListComponent, },

  
    { path:'hero/:id', component:HeroDetailComponent
    },
  
   

  
];

@NgModule({
  imports: [
    RouterModule.forChild(heroesRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class HeroesRoutingModule { }
