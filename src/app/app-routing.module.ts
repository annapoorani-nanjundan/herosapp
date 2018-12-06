import { HerosListComponent } from './heroes/heros-list/heros-list/heros-list.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroDetailComponent } from './heroes/hero-detail/hero-detail.component';

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ErrorComponent } from './error/error.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
   
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    
   
  },
  {
    path: 'heroes',
    loadChildren: './heroes/heroes.module#HeroesModule',

  }, 

  { path: 'error', component: ErrorComponent },
  
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

