import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { MainComponent } from "./components/main/main.component";

import { DepositosComponent } from "./components/depositos/depositos.component";

import { ArticulosComponent } from "./components/articulos/articulos.component";

const routes: Routes = [
  {
    path: "",
    component: MainComponent,
    children: [
      {
        path: "depositos",
        children: [
          {
            path: "",
            component: DepositosComponent
          }
        ]
      },
      {
        path: "articulos",
        children: [
          {
            path: "",
            component: ArticulosComponent
          }
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
export const routedComponents: any[] = [MainComponent];
