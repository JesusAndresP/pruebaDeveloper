import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlbumesComponent } from './components/albumes/albumes.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { PublicacionComponent } from './components/publicacion/publicacion.component';
import { UsuariosComponent } from './components/usuarios/usuarios.component';

const routes: Routes = [
  { path: '', redirectTo: '/inicio', pathMatch: 'full' },
  { path: 'usuarios', component: UsuariosComponent },
  { path: 'inicio', component: InicioComponent},
  { path: 'albumes', component: AlbumesComponent},
  { path: 'publicacion', component: PublicacionComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
