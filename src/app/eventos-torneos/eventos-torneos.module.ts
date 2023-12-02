import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EventosTorneosPageRoutingModule } from './eventos-torneos-routing.module';

import { EventosTorneosPage } from './eventos-torneos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EventosTorneosPageRoutingModule
  ],
  declarations: [EventosTorneosPage]
})
export class EventosTorneosPageModule {}
