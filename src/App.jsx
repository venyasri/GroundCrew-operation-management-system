import { Routes, Route, Navigate } from 'react-router-dom'
import Sidebar from './components/Sidebar.jsx'
import Topbar from './components/Topbar.jsx'
import Dashboard from './pages/Dashboard.jsx'
import Flights from './pages/Flights.jsx'
import Crew from './pages/Crew.jsx'
import Tasks from './pages/Tasks.jsx'
import Schedule from './pages/Schedule.jsx'
import Equipment from './pages/Equipment.jsx'

export default function App() {
  return (
    <div className="flex h-full">
      <Sidebar />
      <main className="flex-1 flex flex-col overflow-hidden">
        <Topbar />
        <div className="flex-1 overflow-y-auto p-6 lg:p-8 grid-bg">
          <Routes>
            <Route path="/" element={<Navigate to="/dashboard" replace />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/flights" element={<Flights />} />
            <Route path="/crew" element={<Crew />} />
            <Route path="/tasks" element={<Tasks />} />
            <Route path="/schedule" element={<Schedule />} />
            <Route path="/equipment" element={<Equipment />} />
          </Routes>
        </div>
      </main>
    </div>
  )
}
