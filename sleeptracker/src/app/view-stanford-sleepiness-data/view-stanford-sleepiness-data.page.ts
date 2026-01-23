import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar,
  IonItem, IonButton, IonButtons,
  IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonCardSubtitle,
  IonGrid, IonRow, IonCol, IonList} from '@ionic/angular/standalone';
import { Router } from '@angular/router';
import { SleepService } from '../services/sleep.service';
import { StanfordSleepinessData } from '../data/stanford-sleepiness-data';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-view-stanford-sleepiness-data',
  templateUrl: './view-stanford-sleepiness-data.page.html',
  styleUrls: ['./view-stanford-sleepiness-data.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar,
    IonItem, IonButton, IonButtons,
    IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonCardSubtitle,
    IonGrid, IonRow, IonCol, IonList,
    CommonModule, FormsModule]
})
export class ViewStanfordSleepinessDataPage implements OnInit {
  sleepinessData: StanfordSleepinessData[] = [];

  constructor(private router: Router, private alertController: AlertController, private sleepService: SleepService) { }

  ngOnInit() {
    this.sleepinessData = this.sleepService.getSleepinessData();
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
    this.sleepService.removeSleepinessData(log_index);
    this.sleepinessData = this.sleepService.getSleepinessData();
  }

}
