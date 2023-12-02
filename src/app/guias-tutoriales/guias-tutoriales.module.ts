import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GuiasTutorialesPageRoutingModule } from './guias-tutoriales-routing.module';

import { GuiasTutorialesPage } from './guias-tutoriales.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GuiasTutorialesPageRoutingModule
  ],
  declarations: [GuiasTutorialesPage]
})
export class GuiasTutorialesPageModule {}
