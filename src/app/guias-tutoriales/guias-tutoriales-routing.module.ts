import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GuiasTutorialesPage } from './guias-tutoriales.page';

const routes: Routes = [
  {
    path: '',
    component: GuiasTutorialesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GuiasTutorialesPageRoutingModule {}
