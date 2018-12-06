import { Hero } from '../heroes/hero';
import { Component, OnInit } from '@angular/core';
import { HerosService } from '../heroes/heros.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private herosSrvc : HerosService) { }

  heros : Hero[];

  ngOnInit() {

    this.herosSrvc.getHeros().subscribe(
      data => {this.heros = data; this.heros = this.heros.slice(0,5) }
    );

   
  }

}
