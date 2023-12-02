import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MercadoArticulosPageRoutingModule } from './mercado-articulos-routing.module';

import { MercadoArticulosPage } from './mercado-articulos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MercadoArticulosPageRoutingModule
  ],
  declarations: [MercadoArticulosPage]
})
export class MercadoArticulosPageModule {}
