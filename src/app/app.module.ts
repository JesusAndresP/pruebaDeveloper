import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatTableDataSource} from '@angular/material/table';
import{BrowserAnimationsModule} from '@angular/platform-browser/animations'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatModule } from './mat/mat.module';
import { UsuariosComponent } from './components/usuarios/usuarios.component';

import { HttpClientModule } from '@angular/common/http';
import { FreeapiService } from './services/freeapi.service';
import { PublicacionComponent } from './components/publicacion/publicacion.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AlbumesComponent } from './components/albumes/albumes.component';

@NgModule({
  declarations: [
    AppComponent,
    UsuariosComponent,
    PublicacionComponent,
    InicioComponent,
    NavbarComponent,
    AlbumesComponent,
    PublicacionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [FreeapiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
