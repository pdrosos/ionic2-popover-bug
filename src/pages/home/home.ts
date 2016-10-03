import { Component } from '@angular/core';

import { NavController, PopoverController } from 'ionic-angular';

import {PopoverMenuPage} from '../popover-menu/popover-menu.page';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public popoverController: PopoverController) {

  }

  presentPopoverMenu(event) {
    let popoverMenu = this.popoverController.create(PopoverMenuPage);

    popoverMenu.present({
      ev: event
    });
  }
}
