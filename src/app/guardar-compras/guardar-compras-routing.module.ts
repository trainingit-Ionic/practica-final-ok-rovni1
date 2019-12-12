import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GuardarComprasPage } from './guardar-compras.page';

const routes: Routes = [
  {
    path: '',
    component: GuardarComprasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GuardarComprasPageRoutingModule {}
