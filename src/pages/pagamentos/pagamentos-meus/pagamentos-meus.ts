import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, List } from 'ionic-angular';

import { ConferenceData } from '../../../providers/conference-data';

@IonicPage()
@Component({
  selector: 'page-pagamentos-meus',
  templateUrl: 'pagamentos-meus.html',
})
export class PagamentosMeusPage {

  pagamentos: any[] = [];

  @ViewChild('pagamentoList', { read: List }) pagamentoList: List;

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public confData: ConferenceData) {

      console.log('PagamentosMeusPage :: constructor');

      this.listarMeusBancos();          

  }

  public listarMeusBancos(){
       console.log('PagamentosMeusPage :: listarMeusBancos');

       this.confData.getPagamentos().subscribe((pagamentos: any[]) => { 
        this.pagamentos = pagamentos;
        console.log('PagamentosMeusPage :: listarMeusBancos :: resultado', this.pagamentos);
      });
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad PagamentosMeusPage');
  }

}
