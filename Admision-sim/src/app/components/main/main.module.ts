import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { NosotrosComponent } from './nosotros/nosotros.component';
import { ContactoComponent } from './contacto/contacto.component';

@NgModule({
  declarations: [
    HomeComponent,
    NosotrosComponent,
    ContactoComponent
  ],
  imports: [
    CommonModule
  ]
})
export class MainModule { }
