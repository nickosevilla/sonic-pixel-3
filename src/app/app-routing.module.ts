import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard'; // Importa tu AuthGuard

const routes: Routes = [
  {
    path: '', // Deja el path en blanco para que esta sea la página de inicio
    redirectTo: 'inicio', // Ruta de redirección
    pathMatch: 'full'
  },
  {
    path: 'inicio',
    loadChildren: () => import('./inicio/inicio.module').then(m => m.InicioPageModule)
  },
  {
    path: 'registro',
    loadChildren: () => import('./registro/registro.module').then(m => m.RegistroPageModule)
  },
  {
    path: 'folder/:id',
    canActivate: [AuthGuard], // Protege esta ruta con AuthGuard
    loadChildren: () => import('./folder/folder.module').then(m => m.FolderPageModule)
  },
  {
    path: 'central-noticias',
    canActivate: [AuthGuard], // Protege esta ruta con AuthGuard
    loadChildren: () => import('./central-noticias/central-noticias.module').then(m => m.CentralNoticiasPageModule)
  },
  {
    path: 'eventos-torneos',
    canActivate: [AuthGuard], // Protege esta ruta con AuthGuard
    loadChildren: () => import('./eventos-torneos/eventos-torneos.module').then(m => m.EventosTorneosPageModule)
  },
  {
    path: 'guias-tutoriales',
    canActivate: [AuthGuard], // Protege esta ruta con AuthGuard
    loadChildren: () => import('./guias-tutoriales/guias-tutoriales.module').then(m => m.GuiasTutorialesPageModule)
  },
  {
    path: 'perfil-jugador',
    canActivate: [AuthGuard], // Protege esta ruta con AuthGuard
    loadChildren: () => import('./perfil-jugador/perfil-jugador.module').then(m => m.PerfilJugadorPageModule)
  },
  {
    path: 'mercado-articulos',
    canActivate: [AuthGuard], // Protege esta ruta con AuthGuard
    loadChildren: () => import('./mercado-articulos/mercado-articulos.module').then(m => m.MercadoArticulosPageModule)
  },
  {
    path: 'pagina-inicio',
    canActivate: [AuthGuard], // Protege esta ruta con AuthGuard
    loadChildren: () => import('./pagina-inicio/pagina-inicio.module').then( m => m.PaginaInicioPageModule)
  },
  {
    path: 'otra-pagina',
    canActivate: [AuthGuard], // Protege esta ruta con AuthGuard
    loadChildren: () => import('./pagina-inicio/pagina-inicio.module').then( m => m.PaginaInicioPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
