# :sleeping: SLEEP TRACKER

## :open_book: OVERVIEW
Date: March 2025\
Developer(s): Ashneet Rathore

Sleep Tracker is a mobile application for logging and reviewing sleep patterns and daily sleepiness levels. Users can record their overnight sleep durations by tracking bedtimes and wake times, as well as rate their alertness during the day using the [Stanford Sleepiness Scale](https://www.med.upenn.edu/cbti/assets/user-content/documents/Stanford%20Sleepiness%20Scale.pdf). Logged entries are presented through a simple, mobile-friendly interface for viewing recorded sleep and sleepiness data.

**Tech Stack** | Ionic, Angular, TypeScript, HTML, SCSS

## :film_strip: DEMO
[Watch the demo on Youtube](https://youtu.be/h1TvJz1TLyE)

## :classical_building: ARCHITECTURE
Sleep Tracker is implemented as a **client-side** **Ionic** app built with **Angular** page components, services, and shared data models. Ionic provides built-in mobile UI components such as the date/time picker, cards, and buttons, and the layout and styling of the page components are defined using **HTML** and **SCSS**. Rather than relying on a backend server or server-side database, the app manages sleep data locally within the client.

Flow of a sleep entry:
- Angular page component captures user input and processes it into a structured TypeScript object
- Typescript object is passed to a shared Angular service (acting as the data layer), which stores entries in in-memory arrays
- When viewing logs, the page component retrieves the stored entries from the service for display
- When removing a log, the page component invokes the service to update the in-memory arrays and refresh the view

## :open_file_folder: PROJECT FILE STRUCTURE
> [!NOTE]
> The overview of the file structure is intentionally kept minimal. Additional directories/files exist in the project.
```bash
sleep-tracker/
│── sleeptracker/
│   └── src/
│       └── app/
│           │── data/                            # TypeScript classes for sleep data
│           │── services/                        # In-memory sleep data management
│           │── home/                            # Home page component
│           │── overnight-sleep-data/            # Overnight sleep entry page component
│           │── stanford-sleepiness-data/        # Sleepiness entry page component
│           │── view-overnight-sleep-data/       # Overnight sleep log page component
│           │── view-stanford-sleepiness-data/   # Sleepiness log page component
│           └── app.routes.ts                    # URL route to page mappings
│── README.md                                    # Project documentation
└── .gitignore                                   # Ignored files
```

## :rocket: SET UP & EXECUTION
**1. Clone the repository**
```bash
git clone https://github.com/ashneetrathore/sleep-tracker.git
```

**2. Install dependencies in `sleeptracker/`**
```bash
cd sleep-tracker/sleeptracker
npm install
```

**3. Run the Ionic app**
```bash
ionic serve
```
The app will automatically open at [http://localhost:8100/](http://localhost:8100/).

## :wrench: TRY IT OUT
### :last_quarter_moon_with_face: LOG OVERNIGHT SLEEP
1. From the home screen, tap *Log Overnight Sleep*.
2. Select a sleep start time using the date/time picker.
3. Select a sleep end time. Ensure that the end time is after the start time.
4. Tap *Save Log*. If successful, tap *OK* to return home. If an error dialog appears, tap *OK*, correct the issue, and try saving again.
5. To return home without saving, tap *Cancel*.

### :sleepy: LOG SLEEPINESS
1. From the home screen, tap *Log Sleepiness*.
2. Select one option from the scale that best represents current sleepiness level.
3. Tap *Save Log*. If successful, tap *OK* to return home. If an error dialog appears, tap *OK*, correct the issue, and try saving again.
4. To return home without saving, tap *Cancel*.

### :eye: VIEW LOGS
1. From the home screen, tap *View Overnight Sleep Log* or *View Sleepiness Log*.
2. To remove an entry, tap *Remove Log* and confirm when prompted.
3. To return home, tap *Exit*.