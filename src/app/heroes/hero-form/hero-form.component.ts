import { NavigationComponent } from './../../navigation/navigation.component';
import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';

@Component({
  selector: 'app-hero-form',
  templateUrl: './hero-form.component.html',
  styleUrls: ['./hero-form.component.css']
})
export class HeroFormComponent implements OnInit {

  constructor() { }

  

  powers = ['Really Smart', 'Super Flexible',
    'Super Smart', 'Weather Changer'];

    model: Hero; 
  

  //model = new Hero(18, 'Dr IQ', this.powers[0], 'Chuck Overstreet');

  submitted = false;


  ngOnInit() {

    this.model = new Hero();

    this.model.name="";
    this.model.email="";
    this.model.phone="";
  }

  onSubmit() { this.submitted = true; }

 newHero() {
    this.model = new Hero();
  }

}
