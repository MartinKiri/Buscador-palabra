import { Injectable } from '@angular/core';
import { Observable,Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ImagenService {
  private error$ = new Subject <string>();
  private terminoBusqueda$ =  new Subject <string>()

  constructor() { }

  setError(mensaje: string){
    this.error$.next(mensaje);
  }
  getError():Observable<string> {
    return this.error$.asObservable();
  }

  enviarBusqueda(termino:string){
    this.terminoBusqueda$.next(termino);
  }

  getBusqueda():Observable<string>{
    return this.terminoBusqueda$.asObservable()
  }
}
