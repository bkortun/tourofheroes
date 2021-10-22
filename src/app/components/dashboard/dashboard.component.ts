import { Component, OnInit } from '@angular/core';
import { HeroService } from 'src/app/services/hero.service';
import { Hero } from '../models/hero';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  heroes:Hero[]=[];
  constructor(private heroService:HeroService) { }

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes():void{
    this.heroService.getHeroes().subscribe(response=>{this.heroes=response.slice(1,5)});
  }
}
