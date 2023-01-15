import { Component, OnInit} from '@angular/core';
import { ImagenService } from 'src/app/services/imagen.service';

@Component({
  selector: 'app-buscar-img',
  templateUrl: './buscar-img.component.html',
  styleUrls: ['./buscar-img.component.css']
})
export class BuscarImgComponent implements OnInit {

  nombreImagen: string;


  constructor(private _imagenService :ImagenService){
    this.nombreImagen = '';
  }

  ngOnInit(): void {
      
  }

  buscarImagenes(){
    if (this.nombreImagen === '') {
      this._imagenService.setError('Agrega un texto de busqueda')
      return;
    }
    this._imagenService.enviarBusqueda(this.nombreImagen);
  }

}
