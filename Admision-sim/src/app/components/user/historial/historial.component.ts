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
  public load_data = true;

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


        } if (this.resultados.length == 1) {

        }
      }
    );
  }

}
