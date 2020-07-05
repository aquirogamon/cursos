import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class ApiService {
  baseURL = "http://127.0.0.1:8000";
  httpHeaders = new HttpHeaders({ "Content-Type": "application/json" });

  constructor(private http: HttpClient) {}

  getAllMovies(): Observable<any> {
    return this.http.get(this.baseURL + "/movies/", {
      headers: this.httpHeaders
    });
  }

  getOneMovie(id): Observable<any> {
    return this.http.get(this.baseURL + "/movies/" + id + "/", {
      headers: this.httpHeaders
    });
  }

  updateMovie(movie): Observable<any> {
    const body = {
      title: movie.title,
      description: movie.description,
      year: movie.year
    };
    return this.http.put(this.baseURL + "/movies/" + movie.id + "/", body, {
      headers: this.httpHeaders
    });
  }

  createMovie(movie): Observable<any> {
    const body = {
      title: movie.title,
      description: movie.description,
      year: movie.year
    };
    return this.http.post(this.baseURL + "/movies/", body, {
      headers: this.httpHeaders
    });
  }
  deleteMovie(id): Observable<any> {
    return this.http.delete(this.baseURL + "/movies/" + id + "/", {
      headers: this.httpHeaders
    });
  }
}
