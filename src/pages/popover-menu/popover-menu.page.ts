import {Component} from '@angular/core';

import {ViewController, NavController} from 'ionic-angular';

import {SettingsPage} from '../settings/settings.page';
import {LoginPage} from '../login/login.page';

@Component({
    selector: 'gl-popover-menu',
    templateUrl: 'popover-menu.page.html'
})
export class PopoverMenuPage {
    public viewController: ViewController;
    public navController: NavController;

    public constructor(
        viewController: ViewController,
        navController: NavController
    ) {
        this.viewController = viewController;
        this.navController = navController;
    }

    public onSettingsClick() {
        this.navController.push(SettingsPage).then(() => {
            this.viewController.dismiss();
        });
    }

    public onLogoutClick() {
        this.navController.setRoot(LoginPage);
    }
}
