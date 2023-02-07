import { Component, OnInit } from '@angular/core';
import { PreguntaService } from '../../../../../services/pregunta.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-create-algebra',
  templateUrl: './create-algebra.component.html',
  styleUrls: ['./create-algebra.component.css']
})
export class CreateAlgebraComponent implements OnInit {

  public token: any;
  public load_btn = false;
  public pregunta: any =  {};

  constructor(
    private _preguntaService: PreguntaService,
    private _router: Router,
    private _toastrService: ToastrService
  ) {

    this.token = localStorage.getItem('token') || sessionStorage.getItem('token');
  }

  ngOnInit(): void {

  }

  registro(registroForm: any) {

    if (registroForm.valid) {
      this.load_btn = true;
      this._preguntaService.agregar_pregunta_algebra(this.pregunta, this.token).subscribe(
        response => {
          if (response.data == undefined) {
            this._toastrService.error(response.message, 'ERROR');

          } else {

            this._toastrService.success('Se registró con éxito', 'REGISTRADO!');

            this._router.navigate(['/admin/algebra']);
          }

        });
    }
  }

}
