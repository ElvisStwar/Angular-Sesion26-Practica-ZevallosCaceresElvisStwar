import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { ListaComponent } from './lista/lista.component';



@NgModule({
  declarations: [
    HeaderComponent,
    LoginComponent,
    ListaComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ComponentsModule { }
