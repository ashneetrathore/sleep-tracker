import { SleepData } from './sleep-data';

export class OvernightSleepData extends SleepData {
	private sleepStart:Date;
	private sleepEnd:Date;

	constructor(sleepStart:Date, sleepEnd:Date) {
		super();
		this.sleepStart = sleepStart;
		this.sleepEnd = sleepEnd;
	}

	override summaryString():string {
		var sleepStart_ms = this.sleepStart.getTime();
		var sleepEnd_ms = this.sleepEnd.getTime();

		// Calculate the difference in milliseconds
		var difference_ms = sleepEnd_ms - sleepStart_ms;
		    
		// Convert to hours and minutes
		return Math.floor(difference_ms / (1000*60*60)) + " hours, " + Math.floor(difference_ms / (1000*60) % 60) + " minutes";
	}

	sleepStartString():string {
		const timeString = this.sleepStart.toLocaleTimeString([], { hour: 'numeric', minute: '2-digit', hour12: true });
		const dateString = this.sleepStart.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' });
		return dateString + " | " + timeString;
	}

	sleepEndString():string {
		const timeString = this.sleepEnd.toLocaleTimeString([], { hour: 'numeric', minute: '2-digit', hour12: true });
		const dateString = this.sleepEnd.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' });
		return dateString + " | " + timeString;
	}
}
