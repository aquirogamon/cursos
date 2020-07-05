import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-main",
  templateUrl: "./main.component.html",
  styleUrls: ["./main.component.scss"]
})
export class MainComponent implements OnInit {
  routes: Object[] = [
    {
      title: "Depositos",
      route: "/depositos",
      icon: "account_balance"
    },
    {
      title: "Articulos",
      route: "/articulos",
      icon: "collections"
    }
  ];

  constructor() {}

  ngOnInit() {}
}
