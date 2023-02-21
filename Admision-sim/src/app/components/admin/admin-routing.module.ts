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
import { EditAlgebraComponent } from './cursos/algebra/edit-algebra/edit-algebra.component';
import { IndexAnatomiaComponent } from './cursos/anatomia/index-anatomia/index-anatomia.component';
import { CreateAnatomiaComponent } from './cursos/anatomia/create-anatomia/create-anatomia.component';
import { EditAnatomiaComponent } from './cursos/anatomia/edit-anatomia/edit-anatomia.component';

const routes: Routes = [
  { path: '', component: InicioComponent },
  { path: 'resultados', component: ResultadosComponent },

  { path: 'usuarios', component: IndexUsuarioComponent },
  { path: 'usuarios/registrar', component: CreateUsuarioComponent },
  { path: 'usuarios/:id', component: EditUsuarioComponent },

  //Álgebra

  { path: 'algebra', component:  IndexAlgebraComponent},
  { path: 'algebra/registrar', component:  CreateAlgebraComponent},
  { path: 'algebra/:id', component:  EditAlgebraComponent},

  { path: 'anatomia', component:  IndexAnatomiaComponent},
  { path: 'anatomia/registrar', component:  CreateAnatomiaComponent},
  { path: 'anatomia/:id', component:  EditAnatomiaComponent},

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
