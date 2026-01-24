# :sleeping: SLEEP TRACKER

## :open_book: OVERVIEW
Date: March 2025\
Developer(s): Ashneet Rathore\
Based on assignment instructions from Prof. Daniel Epstein

Sleep Tracker is a mobile application designed for logging and reviewing sleep patterns and daily sleepiness levels. Users can record their overnight sleep durations by tracking bedtimes and wake times, as well as rate their alertness during the day using the [Stanford Sleepiness Scale](https://www.med.upenn.edu/cbti/assets/user-content/documents/Stanford%20Sleepiness%20Scale.pdf). Logged entries are presented through a simple, mobile-friendly interface that lets users view their recorded sleep and sleepiness data.

This is an early version of the app, and improvements are currently in progress to add more features and enhance the user experience!

**Tech Stack** | Ionic, Angular, TypeScript, HTML, SCSS

## :film_strip: DEMO
[Watch the demo on Youtube]()

## :classical_building: ARCHITECTURE
SleepTracker is implemented as a **client-side application** in **Ionic**, with application logic organized around **Angular** page components, services, and shared data models. Ionic provides the built-in mobile UI components, such as the date/time picker, cards, and buttons, while the layout and styling of the page components are defined using **HTML** and **SCSS**. Rather than relying on a backend server or server-side database, the app manages sleep data locally within the client.

Once users record their overnight sleep duration or their sleepiness level, the corresponding page component captures the input and processes it into a structured **TypeScript** object, using a shared base `SleepData` class with specialized `OvernightSleepData` and `StandfordSleepinessData` subclasses depending on the entry type.

These entry objects are then passed to a shared service, which stores the objects in in-memory arrays, acting as the data layer of the application. When users view their logs, the corresponding page component interacts with this service to retrieve the structured sleep data for display. If a user chooses to remove a log, the page component invokes the service's removal method, updating the in-memory arrays accordingly, and refreshes the log view.

## :open_file_folder: PROJECT FILE STRUCTURE
> [!NOTE]
> The overview of the file structure is intentionally kept minimal. Additional directories/files exist in the project.
```bash
SleepTracker/
│── sleeptracker/
│   └── src/
│       └── app/
│           │── data/                            # Defines TypeScript classes for sleep data
│           │── services/                        # Manages and retrieves in-memory logged sleep data
│           │── home/                            # Implements the main landing page
│           │── overnight-sleep-data/            # Implements the page component for logging overnight sleep
│           │── stanford-sleepiness-data/        # Implements the page component for logging sleepiness
│           │── view-overnight-sleep-data/       # Implements the page component for viewing overnight sleep log
│           │── view-stanford-sleepiness-data/   # Implements the page component for viewing sleepiness log
│           └── app.routes.ts                    # Maps URL routes to Angular pages
│── README.md                                    # Project documentation
└── .gitignore                                   # Excludes files and folders from version control
```

## :rocket: SET UP & EXECUTION
**1. Clone the repository**
```bash
git clone https://github.com/ashneetrathore/SleepTracker.git
```

**2. Install dependencies in `sleeptracker/`**
```bash
cd SleepTracker/sleeptracker
npm install
```

**3. Run the Ionic app**
```bash
ionic serve
```

The app will automatically open in the browser at [http://localhost:8100/](http://localhost:8100/).

## :wrench: TRY IT OUT
### :last_quarter_moon_with_face: LOG OVERNIGHT SLEEP
1. From the home screen, tap the *Log Overnight Sleep* card.
2. Select a sleep start time using the date/time picker.
    - Use the dropdown at the top of the calendar to navigate to the desired month and year, or use the  *<* and *>* buttons to move backward and forward one month at a time.
    - Tap a day on the calendar to select it. The selected date will be highlighted with a blue circle.
    - Choose the time using the time selector below the calendar.
3. Select a sleep end time using the same date/time picker controls. Ensure that the end time is after the start time.
4. Tap *Save Log* to record the overnight sleep entry.
    - If the *Success* dialog box appears, tap *OK* to return to the home screen.
    - If the *Error* dialog box appears, tap *OK* to dismiss it, correct the issue described, and try saving again.
5. To return to the home screen at any time without saving, tap *Cancel*.

### :sleepy: LOG SLEEPINESS
1. From the home screen, tap the *Log Sleepiness* card.
2. Select one option from the scale that best represents your current level of sleepiness. The selected radio button will turn blue.
3. Tap *Save Log* to record the sleepiness entry.
    - If the *Success* dialog box appears, tap *OK* to return to the home screen.
    - If the *Error* dialog box appears, tap *OK* to dismiss it, correct the issue described, and try saving again.
4. To return to the home screen at any time without saving, tap *Cancel*.

### :eye: VIEW LOGS
1. From the home screen, tap the card for the log you want to view:
    - *View Overnight Sleep Log* card to see your overnight sleep entries
    - *View Sleepiness Log* card to see your sleepiness entries
2. To remove a log, tap *Remove Log* and then tap *Remove* when the confirmation dialog box appears.
3. To exit the log and return to the home screen, tap *Exit*.