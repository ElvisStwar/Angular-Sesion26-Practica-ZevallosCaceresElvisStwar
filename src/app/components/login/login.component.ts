import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { UserServiceService } from 'src/app/services/user-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  formLogin!:FormGroup;
  datos:any;
  lista:any;
  status!:boolean

  constructor( 
    private data:UserServiceService,
    private router:Router
    ){

    this.formLogin = new FormGroup({
      username: new FormControl(),
      password: new FormControl()
    })


  }

  ngOnInit(): void {
      this.data.getAll().subscribe(data => console.log(data));
      this.data.getAll().subscribe(data => this.lista = data);
      if(localStorage.getItem('status')=='logIn'){
        this.status = true
      }
  
  }

  
  

  onSubmit(){
    this.datos = this.formLogin.value
    // console.log(this.datos.username)
    // console.log(this.datos.password)
    // console.log(this.lista[1])

    for(let i = 0;this.lista[i].username==this.datos.username&&this.lista[i].email==this.datos.password;i++){
      console.log("logueado")
      localStorage.setItem('status','logIn')
    }

    if(localStorage.getItem('status')=="logIn"){
      this.router.navigate(['lista'])
    }
    
  }

}
