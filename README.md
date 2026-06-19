# GCOS — Ground Crew Operations System

A React-based dashboard for managing airport ground crew operations: flights, turnaround tasks, crew assignments, equipment, and schedules.

Built with **Vite + React + Tailwind CSS + lucide-react + Recharts**.

---

## Run from VSCode

### 1. Prerequisites
- [Node.js 18+](https://nodejs.org/) installed
- [VSCode](https://code.visualstudio.com/) installed

### 2. Open the project
1. Unzip the folder.
2. Open VSCode → `File` → `Open Folder...` → select the unzipped `ground-crew-ops` folder.

### 3. Install dependencies
Open the VSCode terminal (`` Ctrl+` `` or `View → Terminal`) and run:

```bash
npm install
```

> You can also use `yarn install` or `pnpm install` if you prefer.

### 4. Start the dev server
```bash
npm run dev
```

The app will open automatically at **http://localhost:5173**.

### 5. Build for production (optional)
```bash
npm run build
npm run preview
```

---

## Features

- **Dashboard** — live ops overview, KPIs, turnaround chart, active alerts
- **Flights** — arrivals/departures with status, gate, aircraft, turnaround timer
- **Crew** — roster with roles, certifications, on-duty status, contact
- **Tasks** — checklist of turnaround tasks per flight (fueling, baggage, catering...)
- **Schedule** — shift calendar grid
- **Equipment** — GSE (Ground Support Equipment) status & maintenance

All data is **mocked** in `src/data/mockData.js` — replace with your API later.

---

## Project Structure

```
ground-crew-ops/
├── index.html
├── package.json
├── tailwind.config.js
├── vite.config.js
└── src/
    ├── main.jsx
    ├── App.jsx
    ├── index.css
    ├── components/      # Sidebar, Topbar, cards, etc.
    ├── pages/           # Dashboard, Flights, Crew, Tasks, Schedule, Equipment
    └── data/            # mockData.js
```

---

## Recommended VSCode Extensions
- **ES7+ React/Redux/React-Native snippets** (`dsznajder.es7-react-js-snippets`)
- **Tailwind CSS IntelliSense** (`bradlc.vscode-tailwindcss`)
- **Prettier** (`esbenp.prettier-vscode`)

---

© 2026 GCOS — Ground Crew Operations System
