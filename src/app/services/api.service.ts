import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable, catchError, of, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) {}

  url = 'https://api.teleport.org/api/cities/'

  searchCity(input: string): Observable<any>{
   return this.http.get(`${this.url}?search=${input}`)
  }

  getCity(url: string): Observable<any>{
    return this.http.get(`${url}`)
  }

  getCityScores(url: string): Observable<any>{
    return this.http.get(`${url}scores/`).pipe(
      catchError(() => {
        return throwError(() => new Error('Coudn\'t get city scorese'))
      })
    )
  }
}
