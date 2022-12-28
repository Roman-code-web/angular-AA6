import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NosotrosComponent } from './nosotros/nosotros.component';
import { ServiciosComponent } from './servicios/servicios.component';
import { ContactosComponent } from './contactos/contactos.component';
import { HomeComponent } from './home/home.component';
import { ComponentesModule } from '../componentes/componentes.module';



@NgModule({
  declarations: [
    NosotrosComponent,
    ServiciosComponent,
    ContactosComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    ComponentesModule
  ]

})
export class PagesModule { }
