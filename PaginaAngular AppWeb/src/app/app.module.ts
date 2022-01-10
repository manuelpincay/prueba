import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { InicioComponent } from './PaginaWeb/inicio/inicio.component';
import { InicioSesionComponent } from './PaginaWeb/inicio-sesion/inicio-sesion.component';
import { RegistrarseComponent } from './PaginaWeb/registrarse/registrarse.component';
import { ContactoComponent } from './PaginaWeb/contacto/contacto.component';
import { InicioLogComponent } from './PaginaWeb/inicio-log/inicio-log.component';
import { ContactoLogComponent } from './PaginaWeb/contacto-log/contacto-log.component';
import { RegistroDocComponent } from './PaginaWeb/registro/registro-doc/registro-doc.component';
import { RegsitroEstComponent } from './PaginaWeb/registro/registro-est/regsitro-est.component';
import { RegsitroMaestroComponent } from './PaginaWeb/registro/registro-maestro/regsitro-maestro.component';

import { Routes, RouterModule } from "@angular/router";
import { MyServiceService } from './my-service.service';
import { HttpClientModule } from '@angular/common/http'; 

import { FormsModule } from '@angular/forms';

const routes: Routes =[
  { path: '', redirectTo: 'inicio', pathMatch: 'full' },
  {path: 'inicio', component: InicioComponent, pathMatch: 'full'  },
  {path: 'contacto', component: ContactoComponent, pathMatch: 'full' },
  {path: 'contacto-log', component: ContactoLogComponent, pathMatch: 'full' },
  {path: 'inicio-log', component: InicioLogComponent, pathMatch: 'full' },
  {path: 'inicio-sesion', component: InicioSesionComponent, pathMatch: 'full' },
  {path: 'registrarse', component: RegistrarseComponent, pathMatch: 'full' },
  {path: 'registro-doc', component: RegistroDocComponent, pathMatch: 'full' },
  {path: 'registro-est', component: RegsitroEstComponent, pathMatch: 'full' },
  {path: 'registro-maes', component: RegsitroMaestroComponent, pathMatch: 'full' }
];
@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    InicioSesionComponent,
    RegistrarseComponent,
    ContactoComponent,
    InicioLogComponent,
    ContactoLogComponent,
    RegistroDocComponent,
    RegsitroEstComponent,
    RegsitroMaestroComponent

  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    FormsModule 
  ],
  exports: [RouterModule],
  providers: [MyServiceService],
  bootstrap: [AppComponent]
   
})
export class AppModule { }
