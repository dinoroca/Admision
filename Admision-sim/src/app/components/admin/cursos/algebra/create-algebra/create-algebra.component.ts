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
  public valid = false;
  public pregunta: any =  {};
  public check_a = false;
  public check_b = false;
  public check_c = false;
  public check_d = false;
  public check_e = false;

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

    if (this.check_a || this.check_b || this.check_c ||this.check_d || this.check_e) {
      this.valid = true;
      this.pregunta.alt_a = [
        this.pregunta.alt_a,
        this.check_a
      ];
      this.pregunta.alt_b = [
        this.pregunta.alt_b,
        this.check_b
      ];
      this.pregunta.alt_c = [
        this.pregunta.alt_c,
        this.check_c
      ];
      this.pregunta.alt_d = [
        this.pregunta.alt_d,
        this.check_d
      ];
      this.pregunta.alt_e = [
        this.pregunta.alt_e,
        this.check_e
      ];

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
    } else {
      this.valid = false;
      this._toastrService.error('Marque una respuesta correcta!!!', 'ERROR');
    }

  }

}
