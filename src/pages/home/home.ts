import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Http, Response } from '@angular/http';

import { TestPage } from '../test/test';
import 'rxjs/add/operator/map';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  private url:string = 'http://192.168.0.14:3030/v1';
  public  beers: Array<{}>;

  constructor(
      public navCtrl: NavController,
      public http: Http
  ) {
    this.http.get(this.url + '/beers')
             .map(res => res.json())
             .subscribe(data => {
               this.beers = data;
             });
  }

  getBeerInfo(id) {
    this.navCtrl.push(TestPage,
       {
         'beer_id': id,
         'api_url': this.url
       });
  }
}
