import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegistroServicioPageRoutingModule } from './registro-servicio-routing.module';

import { RegistroServicioPage } from './registro-servicio.page';
import { HeaderModalModule } from '../../header-modal/header-modal.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    RegistroServicioPageRoutingModule,
    HeaderModalModule
  ],
  declarations: [RegistroServicioPage]
})
export class RegistroServicioPageModule {}
