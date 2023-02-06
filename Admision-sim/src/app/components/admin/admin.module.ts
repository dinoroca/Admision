import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { NavComponent } from './nav/nav.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { InicioComponent } from './inicio/inicio.component';
import { ResultadosComponent } from './resultados/resultados.component';
import { AlgebraComponent } from './cursos/algebra/algebra.component';
import { AnatomiaComponent } from './cursos/anatomia/anatomia.component';
import { IndexUsuarioComponent } from './usuarios/index-usuario/index-usuario.component';
import { EditUsuarioComponent } from './usuarios/edit-usuario/edit-usuario.component';
import { CreateUsuarioComponent } from './usuarios/create-usuario/create-usuario.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    NavComponent,
    SidebarComponent,
    InicioComponent,
    ResultadosComponent,
    AlgebraComponent,
    AnatomiaComponent,
    IndexUsuarioComponent,
    EditUsuarioComponent,
    CreateUsuarioComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule
  ]
})
export class AdminModule { }
