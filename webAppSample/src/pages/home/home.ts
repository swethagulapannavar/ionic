import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { NavController, NavParams, Platform, AlertController,ModalController } from 'ionic-angular';
import "rxjs/add/operator/map";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  users: Observable<any>;
  username: string;
  password: string;
  constructor(public navCtrl: NavController, public navParams: NavParams, private httpClient: HttpClient, private plt: Platform, private alertCtrl: AlertController) {
    this.users = this.httpClient.get('https://randomuser.me/api/?results=20')
      .map(res => res['results']);
    this.username = this.navParams.get('username');
    this.password = this.navParams.get('password');
    this.checkPlatform();
  }

  checkPlatform() {
    let alert = this.alertCtrl.create({
      title: 'Platform',
      message: 'You are running on: ' + this.plt.platforms() + ',' + this.username + ',' + this.password,
      buttons: ['OK']
    });
    alert.present();

    if (this.plt.is('cordova')) {
      // Do Cordova stuff
    } else {
      // Do stuff inside the regular browser
    }
  }
}
