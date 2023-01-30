import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserService } from '../../../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public user: any = {};
  public usuario: any = {};
  public token: any;
  public password: any;
  public show = false;

  public recordar = true;

  constructor(
    private _userService: UserService,
    private _router: Router,
    private _title: Title,
    private _toastrService: ToastrService
  ) { }

  ngOnInit(): void {
    this._title.setTitle('Iniciar sesión');
    this.password = 'password';
  }

  login(loginForm: any) {
    if (loginForm.valid) {
      let data = {
        email: this.user.email,
        password: this.user.password
      }

      this._userService.login_user(data).subscribe(
        response => {
          if (response.data == undefined) {
            this._toastrService.error(response.message, 'ERROR');

          } else {
            if (this.recordar) {
              localStorage.setItem('token', response.token);
              localStorage.setItem('_id', response.data._id);
            } else {
              sessionStorage.setItem('token', response.token);
              sessionStorage.setItem('_id', response.data._id);
            }
            this.usuario = response.data;

            this._router.navigate(['/']);
          }
        }
      );

    } else {
      console.log('Error');

    }
  }

  onClickPass() {
    if (this.password === 'password') {
      this.password = 'text';
      this.show = true;
    } else {
      this.password = 'password';
      this.show = false;
    }
  }

}
