import { MapPin, Fuel, Wrench, User } from 'lucide-react'
import PageHeader from '../components/PageHeader.jsx'
import StatusBadge from '../components/StatusBadge.jsx'
import { EQUIPMENT } from '../data/mockData.js'

export default function Equipment() {
  return (
    <div>
      <PageHeader
        eyebrow="GSE Fleet"
        title="Ground Support Equipment"
        description="Track availability, operator, fuel levels and service history of all ramp equipment."
        actions={<button className="btn-primary" data-testid="schedule-maintenance-btn">Schedule Maintenance</button>}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {EQUIPMENT.map(e => (
          <div key={e.id} className="panel panel-hover p-5 animate-slide-up">
            <div className="flex items-start justify-between mb-3">
              <div>
                <div className="font-mono text-[11px] text-slate-500">{e.id}</div>
                <div className="font-semibold text-slate-100 mt-0.5">{e.type}</div>
                <div className="text-xs text-slate-500">{e.model}</div>
              </div>
              <StatusBadge status={e.status} />
            </div>

            <div className="space-y-2 text-xs mt-4">
              <div className="flex items-center gap-2 text-slate-400">
                <MapPin size={12} />
                <span className="font-mono">{e.location}</span>
              </div>
              <div className="flex items-center gap-2 text-slate-400">
                <User size={12} />
                <span>{e.operator}</span>
              </div>
              <div className="flex items-center gap-2 text-slate-400">
                <Wrench size={12} />
                <span className="font-mono">Service: {e.lastService}</span>
              </div>
            </div>

            <div className="mt-4 pt-4 border-t border-ink-700/60">
              <div className="flex items-center justify-between text-xs mb-1.5">
                <span className="label-tiny flex items-center gap-1.5"><Fuel size={11} /> Fuel</span>
                <span className="font-mono font-semibold text-slate-200">{e.fuel}%</span>
              </div>
              <div className="h-1.5 bg-ink-800 rounded-full overflow-hidden">
                <div
                  className={`h-full rounded-full transition-all ${e.fuel > 60 ? 'bg-signal-green' : e.fuel > 25 ? 'bg-signal-amber' : 'bg-signal-red'}`}
                  style={{ width: `${e.fuel}%` }}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
