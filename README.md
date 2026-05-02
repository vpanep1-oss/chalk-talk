# Basketball Practice Builder

A mobile-first web app for planning and running youth basketball practices using Coach Jim Huber's Breakthrough Basketball practice plans.

## Features

✅ **32 Pre-loaded Practice Plans** - 16 Beginner + 16 Intermediate plans (60/75/90 min)  
✅ **100+ Basketball Drills** - Complete drill library with descriptions and details  
✅ **Practice Timer** - Live countdown with sound alerts and haptic feedback  
✅ **Plan Customization** - Adjust drill durations, swap drills, reorder  
✅ **Game & Practice Notes** - Track observations with categories and dates  
✅ **Mobile-First Design** - Optimized for iPhone/Android, bookmark to home screen  
✅ **Offline Capable** - Works without internet connection  
✅ **Firebase Sync** - Optional team code for multi-device sync  

## Quick Start

### 1. Install Dependencies

```bash
npm install
```

### 2. Run Development Server

```bash
npm run dev
```

The app will open at `http://localhost:3000`

### 3. Build for Production

```bash
npm run build
```

## Firebase Setup (Optional)

To enable team sync features:

1. Create a Firebase project at https://console.firebase.google.com
2. Enable Firestore Database
3. Copy your Firebase config credentials
4. Update `src/firebase/config.js` with your credentials

```javascript
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_PROJECT_ID.appspot.com",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID"
};
```

## Project Structure

```
basketball-practice-builder/
├── public/
│   └── manifest.json          # PWA manifest
├── src/
│   ├── components/
│   │   └── Navigation.jsx     # Bottom navigation bar
│   ├── data/
│   │   ├── drillLibrary.js    # 100+ drills data
│   │   └── practicePlans.js   # 32 practice plans
│   ├── firebase/
│   │   └── config.js          # Firebase configuration
│   ├── pages/
│   │   ├── Home.jsx           # Landing page
│   │   ├── PlanLibrary.jsx    # Browse practice plans
│   │   ├── PlanEditor.jsx     # Customize plan
│   │   ├── DrillLibrary.jsx   # Browse drills
│   │   ├── Timer.jsx          # Live practice timer
│   │   ├── GameNotes.jsx      # Notes tracker
│   │   └── Settings.jsx       # App settings
│   ├── styles/
│   │   ├── index.css          # Global styles
│   │   └── App.css            # App-level styles
│   ├── App.jsx                # Main app component
│   └── main.jsx               # React entry point
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

## Data Sources

All practice plans and drills extracted from:

- **32 Huber Youth Practice Plans** (16 Beginner, 16 Intermediate)
- **Breakthrough Basketball Skill Development** with Jim Huber
- **Man-To-Man Defense Development**
- **Special Situations** (Press break, zone offense, BLOB/SLOB plays)
- **Team Offense Development** (5 Cut motion, penetrate & pitch)

## Technology Stack

- **React 18** - UI framework
- **Vite** - Build tool and dev server
- **React Router** - Client-side routing
- **Firebase** - Cloud persistence (optional)
- **@dnd-kit** - Drag-and-drop (future feature)
- **jsPDF** - PDF export (future feature)
- **Web Audio API** - Timer sounds
- **Vibration API** - Haptic feedback (Android)

## Mobile Installation

### iOS (Safari)
1. Open the app in Safari
2. Tap the Share button
3. Scroll down and tap "Add to Home Screen"
4. Tap "Add"

### Android (Chrome)
1. Open the app in Chrome
2. Tap the menu (⋮)
3. Tap "Add to Home screen"
4. Tap "Add"

## Usage Guide

### Browse Practice Plans
1. Tap **Plans** in bottom navigation
2. Filter by skill level (Beginner/Intermediate) and duration (60/75/90 min)
3. Tap a plan to view details

### Customize a Plan
1. Open a practice plan
2. Adjust drill durations using the time inputs
3. Tap **Save Changes** to store modifications
4. Tap **Start Practice** to begin the timer

### Run Practice with Timer
1. Select a practice plan
2. Tap **Start Practice** or navigate to **Timer** tab
3. Use ▶️ Play/⏸️ Pause to control the timer
4. Sound and vibration alerts when each drill completes
5. View "Up Next" to see upcoming drills

### Add Game/Practice Notes
1. Tap **Notes** in bottom navigation
2. Tap **+ New Note**
3. Select type (Game/Practice), category, and date
4. Write your observations
5. Tap **Save Note**

### Team Sync Setup
1. Tap **Settings** in bottom navigation (gear icon)
2. Enter a team code (e.g., "eagles2024")
3. Share this code with assistant coaches
4. All devices with the same code will sync data

## Future Enhancements

- [ ] Drag-and-drop drill reordering
- [ ] PDF export of customized plans
- [ ] Drill rating system (1-3 stars post-practice)
- [ ] Recommendation engine based on drill history
- [ ] Focus area of the month selector
- [ ] Smart time-filler (auto-adjust plans to 60/75/90 min)
- [ ] Season calendar/timeline view
- [ ] Video links for drill demonstrations

## Credits

Practice plans and drills by **Coach Jim Huber** from **Breakthrough Basketball**.

Built for youth basketball coaches to improve practice planning and execution.

## License

MIT License - See LICENSE file for details
