import { AppComponent } from "./components/app.component";

import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { BrowserModule } from "@angular/platform-browser";

import { CovalentLayoutModule } from "@covalent/core/layout";
import { CovalentStepsModule } from "@covalent/core/steps";
/* any other core modules */
// (optional) Additional Covalent Modules imports
import { CovalentHttpModule } from "@covalent/http";
import { CovalentHighlightModule } from "@covalent/highlight";
import { CovalentMarkdownModule } from "@covalent/markdown";
import { CovalentDynamicFormsModule } from "@covalent/dynamic-forms";

import { NgModule } from "@angular/core";
import { MainComponent } from "./components/main/main.component";

import { AppRoutingModule, routedComponents } from "./app-routing.module";

import { SharedModule } from "./shared/shared.module";
import { ArticulosComponent } from "./components/articulos/articulos.component";
import { DepositosComponent } from "./components/depositos/depositos.component";
import { dataService } from "./dataservice/data.service";

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    routedComponents,
    ArticulosComponent,
    DepositosComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    CovalentLayoutModule,
    CovalentStepsModule,
    CovalentHttpModule.forRoot(),
    CovalentHighlightModule,
    CovalentMarkdownModule,
    CovalentDynamicFormsModule,
    SharedModule
  ],
  providers: [dataService],
  bootstrap: [AppComponent]
})
export class AppModule {}
