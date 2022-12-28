import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ContactosComponent } from './modulos/pages/contactos/contactos.component';
import { NosotrosComponent } from './modulos/pages/nosotros/nosotros.component';
import { ServiciosComponent } from './modulos/pages/servicios/servicios.component';

const routes: Routes = [
  { path: "nosotros", component: NosotrosComponent },
  { path:"servicios", component:ServiciosComponent},
  {path:"contactos", component:ContactosComponent},
  {path:"**", pathMatch:"full", redirectTo:""}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
