import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import {PopoverMenuPage} from '../pages/popover-menu/popover-menu.page';
import {SettingsPage} from '../pages/settings/settings.page';
import {LoginPage} from '../pages/login/login.page';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,

    PopoverMenuPage,
    SettingsPage,
    LoginPage,
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,

    PopoverMenuPage,
    SettingsPage,
    LoginPage,
  ],
  providers: []
})
export class AppModule {}
