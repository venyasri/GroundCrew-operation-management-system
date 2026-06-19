import { useState } from 'react'
import { ArrowUpRight, ArrowDownRight, Filter, Plane } from 'lucide-react'
import PageHeader from '../components/PageHeader.jsx'
import StatusBadge from '../components/StatusBadge.jsx'
import { FLIGHTS } from '../data/mockData.js'

const FILTERS = ['All', 'Arrival', 'Departure']

export default function Flights() {
  const [filter, setFilter] = useState('All')
  const list = filter === 'All' ? FLIGHTS : FLIGHTS.filter(f => f.type === filter)

  return (
    <div>
      <PageHeader
        eyebrow="Flight Operations"
        title="Flight Board"
        description="Monitor arrivals, departures, gate assignments, and turnaround windows."
        actions={
          <button className="btn-primary" data-testid="add-flight-btn">+ Add Flight</button>
        }
      />

      <div className="flex flex-wrap items-center gap-2 mb-5">
        <Filter size={15} className="text-slate-500 mr-1" />
        {FILTERS.map(f => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            data-testid={`filter-${f.toLowerCase()}`}
            className={`px-3.5 py-1.5 rounded-lg text-xs font-mono transition-colors ${
              filter === f
                ? 'bg-signal-amber text-ink-950 font-semibold'
                : 'bg-ink-800/60 text-slate-400 hover:text-slate-100 border border-ink-700/60'
            }`}
          >
            {f}
          </button>
        ))}
        <span className="ml-auto label-tiny">{list.length} flights</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
        {list.map(f => (
          <div key={f.id} className="panel panel-hover p-5 animate-slide-up">
            <div className="flex items-start justify-between mb-4">
              <div>
                <div className="flex items-center gap-2">
                  <span className="font-mono font-bold text-xl text-slate-100">{f.flightNo}</span>
                  {f.type === 'Arrival'
                    ? <ArrowDownRight size={16} className="text-signal-cyan" />
                    : <ArrowUpRight size={16} className="text-signal-amber" />}
                </div>
                <div className="text-xs text-slate-500 mt-0.5">{f.airline} · {f.aircraft}</div>
              </div>
              <StatusBadge status={f.status} />
            </div>

            <div className="flex items-center justify-between bg-ink-800/50 rounded-lg px-4 py-3 mb-4">
              <div className="text-center">
                <div className="font-mono font-bold text-lg text-slate-100">{f.origin}</div>
                <div className="label-tiny mt-0.5">Origin</div>
              </div>
              <div className="flex-1 flex items-center px-3">
                <div className="flex-1 h-px bg-ink-600" />
                <Plane size={14} className="mx-2 text-signal-amber" />
                <div className="flex-1 h-px bg-ink-600" />
              </div>
              <div className="text-center">
                <div className="font-mono font-bold text-lg text-slate-100">{f.dest}</div>
                <div className="label-tiny mt-0.5">Dest</div>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-3 text-center">
              <div>
                <div className="label-tiny">Gate</div>
                <div className="font-mono font-semibold text-slate-100 mt-1">{f.gate}</div>
              </div>
              <div>
                <div className="label-tiny">Sched</div>
                <div className="font-mono font-semibold text-slate-100 mt-1 tabular-nums">{f.sched}</div>
              </div>
              <div>
                <div className="label-tiny">Turnaround</div>
                <div className="font-mono font-semibold text-signal-amber mt-1">{f.turnaround}m</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
