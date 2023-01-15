import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ImagenService } from 'src/app/services/imagen.service';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css'],
})
export class ErrorComponent implements OnInit {
  texto = 'Ingresa un ';
  mostrar = false;
  suscripcion: Subscription;

  constructor(private _imgagenService: ImagenService) {
    this.suscripcion = this._imgagenService.getError().subscribe((data) => {
      this.mostrarMensaje();
      this.texto = data;
    });
  }
  mostrarMensaje() {
    this.mostrar = true;
    setTimeout(() => {
      this.mostrar = false;
    }, 2000);
  }
  ngOnDestoy(): void {
    this.suscripcion.unsubscribe();
  }
  ngOnInit(): void {}
}
