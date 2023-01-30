import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaComponent } from './components/lista/lista.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [

  {path:"login",component:LoginComponent},
  {path:"lista",component:ListaComponent},
  {path:"**", pathMatch:'full',redirectTo:"login"},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
