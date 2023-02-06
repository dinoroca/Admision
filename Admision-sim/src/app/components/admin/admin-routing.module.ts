import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { CommonModule } from '@angular/common';
import { ResultadosComponent } from './resultados/resultados.component';
import { AlgebraComponent } from './cursos/algebra/algebra.component';
import { IndexUsuarioComponent } from './usuarios/index-usuario/index-usuario.component';
import { CreateUsuarioComponent } from './usuarios/create-usuario/create-usuario.component';
import { EditUsuarioComponent } from './usuarios/edit-usuario/edit-usuario.component';

const routes: Routes = [
  { path: '', component: InicioComponent },
  { path: 'resultados', component: ResultadosComponent },

  { path: 'usuarios', component: IndexUsuarioComponent },
  { path: 'usuarios/registrar', component: CreateUsuarioComponent },
  { path: 'usuarios/:id', component: EditUsuarioComponent },

  { path: 'algebra', component:  AlgebraComponent},
  { path: '**', redirectTo: '/admin'},

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
