import { Component, OnInit } from '@angular/core';
import { NavController, ModalController } from '@ionic/angular';
import { SuccessDlgComponent } from 'src/app/components/success-dlg/success-dlg.component';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['../login/login.page.scss','./register.page.scss'],
})
export class RegisterPage implements OnInit {

  constructor(
    private navCtrl: NavController,
    private modalCtrl: ModalController
  ) { }

  ngOnInit() {
  }

  onRegister() {
    this.onSuccess();
  }

  onBackToLogin() {
    this.navCtrl.navigateBack('/login');
  }

  async onSuccess() {
    const sModal = await this.modalCtrl.create({
      component: SuccessDlgComponent,
      componentProps: {
        state: 0,
        data: {}
      },
      cssClass: 'confirm_modal',
      backdropDismiss: false
    });
    return await sModal.present();
  }

}
