import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InvitacionComponent } from './componets/invitacion/invitacion.component';
import { Opcion2Component } from './componets/opcion2/opcion2.component';

const routes: Routes = [
  {
    path:'',
    component:Opcion2Component,
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
