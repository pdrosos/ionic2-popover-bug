import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';

@Component({
    selector: 'login-page',
    templateUrl: 'login.page.html'
})
export class LoginPage {
    public login: {username?: string, password?: string} = {};
    public submitted = false;

    private navController: NavController;

    public constructor(navController: NavController) {
        this.navController = navController;
    }

    public onLoginClick(form) {
        this.submitted = true;
    }
}
