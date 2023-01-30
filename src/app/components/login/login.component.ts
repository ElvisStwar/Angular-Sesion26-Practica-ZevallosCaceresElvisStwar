import { Component } from '@angular/core';
import { FormGroup,FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { UserServiceService } from 'src/app/services/user-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  formLogin!:FormGroup;

  constructor( 
    private userService:UserServiceService,
    private router:Router
    ){

    this.formLogin = new FormGroup({
      email: new FormControl(),
      password: new FormControl()
    })


  }

  ngOnInit(): void {
  }

  
  

  onSubmit(){}
}
