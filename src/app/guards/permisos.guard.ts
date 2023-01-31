import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class PermisosGuard implements CanActivate {

  constructor(private router:Router){}

  canActivate(): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    
    if(localStorage.getItem('status')=="logIn"){
      return true
    }else{
      this.router.navigate(['login'])
      Swal.fire({
        
        title: 'Upss :c ...',
        icon: 'info',
        text: 'Debes iniciar sesión',
        confirmButtonText: 'ok',
      })

      return false
    }

  }
  
}
