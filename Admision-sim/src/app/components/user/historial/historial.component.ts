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

    //Obtener resultado de prácticas de Economía
    this._userService.obtener_resultado_practicas_economia(this.id, this.token).subscribe(
      response => {
        this.resultados = response.data;

        let labelEconomia = [];
        let dataEconomia = [];
        if (this.resultados.length > 0) {
          for (let i = 0; i < this.resultados.length; i++) {
            labelEconomia.push((i + 1).toString());
            dataEconomia.push(this.resultados[i].puntos);
          }

          this.chart = new Chart("MyChartEco", {
            type: 'line', //this denotes tha type of chart


            data: {// values on X-Axis
              labels: labelEconomia,
              datasets: [
                {
                  fill: false,
                  pointRadius: 5,
                  pointHoverRadius: 10,
                  borderColor: 'rgb(239, 180, 32)',
                  tension: 0.4,
                  label: "Puntos",
                  data: dataEconomia
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

    //Obtener resultado de prácticas de Educación Cívica
    this._userService.obtener_resultado_practicas_ed_civica(this.id, this.token).subscribe(
      response => {
        this.resultados = response.data;

        let labelEdCivica = [];
        let dataEdCivica = [];
        if (this.resultados.length > 0) {
          for (let i = 0; i < this.resultados.length; i++) {
            labelEdCivica.push((i + 1).toString());
            dataEdCivica.push(this.resultados[i].puntos);
          }

          this.chart = new Chart("MyChartEdCivica", {
            type: 'line', //this denotes tha type of chart


            data: {// values on X-Axis
              labels: labelEdCivica,
              datasets: [
                {
                  fill: false,
                  pointRadius: 5,
                  pointHoverRadius: 10,
                  borderColor: 'rgb(203, 33, 251)',
                  tension: 0.4,
                  label: "Puntos",
                  data: dataEdCivica
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

    //Obtener resultado de prácticas de Física
    this._userService.obtener_resultado_practicas_fisica(this.id, this.token).subscribe(
      response => {
        this.resultados = response.data;

        let labelFisica = [];
        let dataFisica = [];
        if (this.resultados.length > 0) {
          for (let i = 0; i < this.resultados.length; i++) {
            labelFisica.push((i + 1).toString());
            dataFisica.push(this.resultados[i].puntos);
          }

          this.chart = new Chart("MyChartFisica", {
            type: 'line', //this denotes tha type of chart


            data: {// values on X-Axis
              labels: labelFisica,
              datasets: [
                {
                  fill: false,
                  pointRadius: 5,
                  pointHoverRadius: 10,
                  borderColor: 'rgb(255, 109, 24)',
                  tension: 0.4,
                  label: "Puntos",
                  data: dataFisica
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

    //Obtener resultado de prácticas de Geografía
    this._userService.obtener_resultado_practicas_geografia(this.id, this.token).subscribe(
      response => {
        this.resultados = response.data;

        let labelGeografia = [];
        let dataGeografia = [];
        if (this.resultados.length > 0) {
          for (let i = 0; i < this.resultados.length; i++) {
            labelGeografia.push((i + 1).toString());
            dataGeografia.push(this.resultados[i].puntos);
          }

          this.chart = new Chart("MyChartGeografia", {
            type: 'line', //this denotes tha type of chart


            data: {// values on X-Axis
              labels: labelGeografia,
              datasets: [
                {
                  fill: false,
                  pointRadius: 5,
                  pointHoverRadius: 10,
                  borderColor: 'rgb(63, 63, 63)',
                  tension: 0.4,
                  label: "Puntos",
                  data: dataGeografia
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

    //Obtener resultado de prácticas de Geometría
    this._userService.obtener_resultado_practicas_geometria(this.id, this.token).subscribe(
      response => {
        this.resultados = response.data;

        let labelGeometria = [];
        let dataGeometria = [];
        if (this.resultados.length > 0) {
          for (let i = 0; i < this.resultados.length; i++) {
            labelGeometria.push((i + 1).toString());
            dataGeometria.push(this.resultados[i].puntos);
          }

          this.chart = new Chart("MyChartGeometria", {
            type: 'line', //this denotes tha type of chart


            data: {// values on X-Axis
              labels: labelGeometria,
              datasets: [
                {
                  fill: false,
                  pointRadius: 5,
                  pointHoverRadius: 10,
                  borderColor: 'rgb(38, 92, 255)',
                  tension: 0.4,
                  label: "Puntos",
                  data: dataGeometria
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


     //Obtener resultado de prácticas de Trigonometría
     this._userService.obtener_resultado_practicas_trigonometria(this.id, this.token).subscribe(
      response => {
        this.resultados = response.data;

        let labelTrigonometria = [];
        let dataTrigonometria = [];
        if (this.resultados.length > 0) {
          for (let i = 0; i < this.resultados.length; i++) {
            labelTrigonometria.push((i + 1).toString());
            dataTrigonometria.push(this.resultados[i].puntos);
          }

          this.chart = new Chart("MyChartTrigo", {
            type: 'line', //this denotes tha type of chart


            data: {// values on X-Axis
              labels: labelTrigonometria,
              datasets: [
                {
                  fill: false,
                  pointRadius: 5,
                  pointHoverRadius: 10,
                  borderColor: 'rgb(64, 196, 27)',
                  tension: 0.4,
                  label: "Puntos",
                  data: dataTrigonometria
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
