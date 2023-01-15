import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ImagenService } from 'src/app/services/imagen.service';

@Component({
  selector: 'app-listar-img',
  templateUrl: './listar-img.component.html',
  styleUrls: ['./listar-img.component.css'],
})
export class ListarImgComponent implements OnInit {
  termino = '';
  suscription: Subscription;
  listImagenes: any[] = [];
  loading= false;

  constructor(private _imagenService: ImagenService) {
    this.suscription = this._imagenService.getBusqueda().subscribe((data) => {
      this.termino = data;
      this.loading=true
      console.log(this.termino);
      this.obtenerImg();
    });
  }

  ngOnInit(): void {}

  obtenerImg() {
    this._imagenService.getImagenes(this.termino).subscribe(
      (data) => {
        console.log(data);
        this.loading=false
        
        if (data.hits.length === 0) {
          this._imagenService.setError('No Encontramos un resultado');
          return;
        }
        this.listImagenes= data.hits
      },
      (error) => {
        this.loading=false
        this._imagenService.setError('Ocurrio un error');
      }
    );
  }
}
