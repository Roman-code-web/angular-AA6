import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NosotrosComponent } from './nosotros/nosotros.component';
import { ServiciosComponent } from './servicios/servicios.component';
import { ContactosComponent } from './contactos/contactos.component';



@NgModule({
  declarations: [
    NosotrosComponent,
    ServiciosComponent,
    ContactosComponent
  ],
  imports: [
    CommonModule
  ],
  exports :[
    NosotrosComponent
  ]

})
export class PagesModule { }
