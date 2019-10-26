import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(
    private router: Router,
    private navCtrl: NavController
  ) { }

  ngOnInit() {
  }

  onLogin() {
    // this.router.navigate(['/menu']);
    setTimeout(()=>{
      this.navCtrl.navigateRoot('menu',{animated: false});
    },300);
    
    // this.navCtrl.navigateForward('menu');
  }

  goForgot() {
    this.navCtrl.navigateForward('/forgot');
  }
}
