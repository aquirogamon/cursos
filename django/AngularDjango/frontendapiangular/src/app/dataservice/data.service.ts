import { Injectable } from "@angular/core";
import { HttpHeaders, HttpClient } from "@angular/common/http";

import { Deposito } from "./deposito";
import { Articulo } from "./articulo";

@Injectable()
export class dataService {
  constructor(private http: HttpClient) {}

  private headers = new HttpHeaders({ "Content-Type": "application/json" });

  getDepositos(): Promise<Deposito[]> {
    return this.http
      .get("http://localhost:8000/deposito?format=json", {
        headers: this.headers
      })
      .toPromise()
      .then((response: Response) => response.json());
  }

  getArticulos(): Promise<Articulo[]> {
    return this.http
      .get("http://localhost:8000/articulo?format=json", {
        headers: this.headers
      })
      .toPromise()
      .then((response: Response) => response.json());
  }

  deleteArticulo(id: number): Promise<void> {
    const url = `${"http://localhost:8000/articulo"}/${id}`;
    return this.http
      .delete(url, { headers: this.headers })
      .toPromise()
      .then(() => null);
  }

  deleteDeposito(id: number): Promise<void> {
    const url = `${"http://localhost:8000/deposito"}/${id}`;
    return this.http
      .delete(url, { headers: this.headers })
      .toPromise()
      .then(() => null);
  }

  createDeposito(d: Deposito): Promise<Deposito> {
    return this.http
      .post("http://localhost:8000/deposito", JSON.stringify(d), {
        headers: this.headers
      })
      .toPromise()
      .then((response: Response) => response.json());
  }
}
