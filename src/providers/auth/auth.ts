import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import {Storage} from '@ionic/storage';
import { ToastController } from 'ionic-angular';

@Injectable()
export class AuthProvider {
  private msg: string = 'É preciso logar para acessar!';

  constructor(
    public http: Http,
    public storage: Storage,
    public toastCtrl: ToastController
  ) {
  }

  login(credentials) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');

    let options = new RequestOptions({ headers: headers });

    this.http.post('http://localhost:3030/v1/auth/login', credentials, options)
      .map(res => res.json())
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
