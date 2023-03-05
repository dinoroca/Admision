import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { CommonModule } from '@angular/common';
import { PracticasComponent } from './practicas/practicas.component';
import { SimulacrosComponent } from './simulacros/simulacros.component';
import { HistorialComponent } from './historial/historial.component';
import { RankingComponent } from './ranking/ranking.component';
import { PerfilComponent } from './perfil/perfil.component';
import { AlgebraComponent } from './practicas/algebra/algebra.component';
import { AnatomiaComponent } from './practicas/anatomia/anatomia.component';
import { AritmeticaComponent } from './practicas/aritmetica/aritmetica.component';

const routes: Routes = [
  { path: '', component: InicioComponent },

  { path: 'practicas', component: PracticasComponent},
  { path: 'practicas/algebra', component: AlgebraComponent},
  { path: 'practicas/anatomia', component: AnatomiaComponent},
  { path: 'practicas/aritmetica', component: AritmeticaComponent},

  { path: 'simulacros', component: SimulacrosComponent},
  { path: 'historial', component: HistorialComponent},
  { path: 'ranking', component: RankingComponent},
  { path: 'perfil', component: PerfilComponent}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class UserRoutingModule { }
