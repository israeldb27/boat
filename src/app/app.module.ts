import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { NgModule, ErrorHandler } from '@angular/core';

import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';

import { InAppBrowser } from '@ionic-native/in-app-browser';
import { SplashScreen } from '@ionic-native/splash-screen';

import { IonicStorageModule } from '@ionic/storage';

import { ConferenceApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { PopoverPage } from '../pages/about-popover/about-popover';
import { AccountPage } from '../pages/account/account';
import { LoginPage } from '../pages/login/login';
import { MapPage } from '../pages/map/map';
import { SchedulePage } from '../pages/schedule/schedule';
import { ScheduleFilterPage } from '../pages/schedule-filter/schedule-filter';
import { SessionDetailPage } from '../pages/session-detail/session-detail';
import { SignupPage } from '../pages/signup/signup';
import { SpeakerDetailPage } from '../pages/speaker-detail/speaker-detail';
import { SpeakerListPage } from '../pages/speaker-list/speaker-list';
import { TabsPage } from '../pages/tabs-page/tabs-page';
import { TutorialPage } from '../pages/tutorial/tutorial';
import { SupportPage } from '../pages/support/support';

import { PagamentosListPage } from '../pages/pagamentos/pagamentos-list/pagamentos-list';
import { PagamentosMeusPage } from '../pages/pagamentos/pagamentos-meus/pagamentos-meus';

import { ReservasListPage } from '../pages/reservas/reservas-list/reservas-list';
import { ReservasSolicitadasPage } from '../pages/reservas/reservas-solicitadas/reservas-solicitadas';

import { BarcosMeusPage } from '../pages/barcos/barcos-meus/barcos-meus';
import { BarcosPesquisaPage } from '../pages/barcos/barcos-pesquisa/barcos-pesquisa';
import { BarcosPresentFilterPage } from '../pages/barcos/barcos-present-filter/barcos-present-filter';

import { ContaDetailPage } from '../pages/conta/conta-detail/conta-detail';
import { SobreDetailPage } from '../pages/sobre/sobre-detail/sobre-detail';

import { ReservasPlanejamentoPage } from '../pages/reservas/reservas-planejamento/reservas-planejamento';

import { ConferenceData } from '../providers/conference-data';
import { UserData } from '../providers/user-data';


@NgModule({
  declarations: [
    ConferenceApp,
    AboutPage,
    AccountPage,
    LoginPage,
    MapPage,
    PopoverPage,
    SchedulePage,
    ScheduleFilterPage,
    SessionDetailPage,
    SignupPage,
    SpeakerDetailPage,
    SpeakerListPage,
    TabsPage,
    TutorialPage,
    SupportPage,
    PagamentosListPage,
    ReservasListPage,
    ContaDetailPage,
    SobreDetailPage,
    ReservasSolicitadasPage,
    BarcosMeusPage,
    ReservasPlanejamentoPage,
    PagamentosMeusPage,
    BarcosPesquisaPage,
    BarcosPresentFilterPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(ConferenceApp, {}, {
      links: [
        { component: TabsPage, name: 'TabsPage', segment: 'tabs-page' },
        { component: SchedulePage, name: 'Schedule', segment: 'schedule' },
        { component: SessionDetailPage, name: 'SessionDetail', segment: 'sessionDetail/:sessionId' },
        { component: ScheduleFilterPage, name: 'ScheduleFilter', segment: 'scheduleFilter' },
        { component: SpeakerListPage, name: 'SpeakerList', segment: 'speakerList' },
        { component: SpeakerDetailPage, name: 'SpeakerDetail', segment: 'speakerDetail/:speakerId' },
        { component: MapPage, name: 'Map', segment: 'map' },
        { component: AboutPage, name: 'About', segment: 'about' },
        { component: TutorialPage, name: 'Tutorial', segment: 'tutorial' },
        { component: SupportPage, name: 'SupportPage', segment: 'support' },
        { component: LoginPage, name: 'LoginPage', segment: 'login' },
        { component: AccountPage, name: 'AccountPage', segment: 'account' },
        { component: SignupPage, name: 'SignupPage', segment: 'signup' },
        { component: PagamentosListPage, name: 'PagamentosListPage', segment: 'pagamentos' },               
        { component: ReservasListPage, name: 'ReservasListPage', segment: 'reservas' },
        { component: ContaDetailPage, name: 'ContaDetailPage', segment: 'conta' },
        { component: SobreDetailPage, name: 'SobreDetailPage', segment: 'sobre' } ,   
        { component: ReservasSolicitadasPage, name: 'ReservasSolicitadasPage', segment: 'reservas-solicitadas' },             
        { component: BarcosMeusPage, name: 'BarcosMeusPage', segment: 'barcos-meus' },
        { component: ReservasPlanejamentoPage, name: 'ReservasPlanejamentoPage', segment: 'reservas-planejamento' } ,
        { component: PagamentosMeusPage, name: 'PagamentosMeusPage', segment: 'pagamentos-meus' },         
        { component: BarcosPesquisaPage, name: 'BarcosPesquisaPage', segment: 'barcos-pesquisa' } ,
        { component: BarcosPresentFilterPage, name: 'BarcosPresentFilterPage', segment: 'barcos-filter' }         
      ]
    }),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    ConferenceApp,
    AboutPage,
    AccountPage,
    LoginPage,
    MapPage,
    PopoverPage,
    SchedulePage,
    ScheduleFilterPage,
    SessionDetailPage,
    SignupPage,
    SpeakerDetailPage,
    SpeakerListPage,
    TabsPage,
    TutorialPage,
    SupportPage,
    PagamentosListPage,
    ReservasListPage,
    ContaDetailPage,
    SobreDetailPage,
    ReservasSolicitadasPage,
    BarcosMeusPage,
    ReservasPlanejamentoPage,
    PagamentosMeusPage,
    BarcosPesquisaPage,
    BarcosPresentFilterPage
  ],
  providers: [
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    ConferenceData,
    UserData,
    InAppBrowser,
    SplashScreen
  ]
})
export class AppModule { }
