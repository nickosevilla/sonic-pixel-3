import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage {
  email: string = '';
  password: string = '';
  errorMensaje: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  login() {
    console.log('Intento de inicio de sesión con email:', this.email, 'y contraseña:', this.password);
  
    const usuarioEncontrado = this.authService.findUserByEmailAndPassword(this.email, this.password);
    
    if (usuarioEncontrado) {
      this.authService.login();
      this.router.navigate(['/pagina-inicio', { mensaje: 'Inicio de sesión exitoso' }]);
    } else {
      this.errorMensaje = 'Credenciales incorrectas. Por favor, inténtalo de nuevo.';
    }
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/']);
  }

  goToRegistro() {
    this.router.navigate(['/registro']);
  }

  forgotPassword() {
    // Aquí puedes agregar la lógica para manejar el olvido de contraseña.
    console.log('¿Olvidaste tu contraseña?');
  }
}
