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
  imgXPaginas= 25;
  paginaActu=1;
  totalPaginas=0;

  constructor(private _imagenService: ImagenService) {
    this.suscription = this._imagenService.getBusqueda().subscribe((data) => {
      this.termino = data;
      this.paginaActu=1
      this.loading=true
      console.log(this.termino);
      this.obtenerImg();
    });
  }

  ngOnInit(): void {}

  obtenerImg() {
    this._imagenService.getImagenes(this.termino, this.imgXPaginas,this.paginaActu).subscribe(
      (data) => {
        console.log(data);
        this.loading=false
        
        if (data.hits.length === 0) {
          this._imagenService.setError('No Encontramos un resultado');
          return;
        }
        this.totalPaginas= Math.ceil(data.totalHits/ this.imgXPaginas)
        this.listImagenes= data.hits
      },
      (error) => {
        this.loading=false
        this._imagenService.setError('Ocurrio un error');
      }
    );
  }
  anterior(){
    this.paginaActu--;
    this.loading=true;
    this.listImagenes=[]
    this.obtenerImg()
  }
  siguiente(){
    this.paginaActu++;
    this.loading=true;
    this.listImagenes=[]
    this.obtenerImg()
  }

  anteriorClass(){
    if (this.paginaActu=== 1) {
      return false
    }else{
      return true
    }
  }
  siguienteClass(){
    if (this.paginaActu == this.totalPaginas) {
      return false
    }else{
      return true
    }
  }
}
