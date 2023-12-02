// app.module.ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { AuthGuard } from './auth.guard'; // Importa tu AuthGuard
import { AuthService } from './auth.service'; // Importa tu AuthService

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule],
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    AuthGuard, // Agrega AuthGuard como proveedor
    AuthService, // Agrega AuthService como proveedor
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
