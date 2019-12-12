import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GuardarComprasPageRoutingModule } from './guardar-compras-routing.module';

import { GuardarComprasPage } from './guardar-compras.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GuardarComprasPageRoutingModule
  ],
  declarations: [GuardarComprasPage]
})
export class GuardarComprasPageModule {}
