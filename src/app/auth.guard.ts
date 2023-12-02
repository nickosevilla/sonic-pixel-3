import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { AuthService } from './auth.service'; // Importa tu AuthService


@Injectable({
  providedIn: 'root' // Asegúrate de proporcionar el guardia en el módulo raíz
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    // Utiliza el servicio de AuthService para verificar si el usuario ha iniciado sesión
    const isLoggedIn = this.authService.isLoggedIn(); // Debes implementar este método en AuthService

    if (!isLoggedIn) {
      // Si el usuario no ha iniciado sesión, redirige a la página de inicio de sesión
      this.router.navigate(['/login']);
      return false;
    }

    // Si el usuario está autenticado, permite el acceso
    return true;
  }
}
``
