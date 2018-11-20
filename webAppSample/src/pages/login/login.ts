import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,AlertController,ModalController } from 'ionic-angular';
import { HomePage } from '../home/home';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  username:string;
  password:string;
  constructor(public navCtrl: NavController, public navParams: NavParams,public alertCtrl:AlertController,private modalCtrl:ModalController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  signinClick(){
    // let alert = this.alertCtrl.create({
    //   title: 'Platform',
    //   message:  this.username+' ,'+this.password,
    //   buttons: ['OK']
    // });
    // alert.present();
    this.navCtrl.push(HomePage,{username:this.username,password:this.password});
  }

  settingsClick(){
    var modalPage = this.modalCtrl.create('SettingsPage');
    modalPage.present();
  }
}
