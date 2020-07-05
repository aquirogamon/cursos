import { Component, OnInit } from '@angular/core';
import { HeroesService, IHerores } from '../../services/heroes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-herores',
  templateUrl: './heroes.component.html'
})
export class HeroesComponent implements OnInit {

  heroes: IHerores[] = [];
  // tslint:disable-next-line:variable-name
  constructor(private _heroesService: HeroesService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.heroes = this._heroesService.getHeroes();
    console.log(this.heroes);
  }

  verHeroe(idx: number) {
    return this.router.navigate(['/heroe', idx]);
  }

}
