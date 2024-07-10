import {Component} from '@angular/core';
import {AlertController, IonContent, IonHeader, IonTitle, IonToolbar, ViewWillEnter} from '@ionic/angular/standalone';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent],
})
export class HomePage implements ViewWillEnter {
  constructor(private alertController: AlertController) {
  }

  async ionViewWillEnter() {
    const alert = await this.alertController.create({
      htmlAttributes: {id: 'custom-id'},
      message: 'This is an alert message that should have a custom ID.',
    });
    await alert.present();
  }

}
