import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { NavComponent } from './nav/nav.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { InicioComponent } from './inicio/inicio.component';
import { ResultadosComponent } from './resultados/resultados.component';
import { AlgebraComponent } from './cursos/algebra/algebra.component';
import { AnatomiaComponent } from './cursos/anatomia/anatomia.component';



@NgModule({
  declarations: [
    NavComponent,
    SidebarComponent,
    InicioComponent,
    ResultadosComponent,
    AlgebraComponent,
    AnatomiaComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
