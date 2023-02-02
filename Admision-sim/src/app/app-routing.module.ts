import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/main/home/home.component';
import { LoginComponent } from './components/auth/login/login.component';
import { RegisterComponent } from './components/auth/register/register.component';
import { NosotrosComponent } from './components/main/nosotros/nosotros.component';
import { ContactoComponent } from './components/main/contacto/contacto.component';
import { AuthUserGuard } from './guards/auth-user.guard';
import { AuthAdminGuard } from './guards/auth-admin.guard';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'registro', component: RegisterComponent},
  {path: 'nosotros', component: NosotrosComponent},
  {path: 'contacto', component: ContactoComponent},

  //Lazy load de modulo de usuario
  {
    path: 'usuario',
    loadChildren: () => import('./components/user/user.module').then(m => m.UserModule),
    canActivate: [AuthUserGuard]
  },

  //Lazy load de modulo de ADMIN
  {
    path: 'admin',
    loadChildren: () => import('./components/admin/admin.module').then(m => m.AdminModule),
    canActivate: [AuthAdminGuard]
  },

  {path: '**', redirectTo: ''},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'enabled'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
