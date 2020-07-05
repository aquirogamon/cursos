import { Component, OnInit } from "@angular/core";

import { dataService } from "./../../dataservice/data.service";

import { Deposito } from "./../../dataservice/deposito";

@Component({
  selector: "app-depositos",
  templateUrl: "./depositos.component.html",
  styleUrls: ["./depositos.component.scss"]
})
export class DepositosComponent implements OnInit {
  depositos: Deposito[];

  getDepositos(): void {
    this.dataService
      .getDepositos()
      .then(depositos => (this.depositos = depositos));
  }

  delete(depo): void {
    this.dataService.deleteDeposito(depo.id);
    this.depositos = this.depositos.filter(d => d !== depo);
  }

  constructor(private dataService: dataService) {}
  ngOnInit() {
    this.getDepositos();
  }
}
