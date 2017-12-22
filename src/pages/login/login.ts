import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AuthProvider } from './../../providers/auth/auth';

/**
 * Generated class for the LoginPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  private credential: Object = {
    email: '',
    password: ''
  };

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public authService: AuthProvider
  ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  login() {
    this.authService.login(this.credential);
  }

  logout() {
    this.authService.logout();
  }
}
