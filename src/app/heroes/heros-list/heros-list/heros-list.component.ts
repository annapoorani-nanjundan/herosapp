import { Component, OnInit } from '@angular/core';
import { Hero } from '../../hero';
import { HerosService } from '../../heros.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-heros-list',
  templateUrl: './heros-list.component.html',
  styleUrls: ['./heros-list.component.css']
})
export class HerosListComponent implements OnInit {

  hero: Hero ;


  heros : Hero[];

  constructor(private herosSrvc : HerosService,private route: ActivatedRoute,private router: Router) { }

  ngOnInit() {

    this.herosSrvc.getHeros().subscribe(
      data => this.heros = data 
    );

    console.log("Heros data : "+this.heros);
  }



  addHero(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.herosSrvc.addHero({ name } as Hero)
      .subscribe(hero => {
        this.heros.push(hero);
      });
  }

  deleteHero(hero: Hero): void {
    this.heros = this.heros.filter(h => h !== hero);
    this.herosSrvc.deleteHero(hero).subscribe();
  }


  


}
