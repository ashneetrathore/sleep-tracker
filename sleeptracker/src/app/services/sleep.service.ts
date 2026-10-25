import { Injectable } from '@angular/core';
import { SleepData } from '../data/sleep-data';
import { OvernightSleepData } from '../data/overnight-sleep-data';
import { StanfordSleepinessData } from '../data/stanford-sleepiness-data';

@Injectable({
  providedIn: 'root'
})
export class SleepService {
	private static LoadDefaultData:boolean = true;
	public static AllSleepData:SleepData[] = [];
	public static AllOvernightData:OvernightSleepData[] = [];
	public static AllSleepinessData:StanfordSleepinessData[] = [];

	constructor() {
		if(SleepService.LoadDefaultData) {
			this.addDefaultData();
		SleepService.LoadDefaultData = false;
	}
	}

	private addDefaultData() {
	}

	public logOvernightData(sleepData:OvernightSleepData) {
		SleepService.AllSleepData.push(sleepData);
		SleepService.AllOvernightData.push(sleepData);
	}

	public logSleepinessData(sleepData:StanfordSleepinessData) {
		SleepService.AllSleepData.push(sleepData);
		SleepService.AllSleepinessData.push(sleepData);
	}

	public getOvernightData(): OvernightSleepData[] {
		return SleepService.AllOvernightData
	}
	
	public getSleepinessData(): StanfordSleepinessData[] {
		return SleepService.AllSleepinessData
	}

	public removeOvernightData(log_index: number) {
		const logToRemove = SleepService.AllOvernightData[log_index];
		SleepService.AllOvernightData.splice(log_index, 1);
		SleepService.AllSleepData = SleepService.AllSleepData.filter(log => log !== logToRemove);

	}

	public removeSleepinessData(log_index: number) {
		const logToRemove = SleepService.AllSleepinessData[log_index];
		SleepService.AllSleepinessData.splice(log_index, 1);
		SleepService.AllSleepData = SleepService.AllSleepData.filter(log => log !== logToRemove);

	}

}
