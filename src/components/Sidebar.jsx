import { NavLink } from 'react-router-dom'
import {
  LayoutDashboard, Plane, Users, ClipboardCheck, CalendarClock, Wrench, Radio,
} from 'lucide-react'

const NAV = [
  { to: '/dashboard', label: 'Dashboard', icon: LayoutDashboard },
  { to: '/flights',   label: 'Flights',   icon: Plane },
  { to: '/crew',      label: 'Crew',      icon: Users },
  { to: '/tasks',     label: 'Tasks',     icon: ClipboardCheck },
  { to: '/schedule',  label: 'Schedule',  icon: CalendarClock },
  { to: '/equipment', label: 'Equipment', icon: Wrench },
]

export default function Sidebar() {
  return (
    <aside className="hidden md:flex w-60 flex-col border-r border-ink-700/60 bg-ink-900/40 backdrop-blur-sm">
      <div className="px-6 py-6 border-b border-ink-700/60">
        <div className="flex items-center gap-2.5">
          <div className="w-9 h-9 rounded-lg bg-signal-amber/15 border border-signal-amber/40 flex items-center justify-center">
            <Radio className="w-4.5 h-4.5 text-signal-amber" size={18} />
          </div>
          <div>
            <div className="font-mono font-bold text-sm tracking-wider text-slate-100">GCOS</div>
            <div className="label-tiny mt-0.5">Ground Ops</div>
          </div>
        </div>
      </div>

      <nav className="flex-1 px-3 py-5 space-y-1">
        {NAV.map(({ to, label, icon: Icon }) => (
          <NavLink
            key={to}
            to={to}
            className={({ isActive }) =>
              `flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm transition-all duration-150 ${
                isActive
                  ? 'bg-signal-amber/10 text-signal-amber border-l-2 border-signal-amber pl-[10px]'
                  : 'text-slate-400 hover:text-slate-100 hover:bg-ink-800/60'
              }`
            }
          >
            <Icon size={17} strokeWidth={1.75} />
            <span className="font-medium">{label}</span>
          </NavLink>
        ))}
      </nav>

      <div className="m-3 p-3 rounded-lg bg-ink-800/60 border border-ink-700/60">
        <div className="flex items-center gap-2 mb-2">
          <div className="w-2 h-2 rounded-full bg-signal-green animate-pulse-slow" />
          <span className="font-mono text-[11px] text-slate-300">SYSTEM ONLINE</span>
        </div>
        <div className="label-tiny">Hub: ATL · Tower 1</div>
        <div className="font-mono text-[11px] text-slate-500 mt-1">v1.0.0 · build 2026.02</div>
      </div>
    </aside>
  )
}
