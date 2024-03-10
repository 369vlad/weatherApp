import { Component} from '@angular/core';
import { catchError, map, tap, throwError } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Data } from './interfaces/data';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']

})
export class AppComponent  {

  private term = 'cacak';
  private baseApi = environment.baseApi;

  constructor(private http: HttpClient) {
  }

  weatherSearch(term: string) {
    this.term = term;
    this.getWeatherData$ = this.http.get<Data>(this.baseApi + `&q=${this.term}&days=3&aqi=yes`)
    .pipe(
      tap(data => console.log(data)),
      map((data) => ({
        ...data,
        current: data.current,
        location: data.location,
        forecast: data.forecast
      }) as Data),
      catchError(this.handleError)
    );

  }

  getWeatherData$ = this.http.get<Data>(this.baseApi + `&q=${this.term}&days=3&aqi=yes`)
  .pipe(
    tap(data => console.log(data)),
    map((data) => ({
      ...data,
      current: data.current,
      location: data.location,
      forecast: data.forecast
    }) as Data),
    catchError(this.handleError)
  );



  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, body was: `, error.error);
    }
    // Return an observable with a user-facing error message.
    return throwError(() => new Error('Something bad happened; please try again later.'));
  }

}
