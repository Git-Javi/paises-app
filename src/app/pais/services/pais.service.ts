import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable , of} from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  private api_url: string = 'https://restcountries.com/v3.1';

  constructor( private httpClient:HttpClient ) { }

  buscarPais(terminoBusqueda: string): Observable<any>{
    const url = `${ this.api_url }/name/${ terminoBusqueda }`
    return this.httpClient.get( url );
   /* .pipe( // of e suna función que genera Observables, Tranforma lo pasado por parámetros en un nuevo Observable
      catchError( error => of([]) )
    );*/
  }
}
