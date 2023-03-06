import { Component, OnInit } from '@angular/core';
import Chart from 'chart.js/auto';
import { UserService } from '../../../services/user.service';

@Component({
  selector: 'app-historial',
  templateUrl: './historial.component.html',
  styleUrls: ['./historial.component.css']
})
export class HistorialComponent implements OnInit {

  public token: any;
  public id: any;
  public chart: any;

  public resultados: Array<any> = [];
  public load_data_alg = true;
  public load_data_anat = true;

  constructor(
    private _userService: UserService
  ) {
    this.token = localStorage.getItem('token') || sessionStorage.getItem('token');
    this.id = localStorage.getItem('_id') || sessionStorage.getItem('_id');
  }
  ngOnInit(): void {
    this.init_data();
  }

  init_data() {
    this.load_data_alg = true;
    this.load_data_anat = true;

    //Obtener resultados de prácticas de Álgebra
    this._userService.obtener_resultado_practicas_algebra(this.id, this.token).subscribe(
      response => {
        this.resultados = response.data;

        let labelAlgebra = [];
        let dataAlgebra = [];
        if (this.resultados.length > 0) {
          for (let i = 0; i < this.resultados.length; i++) {
            labelAlgebra.push((i + 1).toString());
            dataAlgebra.push(this.resultados[i].puntos);
          }

          this.chart = new Chart("MyChart", {
            type: 'line', //this denotes tha type of chart


            data: {// values on X-Axis
              labels: labelAlgebra,
              datasets: [
                {
                  fill: false,
                  pointRadius: 5,
                  pointHoverRadius: 10,
                  borderColor: 'rgb(0, 205, 123)',
                  tension: 0.4,
                  label: "Puntos",
                  data: dataAlgebra
                }
              ]
            },
            options: {
              aspectRatio: 2.4
            }

          });
          this.load_data_alg = false;
        }
      }
    );

    //Obtener resultado de prácticas de Anatomía
    this._userService.obtener_resultado_practicas_anatomia(this.id, this.token).subscribe(
      response => {
        this.resultados = response.data;

        let labelAnatomia = [];
        let dataAnatomia = [];
        if (this.resultados.length > 0) {
          for (let i = 0; i < this.resultados.length; i++) {
            labelAnatomia.push((i + 1).toString());
            dataAnatomia.push(this.resultados[i].puntos);
          }

          this.chart = new Chart("MyChartAn", {
            type: 'line', //this denotes tha type of chart


            data: {// values on X-Axis
              labels: labelAnatomia,
              datasets: [
                {
                  fill: false,
                  pointRadius: 5,
                  pointHoverRadius: 10,
                  borderColor: 'rgb(255, 67, 73)',
                  tension: 0.4,
                  label: "Puntos",
                  data: dataAnatomia
                }
              ]
            },
            options: {
              aspectRatio: 2.4
            }

          });
        }
      }
    );

    //Obtener resultado de prácticas de Aritmética
    this._userService.obtener_resultado_practicas_aritmetica(this.id, this.token).subscribe(
      response => {
        this.resultados = response.data;

        let labelAritmetica = [];
        let dataAritmetica = [];
        if (this.resultados.length > 0) {
          for (let i = 0; i < this.resultados.length; i++) {
            labelAritmetica.push((i + 1).toString());
            dataAritmetica.push(this.resultados[i].puntos);
          }

          this.chart = new Chart("MyChartArit", {
            type: 'line', //this denotes tha type of chart


            data: {// values on X-Axis
              labels: labelAritmetica,
              datasets: [
                {
                  fill: false,
                  pointRadius: 5,
                  pointHoverRadius: 10,
                  borderColor: 'rgb(20, 211, 221)',
                  tension: 0.4,
                  label: "Puntos",
                  data: dataAritmetica
                }
              ]
            },
            options: {
              aspectRatio: 2.4
            }

          });
        }
      }
    );

    //Obtener resultado de prácticas de Biología
    this._userService.obtener_resultado_practicas_biologia(this.id, this.token).subscribe(
      response => {
        this.resultados = response.data;

        let labelBiologia = [];
        let dataBiologia = [];
        if (this.resultados.length > 0) {
          for (let i = 0; i < this.resultados.length; i++) {
            labelBiologia.push((i + 1).toString());
            dataBiologia.push(this.resultados[i].puntos);
          }

          this.chart = new Chart("MyChartBio", {
            type: 'line', //this denotes tha type of chart


            data: {// values on X-Axis
              labels: labelBiologia,
              datasets: [
                {
                  fill: false,
                  pointRadius: 5,
                  pointHoverRadius: 10,
                  borderColor: 'rgb(13, 186, 7)',
                  tension: 0.4,
                  label: "Puntos",
                  data: dataBiologia
                }
              ]
            },
            options: {
              aspectRatio: 2.4
            }

          });
        }
      }
    );
  }

}
