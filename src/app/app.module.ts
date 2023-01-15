import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

// * componentes
import { AppComponent } from './app.component';
import { BuscarImgComponent } from './components/buscar-img/buscar-img.component';
import { ListarImgComponent } from './components/listar-img/listar-img.component';
import { NavComponent } from './components/nav/nav.component';
import { ErrorComponent } from './shared/error/error.component';
import { SpinnerComponent } from './shared/spinner/spinner.component';

@NgModule({
  declarations: [
    AppComponent,
    BuscarImgComponent,
    ListarImgComponent,
    NavComponent,
    ErrorComponent,
    SpinnerComponent
  ],
  imports: [
    BrowserModule, 
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
