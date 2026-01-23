import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar,
  IonItem, IonLabel, IonDatetime, IonButton,
  IonGrid, IonRow, IonCol} from '@ionic/angular/standalone';
import { Router } from '@angular/router';
import { OvernightSleepData } from '../data/overnight-sleep-data';
import { AlertController } from '@ionic/angular';
import { SleepService } from '../services/sleep.service';

@Component({
  selector: 'app-overnight-sleep-data',
  templateUrl: './overnight-sleep-data.page.html',
  styleUrls: ['./overnight-sleep-data.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar,
          IonItem, IonLabel, IonDatetime, IonButton,
          IonGrid, IonRow, IonCol, 
          CommonModule, FormsModule]
})
export class OvernightSleepDataPage implements OnInit {
  sleepStart: string = "";
  sleepEnd: string = "";

  constructor(private router: Router, private alertController: AlertController, public sleepService: SleepService) { }

  ngOnInit() {
  }

  navigate(page: string) {
		this.router.navigate([page]);
	}
  
  logSleep() {
    if (this.sleepStart != "" && this.sleepEnd != "") {
      const sleepStartTime = new Date(this.sleepStart);
      const sleepEndTime = new Date(this.sleepEnd);
      const currentTime = new Date()
      
      if (sleepEndTime > currentTime) {
        let errorMsg = "End time must be before the current time"
        this.errorAlert(errorMsg);
        return;
      }

      if (sleepStartTime > sleepEndTime) {
        let errorMsg = "End time must be after the start time"
        this.errorAlert(errorMsg);
        return;
      }

      let loggedSleepData: OvernightSleepData = new OvernightSleepData(sleepStartTime, sleepEndTime);
      this.sleepService.logOvernightData(loggedSleepData);
      this.successAlert();

    }
    else {
      if (this.sleepStart == "") {
        let errorMsg = "Please choose a start time";
        this.errorAlert(errorMsg);
      }
      else {
        let errorMsg = "Please choose an end time";
        this.errorAlert(errorMsg);
      }
    }
  }

  successAlert() {
    this.alertController.create({
      header: 'Success',
      message: 'Your sleep session has been logged!',
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

  errorAlert(errorMsg: string) {
    this.alertController.create({
      header: 'Error',
      message: errorMsg,
      buttons: ['OK']
    }).then((alert) => {
      alert.present();
    });
  }
}
