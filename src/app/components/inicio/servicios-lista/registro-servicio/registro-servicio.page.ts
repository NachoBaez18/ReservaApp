import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { AlertService } from 'src/app/servicios/alert/alert.service';
import { ServiciosPeluqueriaService } from 'src/app/servicios/servicios-peluqueria.service';


@Component({
  selector: 'app-registro-servicio',
  templateUrl: './registro-servicio.page.html',
  styleUrls: ['./registro-servicio.page.scss'],
})
export class RegistroServicioPage implements OnInit {

  form: FormGroup;
  parametro:{} = {};
  constructor(private fb: FormBuilder,
    private alertService: AlertService,
    private modalCtrl: ModalController,
    private router: Router,
    private serviciosServices: ServiciosPeluqueriaService) {

    this.form = this.fb.group({
      nombre: ['', Validators.required],
      precio: ['', Validators.required],
    });
  }

  ngOnInit() {
  }

  async guardar() {

    this.parametro = {
      name: this.form.value.nombre,
      price: this.form.value.precio,
      user_id:Number(localStorage.getItem('id'))
    }
    const response: any = await this.serviciosServices.registrar(this.parametro);
    console.log(response);
    if (!response.error) {
      setTimeout(() => {
        this.alertService.informativo('Se registro servicio');
        this.router.navigate(['inicio/listaServicios']);
        this.modalCtrl.dismiss();
      }, 1000);
    } else {
      this.alertService.informativo('Error en el registro');
    }
  }
}
