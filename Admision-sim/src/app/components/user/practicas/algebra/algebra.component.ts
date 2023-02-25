import { Component, OnInit } from '@angular/core';
import { GLOBAL } from '../../../../services/global';
import { PreguntaService } from '../../../../services/pregunta.service';

@Component({
  selector: 'app-algebra',
  templateUrl: './algebra.component.html',
  styleUrls: ['./algebra.component.css']
})
export class AlgebraComponent implements OnInit {

  public load_data = true;
  public token: any;
  public preguntas: Array<any> = [];
  public url: any;

  public tiempo: Date = new Date(0);
  public temporizador: any;

  constructor(
    private _preguntaService: PreguntaService
  ) {
    this.url = GLOBAL.url;
    this.token = localStorage.getItem('token') || sessionStorage.getItem('token');
  }

  ngOnInit(): void {
  }

  init_data() {
    this._preguntaService.obtener_preguntas_practica_algebra(this.token).subscribe(
      response => {
        this.preguntas = response.data;
        console.log(this.preguntas);
        this.load_data = false;
      }
    );
  }

  iniciar(): void {
    this.init_data();
    this.detener();
    this.tiempo = new Date(0);
    this.temporizador = setInterval(() => {
      this.tiempo.setSeconds(this.tiempo.getSeconds() + 1);
    }, 1000);
  }

  detener(): void {
    clearInterval(this.temporizador);
  }

  resetear(): void {
    this.detener();
    this.tiempo = new Date(0);
  }

  getTiempoFormateado(tiempo: Date): string {
    const horas = tiempo.getUTCHours().toString().padStart(1, '0');
    const minutos = tiempo.getUTCMinutes().toString().padStart(1, '0');
    const segundos = tiempo.getUTCSeconds().toString().padStart(1, '0');
    return `${horas}h : ${minutos}m : ${segundos}s`;
  }

  calificar() {
    this.detener();
    console.log('Detenido');
  }

}
