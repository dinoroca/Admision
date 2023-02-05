import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { CommonModule } from '@angular/common';
import { ResultadosComponent } from './resultados/resultados.component';
import { AlgebraComponent } from './cursos/algebra/algebra.component';

const routes: Routes = [
  { path: '', component: InicioComponent },
  { path: 'resultados', component: ResultadosComponent },
  { path: 'algebra', component:  AlgebraComponent},

];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
