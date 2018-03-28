import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Http, Response } from '@angular/http';

import { TestPage } from '../test/test';
import 'rxjs/add/operator/map';
import { HttpServiceProvider } from '../../providers/http-service/http-service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public  beers: Array<{}>;

  constructor(
      public navCtrl: NavController,
      public http: HttpServiceProvider
  ) {

      this.http.getAll('beers')
                .subscribe(data => {
                  this.beers = data;
                });
  }

  getBeerInfo(id) {
    this.navCtrl.push(TestPage,
       {
         'beer_id': id
       });
  }
}
