import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';

@Component({
    selector: 'settings-page',
    templateUrl: 'settings.page.html'
})
export class SettingsPage {
    private navController: NavController;

    public constructor(navController: NavController) {
        this.navController = navController;
    }
}
