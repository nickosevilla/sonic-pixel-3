import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EventosTorneosPage } from './eventos-torneos.page';

const routes: Routes = [
  {
    path: '',
    component: EventosTorneosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EventosTorneosPageRoutingModule {}
