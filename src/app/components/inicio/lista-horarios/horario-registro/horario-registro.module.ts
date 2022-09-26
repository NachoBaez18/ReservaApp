import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HorarioRegistroPageRoutingModule } from './horario-registro-routing.module';

import { HorarioRegistroPage } from './horario-registro.page';
import { HeaderModalModule } from '../../header-modal/header-modal.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    HorarioRegistroPageRoutingModule,
    HeaderModalModule
  ],
  declarations: [HorarioRegistroPage]
})
export class HorarioRegistroPageModule {}
