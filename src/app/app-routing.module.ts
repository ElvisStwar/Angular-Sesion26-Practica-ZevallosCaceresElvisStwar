import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaComponent } from './components/lista/lista.component';
import { LoginComponent } from './components/login/login.component';
import { PermisosGuard } from './guards/permisos.guard';
import { Permisos2Guard } from './guards/permisos2.guard';

const routes: Routes = [

  {path:"login",component:LoginComponent,canActivate:[Permisos2Guard]},
  {path:"lista",component:ListaComponent,canActivate:[PermisosGuard]},
  {path:"**", pathMatch:'full',redirectTo:"login"},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
