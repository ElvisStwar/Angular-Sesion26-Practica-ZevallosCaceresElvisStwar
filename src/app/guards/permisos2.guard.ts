import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class Permisos2Guard implements CanActivate {

  constructor(private router:Router){}

  canActivate(): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    
      if(localStorage.getItem('status')=="logIn"){
        this.router.navigate(['lista'])
        Swal.fire({
          title: 'Upss :c ...',
          icon: 'info',
          text: 'Ya has iniciado sesión',
          confirmButtonText: 'ok',
        }).then((result) => {
          if (result.isConfirmed) {
            this.router.navigate(['lista'])
          }
        })

        return false
      }else{
        return true
      }
  
  }
  
}
