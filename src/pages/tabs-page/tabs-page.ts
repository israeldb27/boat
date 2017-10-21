import { Component } from '@angular/core';

import { NavParams } from 'ionic-angular';

import { AboutPage } from '../about/about';
import { MapPage } from '../map/map';
import { SchedulePage } from '../schedule/schedule';
import { SpeakerListPage } from '../speaker-list/speaker-list';

import { PagamentosListPage } from '../pagamentos/pagamentos-list/pagamentos-list';
import { PagamentosMeusPage } from '../pagamentos/pagamentos-meus/pagamentos-meus';

import { ReservasListPage } from '../reservas/reservas-list/reservas-list';
import { ReservasSolicitadasPage } from '../reservas/reservas-solicitadas/reservas-solicitadas';
import { ReservasPlanejamentoPage } from '../reservas/reservas-planejamento/reservas-planejamento';

import { ContaDetailPage } from '../conta/conta-detail/conta-detail';
import { SobreDetailPage } from '../sobre/sobre-detail/sobre-detail';

import { BarcosMeusPage } from '../barcos/barcos-meus/barcos-meus';
import { BarcosPesquisaPage } from '../barcos/barcos-pesquisa/barcos-pesquisa';

@Component({
  templateUrl: 'tabs-page.html'
})
export class TabsPage {
  // set the root pages for each tab
  tab1Root: any = SchedulePage;
  tab2Root: any = SpeakerListPage;
  tab3Root: any = MapPage;
  tab4Root: any = AboutPage;
  tab5Root: any = PagamentosListPage;
  tab6Root: any = ReservasListPage;  
  tab7Root: any = ContaDetailPage; 
  tab8Root: any = SobreDetailPage;   
  tab9Root: any = ReservasSolicitadasPage;
  tab10Root: any = BarcosMeusPage;
  tab11Root: any = ReservasPlanejamentoPage;
  tab12Root: any = PagamentosMeusPage;  
  tab13Root: any = BarcosPesquisaPage;    
  mySelectedIndex: number;
  constructor(navParams: NavParams) {
    this.mySelectedIndex = navParams.data.tabIndex || 0;
  }

}
