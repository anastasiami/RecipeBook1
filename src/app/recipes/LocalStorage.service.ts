import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import {Recipe} from './recipe.module';

@Injectable({
  providedIn: 'root'
})

export class LocalStorageService {

  // Define API
  apiURL = 'http://localhost:3000/recipes';

  constructor(private http: HttpClient) { }

  /*========================================
    CRUD Methods for consuming RESTful API
  =========================================*/

  // Http Options
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  // HttpClient API get() method => Fetch employees list
  getRecipes(): Observable<Recipe> {

    return this.http.get<Recipe>(this.apiURL)
      .pipe(
        retry(1),
        catchError(this.handleError)

      );
  }

  // HttpClient API get() method => Fetch employee
  getRecipe(id): Observable<Recipe> {

    return this.http.get<Recipe>(this.apiURL + '/' + id)
      .pipe(
        retry(1),
        catchError(this.handleError)
      );
  }

  // HttpClient API post() method => Create employee
  createRecipes(recipe): Observable<Recipe> {
    return this.http.post<Recipe>(this.apiURL, JSON.stringify(recipe), this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.handleError)
      );
  }

  // HttpClient API put() method => Update employee
  updateRecipe(id, recipe): Observable<Recipe> {
    return this.http.put<Recipe>(this.apiURL + '/' + id, JSON.stringify(recipe), this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.handleError)
      );
  }

  // HttpClient API delete() method => Delete employee
  deleteRecipe(id){
    return this.http.delete<Recipe>(this.apiURL + '/' + id, this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.handleError)
      );
  }


  handleError(error) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {

      errorMessage = error.error.message;
    } else {

      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }

}
