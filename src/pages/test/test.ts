import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';

import { Http } from '@angular/http';
import { HttpServiceProvider } from '../../providers/http-service/http-service';

@Component({
  selector: 'page-test',
  templateUrl: 'test.html',
})
export class TestPage {
  public beer: any = {};

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public alertCtrl: AlertController,
              public http: HttpServiceProvider
            ) {

            let beer_id  = this.navParams.get('beer_id');
            this.http.get('beers', beer_id)
            .subscribe(data => {
                this.beer = data;
             });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TestPage');
  }

}
