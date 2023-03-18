import { CurrentValue } from './../models/current-value';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, retry, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiBrlExchangeService {
  url = "https://api-brl-exchange.actionlabs.com.br/api/1.0/open/"
  apiKey = "RVZG0GHEV2KORLNA"

  constructor(private http: HttpClient) { }

  getCurrentExchangeRate(from_symbol: string): Observable<CurrentValue>{
    return this.http.get<CurrentValue>(this.url+"currentExchangeRate?apiKey="+this.apiKey+"&from_symbol="+from_symbol+"&to_symbol=BRL").pipe(
      retry(10),
      catchError(this.handleError)
    )
  }

  getDailyExchangeRate(from_symbol: string): Observable<any>{
    return this.http.get<any>(this.url+"dailyExchangeRate?apiKey="+this.apiKey+"&from_symbol="+from_symbol+"&to_symbol=BRL").pipe(
      retry(10),
      catchError(this.handleError)
    )
  }


  handleError(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Erro ocorreu no lado do client
      errorMessage = error.error.message;
    } else {
      // Erro ocorreu no lado do servidor
      errorMessage = `Código do erro: ${error.status}, ` + `menssagem: ${error.message}`;
    }
    return throwError(() => new Error(errorMessage));
  };
}
