import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HeroesService, IHerores } from '../../services/heroes.service';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html'
})
export class BuscadorComponent implements OnInit {

  constructor(private activateRouter: ActivatedRoute,
    private router: Router,
    // tslint:disable-next-line:variable-name
    private _heroesService: HeroesService) { }

  heroes: IHerores[] = [];
  termino: string;
  ngOnInit(): void {
    this.activateRouter.params.subscribe(params => {
      this.termino = params.termino;
      this.heroes = this._heroesService.buscarHeroes(params.termino);
      console.log(this.heroes);
    });
  }
  verHeroe(idx: number) {
    return this.router.navigate(['/heroe', idx]);
  }
}
