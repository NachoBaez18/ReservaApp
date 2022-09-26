import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Servicios } from 'src/app/moldels/servicios';
import { ServiciosPeluqueriaService } from 'src/app/servicios/servicios-peluqueria.service';
import { RegistroServicioPage } from './registro-servicio/registro-servicio.page';

@Component({
  selector: 'app-servicios-lista',
  templateUrl: './servicios-lista.component.html',
  styleUrls: ['./servicios-lista.component.scss'],
})
export class ServiciosListaComponent implements OnInit {
  textoBuscar = '';
  listaServicios:Servicios[] = [];
  constructor(private servicioPeluqieria:ServiciosPeluqueriaService,
              private modalCtrl:ModalController) { }

  ngOnInit() {
    this.getServicios();
  }

  buscar(event) {
    this.textoBuscar = event.detail.value;
  }

  doRefresh(event) {
    setTimeout(() => {
      // this.getPedidos();
      event.target.complete();
    }, 1500);
  }

  async getServicios(){
     const response: any = await this.servicioPeluqieria.get();
     if (!response.error) {
       this.listaServicios = response.data;
     }
   }

   detalle(lista:Servicios){
    console.log('servicios');
   }

   editar(lista:Servicios){
    console.log('edicion');
   }
   AbrirRegistro(){
   
    this.aperturaModalServicio();
   }

   async aperturaModalServicio() {
    const modal = await this.modalCtrl.create({
      component:RegistroServicioPage,
    });
    await modal.present();
  }

}
