import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
//import { Barco, BarcoApi, LoggerService } from "../../../app/shared/angular-client/index";
//import { LoopBackConfig, LoopBackFilter } from "../../../app/shared/angular-client"
//import { BASE_URL, API_VERSION } from "../../../app/shared/constantes";

import { ConferenceData } from '../../../providers/conference-data';

@IonicPage()
@Component({
  selector: 'page-barcos-meus',
  templateUrl: 'barcos-meus.html',
})
export class BarcosMeusPage {

   meusBarcos: any[] = [];

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public confData: ConferenceData) {
              
      console.log('BarcosMeusPage :: constructor'); 

      this.listarMeusBarcos();

  }

  public listarMeusBarcos(): void {
     console.log('BarcosMeusPage :: listarMeusBarcos '); 

      this.confData.getMeusBarcos().subscribe((meusBarcos: any[]) => {
        this.meusBarcos = meusBarcos;
      });
  }

  public visualizarDetalhes(barco){

    console.log('BarcosMeusPage :: visualizarDetalhes :: ', barco); 

    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BarcosMeusPage');
  }

}
