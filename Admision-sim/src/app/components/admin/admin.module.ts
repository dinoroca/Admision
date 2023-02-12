import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { NavComponent } from './nav/nav.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { InicioComponent } from './inicio/inicio.component';
import { ResultadosComponent } from './resultados/resultados.component';
import { IndexUsuarioComponent } from './usuarios/index-usuario/index-usuario.component';
import { EditUsuarioComponent } from './usuarios/edit-usuario/edit-usuario.component';
import { CreateUsuarioComponent } from './usuarios/create-usuario/create-usuario.component';
import { FormsModule } from '@angular/forms';
import { IndexAlgebraComponent } from './cursos/algebra/index-algebra/index-algebra.component';
import { CreateAlgebraComponent } from './cursos/algebra/create-algebra/create-algebra.component';
import { EditAlgebraComponent } from './cursos/algebra/edit-algebra/edit-algebra.component';
import { IndexAnatomiaComponent } from './cursos/anatomia/index-anatomia/index-anatomia.component';
import { CreateAnatomiaComponent } from './cursos/anatomia/create-anatomia/create-anatomia.component';
import { EditAnatomiaComponent } from './cursos/anatomia/edit-anatomia/edit-anatomia.component';
import { NgxTinymceModule } from 'ngx-tinymce';
import { NgxPaginationModule } from 'ngx-pagination';



@NgModule({
  declarations: [
    NavComponent,
    SidebarComponent,
    InicioComponent,
    ResultadosComponent,
    IndexUsuarioComponent,
    EditUsuarioComponent,
    CreateUsuarioComponent,
    IndexAlgebraComponent,
    CreateAlgebraComponent,
    EditAlgebraComponent,
    IndexAnatomiaComponent,
    CreateAnatomiaComponent,
    EditAnatomiaComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,
    NgxTinymceModule.forRoot({
      baseURL: '../../../assets/tinymce/'
    }),
    NgxPaginationModule
  ]
})
export class AdminModule { }
