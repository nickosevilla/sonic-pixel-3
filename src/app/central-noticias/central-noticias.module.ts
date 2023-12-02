import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { CentralNoticiasPageRoutingModule } from './central-noticias-routing.module';
import { CentralNoticiasPage } from './central-noticias.page';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    CentralNoticiasPageRoutingModule,
    HttpClientModule
  ],
  declarations: [CentralNoticiasPage]
})
export class CentralNoticiasPageModule {}
