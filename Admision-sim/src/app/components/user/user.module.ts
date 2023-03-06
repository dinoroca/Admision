import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InicioComponent } from './inicio/inicio.component';
import { NavComponent } from './nav/nav.component';
import { UserRoutingModule } from './user-routing.module';
import { PracticasComponent } from './practicas/practicas.component';
import { SimulacrosComponent } from './simulacros/simulacros.component';
import { HistorialComponent } from './historial/historial.component';
import { RankingComponent } from './ranking/ranking.component';
import { PerfilComponent } from './perfil/perfil.component';
import { AlgebraComponent } from './practicas/algebra/algebra.component';
import { AnatomiaComponent } from './practicas/anatomia/anatomia.component';
import { AritmeticaComponent } from './practicas/aritmetica/aritmetica.component';
import { BiologiaComponent } from './practicas/biologia/biologia.component';
import { EconomiaComponent } from './practicas/economia/economia.component';
import { EdCivicaComponent } from './practicas/ed-civica/ed-civica.component';
import { FisicaComponent } from './practicas/fisica/fisica.component';
import { GeografiaComponent } from './practicas/geografia/geografia.component';
import { GeometriaComponent } from './practicas/geometria/geometria.component';
import { HistoriaPeruComponent } from './practicas/historia-peru/historia-peru.component';
import { HistoriaUniversalComponent } from './practicas/historia-universal/historia-universal.component';
import { LenguajeComponent } from './practicas/lenguaje/lenguaje.component';
import { LiterarturaComponent } from './practicas/literartura/literartura.component';
import { QuimicaComponent } from './practicas/quimica/quimica.component';
import { RazMatematicoComponent } from './practicas/raz-matematico/raz-matematico.component';
import { RazVerbalComponent } from './practicas/raz-verbal/raz-verbal.component';
import { TrigonometriaComponent } from './practicas/trigonometria/trigonometria.component';



@NgModule({
  declarations: [
    InicioComponent,
    NavComponent,
    PracticasComponent,
    SimulacrosComponent,
    HistorialComponent,
    RankingComponent,
    PerfilComponent,
    AlgebraComponent,
    AnatomiaComponent,
    AritmeticaComponent,
    BiologiaComponent,
    EconomiaComponent,
    EdCivicaComponent,
    FisicaComponent,
    GeografiaComponent,
    GeometriaComponent,
    HistoriaPeruComponent,
    HistoriaUniversalComponent,
    LenguajeComponent,
    LiterarturaComponent,
    QuimicaComponent,
    RazMatematicoComponent,
    RazVerbalComponent,
    TrigonometriaComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule
  ]
})
export class UserModule { }
