import { DashboardComponent } from './dashboard/dashboard.component';

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ErrorComponent } from './error/error.component';
import { HeroFormComponent } from './heroes/hero-form/hero-form.component';
const routes: Routes = [
  {
    path: '', redirectTo: '/dashboard', pathMatch: 'full'

  },
  {
    path: 'dashboard',
    component: DashboardComponent,


  },
  {
    path: 'heroes',
    loadChildren: './heroes/heroes.module#HeroesModule',

  },

  { path:'create', component:HeroFormComponent
  },

  { path: 'error', component: ErrorComponent },

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

