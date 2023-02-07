import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { CommonModule } from '@angular/common';
import { ResultadosComponent } from './resultados/resultados.component';
import { IndexUsuarioComponent } from './usuarios/index-usuario/index-usuario.component';
import { CreateUsuarioComponent } from './usuarios/create-usuario/create-usuario.component';
import { EditUsuarioComponent } from './usuarios/edit-usuario/edit-usuario.component';
import { IndexAlgebraComponent } from './cursos/algebra/index-algebra/index-algebra.component';
import { CreateAlgebraComponent } from './cursos/algebra/create-algebra/create-algebra.component';

const routes: Routes = [
  { path: '', component: InicioComponent },
  { path: 'resultados', component: ResultadosComponent },

  { path: 'usuarios', component: IndexUsuarioComponent },
  { path: 'usuarios/registrar', component: CreateUsuarioComponent },
  { path: 'usuarios/:id', component: EditUsuarioComponent },

  { path: 'algebra', component:  IndexAlgebraComponent},
  { path: 'algebra/registrar', component:  CreateAlgebraComponent},
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
