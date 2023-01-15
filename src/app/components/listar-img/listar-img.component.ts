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

  constructor(private _imagenService: ImagenService) {
    this.suscription = this._imagenService.getBusqueda().subscribe(data=>{
      console.log(data);
      
    })
  }

  ngOnInit(): void {}
}
