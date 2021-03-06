import { Component, OnInit } from '@angular/core';
import { HeroService } from 'src/app/services/hero.service';
import { MessageService } from 'src/app/services/message.service';
import { Hero } from '../models/hero';


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
})
export class HeroesComponent implements OnInit {

  heroes:Hero[]=[];

  selectedHero?: Hero;
  constructor(private heroService:HeroService, private messageService:MessageService) {}

  ngOnInit(): void {
    this.getHeroes();
  }

  onSelect(hero: Hero):void {
    this.selectedHero = hero;
    this.messageService.add('HeroesComponent: Selected hero id='+hero.id);
  }

  getHeroes():void{
    this.heroService.getHeroes().subscribe(response => {this.heroes=response});
  }
}
