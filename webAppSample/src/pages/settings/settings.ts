import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ViewController } from 'ionic-angular';
import { TranslateService } from '@ngx-translate/core'

/**
 * Generated class for the SettingsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
})
export class SettingsPage {

  selectedLanguage:any="en";
  langOptions:any[];
  // langOptions:any[]=[{
  //   title:"English",
  //   code:"en"
  // },{
  //   title:"German",
  //   code:"de"
  // }];
  constructor(public navCtrl: NavController, public navParams: NavParams,public viewCtrl:ViewController,public translateService:TranslateService) {
    this.langOptions=this.translateService.getLangs(); 
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SettingsPage');
    
    // this.langOptions=[{
    //   title:"English",
    //   code:"en"
    // },{
    //   title:"German",
    //   code:"de"
    // }]
  }

  closeModal() {
    this.viewCtrl.dismiss();
  }

  onLanguageSelected($event){
    var x=this.selectedLanguage;
    this.translateService.use(this.selectedLanguage)
  }
}
