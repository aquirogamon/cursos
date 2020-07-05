import { Component, OnInit } from "@angular/core";

import { Articulo } from "./../../dataservice/articulo";

import { dataService } from "./../../dataservice/data.service";

@Component({
  selector: "app-articulos",
  templateUrl: "./articulos.component.html",
  styleUrls: ["./articulos.component.scss"]
})
export class ArticulosComponent implements OnInit {
  articulos: Articulo[];

  getArticulos(): void {
    this.dataService
      .getArticulos()
      .then(depositos => (this.articulos = depositos));
  }

  delete(art): void {
    this.dataService.deleteArticulo(art.id);
    this.articulos = this.articulos.filter(a => a !== art);
  }

  constructor(private dataService: dataService) {}

  ngOnInit() {
    this.getArticulos();
  }
}
