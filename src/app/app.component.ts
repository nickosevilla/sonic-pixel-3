import { Component, OnDestroy } from '@angular/core';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnDestroy {
  public appPages = [
    { title: 'Central de Noticias', url: '/central-noticias', icon: 'newspaper' },
    { title: 'Eventos y Torneos', url: '/eventos-torneos', icon: 'trophy' },
    { title: 'Guías y Tutoriales', url: '/guias-tutoriales', icon: 'book' },
    { title: 'Perfil de Jugador', url: '/perfil-jugador', icon: 'person' },
    { title: 'Mercado de Artículos', url: '/mercado-articulos', icon: 'cart' },
    { title: 'Página de Inicio', url: '/pagina-inicio', icon: 'home' },
    // Agrega aquí el resto de tus páginas con su título, url e ícono
  ];
  public labels = [''];
  public isLoggedIn = false;
  private authSub: Subscription;

  constructor(private authService: AuthService, private router: Router) {
    this.authSub = this.authService.getAuthStatusListener().subscribe(isAuthenticated => {
      this.isLoggedIn = isAuthenticated;
    });
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/inicio']);
  }

  ngOnDestroy() {
    this.authSub.unsubscribe();
  }
}
