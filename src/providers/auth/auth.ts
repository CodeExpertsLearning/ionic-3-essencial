import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import {Storage} from '@ionic/storage';
import { ToastController } from 'ionic-angular';
import { HttpServiceProvider } from '../http-service/http-service';

@Injectable()
export class AuthProvider {
  private msg: string = 'É preciso logar para acessar!';

  constructor(
    public http: HttpServiceProvider,
    public storage: Storage,
    public toastCtrl: ToastController
  ) {
  }

  login(credentials) {
    this.http.post('auth/login', credentials)
      .subscribe(data => {
        this.storage.set('token', data.token);
      });
  }

  userIsLogged() {
    return this.storage.get('token').then(val => {
      if(val) {
        return val;
      } else {
        let toast = this.toastCtrl.create({
          message: this.msg,
          duration: 3000
        });
        toast.present();

        return false;
      }
    });
  }

  logout() {
    this.storage.remove('token');
  }
}
