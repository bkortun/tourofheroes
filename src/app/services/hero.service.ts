import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Hero } from '../components/models/hero';
import { Heroes } from '../mock-heroes';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(private messageService:MessageService) { }

  getHeroes():Observable<Hero[]>{
    const heroes=of(Heroes);
    this.messageService.add("Hero Service: fetched heros");
    return heroes;
  }
}
