import { Component, OnInit } from '@angular/core';
import { DiasHabilitados } from 'src/app/moldels/dias-habilitados';
import { DiasHabilitadosService } from 'src/app/servicios/dias-habilitados.service';
import * as moment from 'moment';
import { ModalController } from '@ionic/angular';
import { HorarioRegistroPage } from './horario-registro/horario-registro.page';
import { ServiciosListaComponent } from '../servicios-lista/servicios-lista.component';

@Component({
  selector: 'app-lista-horarios',
  templateUrl: './lista-horarios.component.html',
  styleUrls: ['./lista-horarios.component.scss'],
})
export class ListaHorariosComponent implements OnInit {

  textoBuscar = '';
  getDias:DiasHabilitados[] = [];
  constructor(private listaDias:DiasHabilitadosService,
              private modalCtrl:ModalController) { }

  ngOnInit() {
    this.getDias =[];
  this.getdias();
  }

  buscar(event) {
    this.textoBuscar = event.detail.value;
  }

  doRefresh(event) {
    setTimeout(() => {
      this.getdias();
      event.target.complete();
    }, 1000);
  }

  async getdias(){
   let fechaLista:[] = [];
    const response: any = await this.listaDias.get();
    moment.locale('es'); 
    if (!response.error) {
      let datos = response.data;
      let parametro:DiasHabilitados={}
      
      datos.forEach((item:DiasHabilitados) => {
        let dia =  moment(item.fecha).day();
        let diasDeSemana = ['Lunes','Martes','Miercoles','Jueves','Viernes','Sabado','Domingo']
        let diaString = diasDeSemana[Number(dia) - 1];
        let fecha = moment(item.fecha).format('ll');
           
        parametro = {
          fecha:diaString+', '+fecha,
          hora:item.hora,
          estado:item.estado
        }
        this.getDias.push(parametro);
    });
      
    }
  }

  detalle(lista:DiasHabilitados){

  }

  abrirServicios(lista:DiasHabilitados){
    this.aperturaModalServicio();
  }
  
  AbrirRegistro(){
    this.aperturaModal();
  }

  async aperturaModal() {
    const modal = await this.modalCtrl.create({
      component:HorarioRegistroPage ,
    });
    await modal.present();
  }

  async aperturaModalServicio() {
    const modal = await this.modalCtrl.create({
      component:ServiciosListaComponent ,
    });
    await modal.present();
  }


}
