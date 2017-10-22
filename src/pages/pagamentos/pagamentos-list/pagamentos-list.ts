import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, List } from 'ionic-angular';

import { ConferenceData } from '../../../providers/conference-data';

@IonicPage()
@Component({
  selector: 'page-pagamentos-list',
  templateUrl: 'pagamentos-list.html',
})
export class PagamentosListPage {

  pagamentos: any[] = [];

  @ViewChild('pagamentoList', { read: List }) pagamentoList: List;

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public confData: ConferenceData) {

      this.listarPagamentos();          
  }

  public listarPagamentos(){

     console.log('PagamentosListPage :: listarPagamentos '); 

      this.confData.getPagamentos().subscribe((pagamentos: any[]) => { 
        this.pagamentos = pagamentos;
        console.log('PagamentosListPage :: listarPagamentos :: resultado', this.pagamentos);
      });
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad PagamentosListPage');
  }

}
