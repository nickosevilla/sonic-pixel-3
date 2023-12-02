import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-perfil-jugador',
  templateUrl: './perfil-jugador.page.html',
  styleUrls: ['./perfil-jugador.page.scss'],
})
export class PerfilJugadorPage implements OnInit {
  historialJuegos = [
    { nombre: 'Juego 1', fecha: '2023-09-29' },
    { nombre: 'Juego 2', fecha: '2023-09-28' },
    // Añade más juegos según sea necesario
  ];

  privacidad = true;

  constructor() { }

  ngOnInit() {
  }

  // Añade métodos para manejar la lógica de las nuevas secciones
}
