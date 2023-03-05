import { Component, OnInit } from '@angular/core';
import { GLOBAL } from '../../../../services/global';
import { PreguntaService } from '../../../../services/pregunta.service';
import { Router } from '@angular/router';

import { jsPDF } from 'jspdf';
import html2canvas from 'html2canvas';
import { UserService } from '../../../../services/user.service';

@Component({
  selector: 'app-aritmetica',
  templateUrl: './aritmetica.component.html',
  styleUrls: ['./aritmetica.component.css']
})

export class AritmeticaComponent implements OnInit {

  public load_data = true;
  public proceder = false;
  public calificado = false;
  public puntaje: any = 0;
  public token: any;
  public id: any;
  public preguntas: Array<any> = [];
  public marcados: Array<any> = [];
  public correctas: Array<any> = [];
  public acertadas: Array<any> = [];
  public resultado: any = {};
  public url: any;

  public tiempo: Date = new Date(0);
  public temporizador: any;

  constructor(
    private _preguntaService: PreguntaService,
    private _userService: UserService,
    private _router: Router
  ) {
    this.url = GLOBAL.url;
    this.token = localStorage.getItem('token') || sessionStorage.getItem('token');
    this.id = localStorage.getItem('_id') || sessionStorage.getItem('_id');
  }

  ngOnInit(): void {
  }

  init_data() {
    this.marcados = [];
    this.proceder = false;;
    this._preguntaService.obtener_preguntas_practica_aritmetica(this.token).subscribe(
      response => {
        this.preguntas = response.data;
        this.load_data = false;

        for (let i = 0; i < this.preguntas.length; i++) {
          if (this.preguntas[i].alt_a[1]) {
            this.correctas[i] = this.preguntas[i].alt_a[0];

          } else if (this.preguntas[i].alt_b[1]) {
            this.correctas[i] = this.preguntas[i].alt_b[0];

          } else if (this.preguntas[i].alt_c[1]) {
            this.correctas[i] = this.preguntas[i].alt_c[0];

          } else if (this.preguntas[i].alt_d[1]) {
            this.correctas[i] = this.preguntas[i].alt_d[0];

          } else if (this.preguntas[i].alt_e[1]) {
            this.correctas[i] = this.preguntas[i].alt_e[0];
          }
        }
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

  agregarMarcado(i: any, value: String) {
    this.marcados[i] = value;
    this.verificarMarcados();
  }

  verificarMarcados() {
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
        this.puntaje++;
      }
    }

    this.resultado.user = this.id;
    this.resultado.puntos = this.puntaje;

    this._userService.registro_resultado_practicas_aritmetica(this.resultado, this.token).subscribe(
      response => {
      }
    );
  }

  redirigir() {
    this._router.navigate(['/usuario/practicas']);
  }

  public descargarPDF(): void {
    const element = document.getElementById('solucionario');

    html2canvas(element!).then((canvas) => {
      const imgData = canvas.toDataURL('image/png');
      let imgWidth = 210;
      let pageHeight = 297;

      const height = (canvas.height * imgWidth) / canvas.width;

      let heightLeft = height;
      let pdf = new jsPDF('p', 'mm');
      let position = 0;

      pdf.addImage(imgData, 'PNG', 0, position, imgWidth, height);
      heightLeft -= pageHeight;

      while (heightLeft >= 0) {
        position = heightLeft - height;
        pdf.addPage();
        pdf.addImage(imgData, 'PNG', 0, position, imgWidth, height);
        heightLeft -= pageHeight;
      }

      pdf.save('solucionario-practica-aritmetica.pdf');

      this._router.navigate(['/usuario/practicas']);
    });
  }

}
