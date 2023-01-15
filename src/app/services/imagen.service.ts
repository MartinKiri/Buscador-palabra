import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ImagenService {
  private error$ = new Subject<string>();
  private terminoBusqueda$ = new Subject<string>();

  constructor(private http: HttpClient) {}

  setError(mensaje: string) {
    this.error$.next(mensaje);
  }
  getError(): Observable<string> {
    return this.error$.asObservable();
  }

  enviarBusqueda(termino: string) {
    this.terminoBusqueda$.next(termino);
  }

  getBusqueda(): Observable<string> {
    return this.terminoBusqueda$.asObservable();
  }

  getImagenes(
    termino: string,
    imgXPaginas: number,
    paginaActu: number
  ): Observable<any> {
    const KEY = '32876415-5fc00f0ac4ce0465058532327';
    const URL = 'https://pixabay.com/api/?key='+KEY +'&q=' +termino +                '&per_page='+ imgXPaginas + '&page='+paginaActu;

    return this.http.get(URL);
  }
}
