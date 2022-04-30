import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IngresoComponent } from './ingreso-component/ingreso-component.component';
import { ListadoComponent } from './listado-component/listado-component.component';

const routes: Routes = [
  {
    path: 'listado',
    component: ListadoComponent
  },
  {
    path: 'ingreso',
    component: IngresoComponent
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/ingreso'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
