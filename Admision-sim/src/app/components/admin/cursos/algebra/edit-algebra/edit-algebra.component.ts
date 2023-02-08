import { Component, OnInit } from '@angular/core';
import { PreguntaService } from '../../../../../services/pregunta.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-edit-algebra',
  templateUrl: './edit-algebra.component.html',
  styleUrls: ['./edit-algebra.component.css']
})
export class EditAlgebraComponent implements OnInit {

  public token: any;
  public id: any;
  public load_btn = false;
  public load_data = true;
  public pregunta: any =  {};

  constructor(
    private _preguntaService: PreguntaService,
    private _router: Router,
    private _route: ActivatedRoute,
    private _toastrService: ToastrService
  ) {
    this.token = localStorage.getItem('token') || sessionStorage.getItem('token');
  }

  ngOnInit(): void {
    this._route.params.subscribe(
      
      params => {
        this.id = params['id'];
        
        this._preguntaService.obtener_pregunta_algebra(this.id, this.token).subscribe(
          response => {
            if(response.data == undefined) {
              this.pregunta = undefined;
              this.load_data = false;
            }else {
              this.pregunta = response.data;
              this.load_data = false;
            }
          }
        );
      }
    );
  }

  actualizar(actualizarForm: any) {

    if (actualizarForm.valid) {
      this.load_btn = true;
      this._preguntaService.actualizar_pregunta_algebra(this.id, this.pregunta, this.token).subscribe(
        response => {
          if (response.data == undefined) {
            this._toastrService.error(response.message, 'ERROR');

          } else {

            this._toastrService.success('Se actualizó con éxito', 'ACTUALIZADO!');

            this._router.navigate(['/admin/algebra']);
          }

        });
    }
  }

}
