import { Component } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';

import { NavController, NavParams, ToastController } from 'ionic-angular';

@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {
  selectedItem: any;
  icons: string[];
  private url:string = 'http://localhost:3030/v1';
  public beer =  {
    name: "",
    price: "",
    type: "",
    mark: ""
  };

  constructor(public navCtrl: NavController,
              public toastCtrl: ToastController,
              public navParams: NavParams,
              public http: Http
            ) {

  }

  saveBeer(beer) {
    let headers = new Headers();
        headers.append('Content-Type', 'application/json');

    let options = new RequestOptions({ headers: headers});

    this.http.post(this.url + '/beers', beer, options)
             .map(res => res.json())
             .subscribe(data => {
               let toast = this.toastCtrl.create({
                  message: data.msg,
                  duration: 3000
                });
                toast.present();
              });

  }
}
