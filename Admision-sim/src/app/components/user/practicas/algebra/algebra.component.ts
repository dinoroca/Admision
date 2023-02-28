import { Component, OnInit } from '@angular/core';
import { GLOBAL } from '../../../../services/global';
import { PreguntaService } from '../../../../services/pregunta.service';
import { Router } from '@angular/router';
import { isEmpty } from 'rxjs';

@Component({
  selector: 'app-algebra',
  templateUrl: './algebra.component.html',
  styleUrls: ['./algebra.component.css']
})
export class AlgebraComponent implements OnInit {

  public load_data = true;
  public proceder = false;
  public calificado = false;
  public puntaje: any = 0;
  public token: any;
  public preguntas: Array<any> = [];
  public marcados: Array<any> = [];
  public correctas: Array<any> = [];
  public acertadas: Array<any> = [];
  public url: any;

  public tiempo: Date = new Date(0);
  public temporizador: any;

  constructor(
    private _preguntaService: PreguntaService,
    private _router: Router
  ) {
    this.url = GLOBAL.url;
    this.token = localStorage.getItem('token') || sessionStorage.getItem('token');
  }

  ngOnInit(): void {
  }

  init_data() {
    this.marcados = [];
    this.proceder = false;;
    this._preguntaService.obtener_preguntas_practica_algebra(this.token).subscribe(
      response => {
        this.preguntas = response.data;
        console.log(this.preguntas);
        this.load_data = false;

        for (let i = 0; i < this.preguntas.length; i++) {
          if (this.preguntas[i].alt_a[1]) {
            this.correctas[i] = this.preguntas[i].alt_a[0];

          } else if (this.preguntas[i].alt_b[1]) {
            this.correctas[i] = this.preguntas[i].alt_b[0];

          } else if (this.preguntas[i].alt_c[1]) {
            this.correctas[i] = this.preguntas[i].alt_c[0];

          }else if (this.preguntas[i].alt_d[1]) {
            this.correctas[i] = this.preguntas[i].alt_d[0];

          }else if (this.preguntas[i].alt_e[1]) {
            this.correctas[i] = this.preguntas[i].alt_e[0];
          }
        }

        console.log(this.correctas);
      }
    );
  }

  //Inicia temporizador

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

  //Fin de temporizador

  revisarRespuesta() {
    console.log(this.preguntas[0].alt_a);
  }

  agregarMarcado(i: any, value: String) {
    this.marcados[i] = value;
    this.verificarMarcados();
  }

  verificarMarcados(){
    if (this.marcados.length !== this.correctas.length) {
      this.proceder = false;
    } else {
      this.proceder = true;
    }
  }

  cambiarProceder() {
    this.proceder = true;
  }


  calificar() {
    this.detener();
    this.calificado = false;
    this.puntaje = 0;
    if (this.proceder) {
      for (let i = 0; i < this.correctas.length; i++) {
        if (this.correctas[i] == this.marcados[i]) {
          this.acertadas[i] = this.marcados[i];
        }
      }
      this.calificado = false;
    }

    for (let i = 0; i < this.acertadas.length; i++) {
      if (this.acertadas[i]) {
        this.puntaje ++;
      }
    }

    console.log(this.acertadas);
  }

  redirigir(){
    this._router.navigate(['/usuario/practicas']);
  }

}
