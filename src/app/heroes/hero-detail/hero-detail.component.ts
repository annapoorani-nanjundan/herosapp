import { Component, OnInit, Input } from '@angular/core';
import {Hero} from '../hero';
import { HerosService } from './../heros.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {

  constructor(private herosSrvc : HerosService, private route: ActivatedRoute, private location:Location) { }

  hero: Hero ;

  ngOnInit() {

    this.getHeroDetails();

    
  }


  getHeroDetails(){

     const id = this.route.snapshot.paramMap.get('id');

    this.herosSrvc.getHeroDetails(id).subscribe(data => this.hero = data)
 
   }

   save(): void {
    this.herosSrvc.updateHero(this.hero)
      .subscribe();
  }

   goBack(){
    this.location.back();
   }

}
