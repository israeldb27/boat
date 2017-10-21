import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { ConferenceData } from '../../../providers/conference-data';
import { UserData } from '../../../providers/user-data';


@IonicPage()
@Component({
  selector: 'page-pagamentos-list',
  templateUrl: 'pagamentos-list.html',
})
export class PagamentosListPage {

  constructor(public navCtrl: NavController, 
              public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PagamentosListPage');
  }

}
