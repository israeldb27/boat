import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-reservas-planejamento',
  templateUrl: 'reservas-planejamento.html',
})
export class ReservasPlanejamentoPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ReservasPlanejamentoPage');
  }

}
