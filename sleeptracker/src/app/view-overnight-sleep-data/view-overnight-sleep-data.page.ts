import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar,
  IonItem, IonButton, IonButtons,
  IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonCardSubtitle,
  IonGrid, IonRow, IonCol, IonList} from '@ionic/angular/standalone';
import { Router } from '@angular/router';
import { SleepService } from '../services/sleep.service';
import { OvernightSleepData } from '../data/overnight-sleep-data';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-view-overnight-sleep-data',
  templateUrl: './view-overnight-sleep-data.page.html',
  styleUrls: ['./view-overnight-sleep-data.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar,
    IonItem, IonButton, IonButtons,
    IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonCardSubtitle,
    IonGrid, IonRow, IonCol, IonList,
    CommonModule, FormsModule]
})
export class ViewOvernightSleepDataPage implements OnInit {
  overnightSleepData: OvernightSleepData[] = [];

  constructor(private router: Router, private alertController: AlertController, private sleepService: SleepService) { }

  ngOnInit() {
    this.overnightSleepData = this.sleepService.getOvernightData();
  }

  navigate(page: string) {
		this.router.navigate([page]);
	}

  confirmRemove(log_index: number) {
    this.alertController.create({
      header: 'Confirm Removal',
      message: 'Are you sure you want to remove this log?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel'
        },
        {
          text: 'Remove',
          handler: () => {
            this.removeLog(log_index);
          }
        }
        ]
    }).then((alert) => {
      alert.present();
    });
  }

  removeLog(log_index: number) {
    this.sleepService.removeOvernightData(log_index);
    this.overnightSleepData = this.sleepService.getOvernightData();
  }

  

}
