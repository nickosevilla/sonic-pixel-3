import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage {
  nombre: string = '';
  email: string = '';
  password: string = '';

  // Lista de usuarios registrados (simulada en este caso)
  usuariosRegistrados: { nombre: string; email: string; password: string }[] = [];

  constructor(private router: Router) {}

  register() {
    // Crear un nuevo usuario con los datos del formulario
    const newUser = {
      nombre: this.nombre,
      email: this.email,
      password: this.password,
    };
    console.log('Nuevo usuario registrado:', newUser);

    // Agregar el nuevo usuario a la lista de usuarios registrados
    this.usuariosRegistrados.push(newUser);

    // Redirigir al usuario a la página de inicio
    this.router.navigate(['/inicio']); // Redirige a la página de inicio
  }

  goBack() {
    this.router.navigate(['/inicio']); // Función para volver a la página de inicio
  }
}
