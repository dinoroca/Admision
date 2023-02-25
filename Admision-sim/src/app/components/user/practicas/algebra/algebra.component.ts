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

  constructor(
    private _preguntaService: PreguntaService
  ) {
    this.url = GLOBAL.url;
    this.token = localStorage.getItem('token') || sessionStorage.getItem('token');
  }

  ngOnInit(): void {
    this.init_data();
  }

  init_data() {
    this._preguntaService.obtener_preguntas_practica_algebra(this.token).subscribe(
      response => {
        this.preguntas = response.data;
        console.log(this.preguntas);
        
      }
    );
  }

}
