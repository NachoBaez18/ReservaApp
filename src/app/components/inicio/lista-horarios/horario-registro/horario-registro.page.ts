import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import * as moment from 'moment';
import { AlertService } from 'src/app/servicios/alert/alert.service';
import { DiasHabilitadosService } from 'src/app/servicios/dias-habilitados.service';

@Component({
  selector: 'app-horario-registro',
  templateUrl: './horario-registro.page.html',
  styleUrls: ['./horario-registro.page.scss'],
})
export class HorarioRegistroPage implements OnInit {

  form:FormGroup;
  parametro:{}={};
  fechaActual = moment();
  fecha_inicio:string=(this.fechaActual).format('YYYY-MM-DD HH:mm');
  fecha_fin:string=(this.fechaActual).format('YYYY-MM-DD HH:mm');

  constructor(private fb:FormBuilder,
              private alertService:AlertService,
              private modalCtrl:ModalController,
              private router:Router,
              private dias:DiasHabilitadosService) {

                this.form = this.fb.group({
                  minutos:['',Validators.required],
                });
               }

  ngOnInit() {
  }

  async guardar(){
  
      this.parametro = {
      fecha_inicio:this.fecha_inicio,
      fecha_fin:this.fecha_fin,
      minutos:this.form.value.minutos,
      user_id: localStorage.getItem('id')
      }

     const response: any = await this.dias.registrar(this.parametro);
     console.log(response);
     if (!response.error) {
       setTimeout(() => {
       this.alertService.informativo('Se registro con exito');
       this.router.navigate(['inicio/listaHorarios']);
       this.modalCtrl.dismiss();
       },1000);
     } else {
         this.alertService.informativo('Error en el registro');
     }
    }
    
    }

