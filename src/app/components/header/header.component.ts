import { Component } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  constructor(private router:Router){}

  alerta(){

    if(localStorage.getItem('status')=='logIn'){
      Swal.fire({
        title: '¿Está seguro de cerrar sesión?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si!'
      }).then((result) => {
        if (result.isConfirmed) {
          this.logOut()
        }
      })
    }
  }

  logOut(){

    if(localStorage.getItem('status')=='logIn'){
      localStorage.setItem('status','logOut')
      // location.reload();
      this.router.navigate(['login'])
    }

  }

}
