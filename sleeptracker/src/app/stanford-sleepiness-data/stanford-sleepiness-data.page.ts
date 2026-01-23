import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButton,
  IonCard, IonCardContent,
  IonItem, IonLabel,
  IonRadioGroup, IonRadio,
  IonGrid, IonRow, IonCol
 } from '@ionic/angular/standalone';
import { Router } from '@angular/router';
import { StanfordSleepinessData } from '../data/stanford-sleepiness-data';
import { AlertController } from '@ionic/angular';
import { SleepService } from '../services/sleep.service';

@Component({
  selector: 'app-stanford-sleepiness-data',
  templateUrl: './stanford-sleepiness-data.page.html',
  styleUrls: ['./stanford-sleepiness-data.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, IonButton,
    IonCard, IonCardContent,
    IonItem, IonLabel,
    IonRadioGroup, IonRadio,
    IonGrid, IonRow, IonCol,
    CommonModule, FormsModule]
})
export class StanfordSleepinessDataPage implements OnInit {
  scaleValues = StanfordSleepinessData.ScaleValues.slice(1);
  sleepinessLevel: number = 0;

  constructor(private router: Router, private alertController: AlertController, public sleepService: SleepService) { }

  ngOnInit() {
  }

  navigate(page: string) {
		this.router.navigate([page]);
	}
  
  logSleepiness() {
    if (this.sleepinessLevel == 0) {
      this.errorAlert();
    }
    else {
      let loggedSleepinessData = new StanfordSleepinessData(this.sleepinessLevel);
      this.sleepService.logSleepinessData(loggedSleepinessData);
      this.sleepinessLevel = 0;
      this.successAlert();
    }
  
  }

  successAlert() {
    this.alertController.create({
      header: 'Success',
      message: 'Your sleepiness has been logged!',
      buttons: [
        {
          text: 'OK',
          handler: () => {this.navigate('home')}
        }
        ]
    }).then((alert) => {
      alert.present();
    });
  }

  errorAlert() {
    this.alertController.create({
      header: 'Error',
      message: "Please select one option on the scale",
      buttons: ['OK']
    }).then((alert) => {
      alert.present();
    });
  }
}
