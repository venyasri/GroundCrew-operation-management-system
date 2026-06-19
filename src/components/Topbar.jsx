import { Search, Bell, Settings, ChevronDown } from 'lucide-react'
import { useEffect, useState } from 'react'

export default function Topbar() {
  const [now, setNow] = useState(new Date())
  useEffect(() => {
    const t = setInterval(() => setNow(new Date()), 1000)
    return () => clearInterval(t)
  }, [])

  const time = now.toLocaleTimeString('en-US', { hour12: false })
  const date = now.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric', year: 'numeric' })

  return (
    <header className="h-16 px-6 lg:px-8 flex items-center justify-between border-b border-ink-700/60 bg-ink-900/40 backdrop-blur-sm">
      <div className="flex items-center gap-6">
        <div className="hidden lg:flex items-center gap-2 px-3 py-1.5 rounded-lg bg-ink-800/60 border border-ink-700/60 w-80">
          <Search size={15} className="text-slate-500" />
          <input
            type="text"
            placeholder="Search flights, crew, tasks…"
            className="bg-transparent text-sm flex-1 outline-none placeholder:text-slate-500"
          />
          <span className="font-mono text-[10px] text-slate-500 px-1.5 py-0.5 rounded border border-ink-600">⌘K</span>
        </div>
      </div>

      <div className="flex items-center gap-3">
        <div className="hidden sm:block text-right">
          <div className="font-mono font-bold text-sm text-slate-100 tabular-nums">{time}</div>
          <div className="label-tiny mt-0.5">{date}</div>
        </div>

        <div className="w-px h-8 bg-ink-700/60 mx-1" />

        <button className="btn-ghost relative">
          <Bell size={17} />
          <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-signal-red rounded-full ring-2 ring-ink-900" />
        </button>
        <button className="btn-ghost">
          <Settings size={17} />
        </button>

        <div className="flex items-center gap-2 pl-3 pr-2 py-1.5 rounded-lg hover:bg-ink-800/60 cursor-pointer transition-colors">
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-signal-amber to-amber-600 flex items-center justify-center font-bold text-ink-950 text-xs">
            MW
          </div>
          <div className="hidden md:block">
            <div className="text-xs font-medium text-slate-100">M. Whitfield</div>
            <div className="label-tiny">Ops Supervisor</div>
          </div>
          <ChevronDown size={14} className="text-slate-500" />
        </div>
      </div>
    </header>
  )
}
