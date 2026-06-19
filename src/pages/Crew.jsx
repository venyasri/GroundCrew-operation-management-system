import { Phone, BadgeCheck } from 'lucide-react'
import PageHeader from '../components/PageHeader.jsx'
import StatusBadge from '../components/StatusBadge.jsx'
import { CREW } from '../data/mockData.js'

function initials(name) {
  return name.split(' ').map(n => n[0]).join('').toUpperCase()
}

const ACCENTS = ['from-signal-amber to-amber-600', 'from-signal-cyan to-blue-600', 'from-signal-green to-emerald-700', 'from-purple-500 to-pink-600', 'from-rose-500 to-red-700']

export default function Crew() {
  return (
    <div>
      <PageHeader
        eyebrow="Personnel"
        title="Crew Roster"
        description="Active ground crew, certifications, current shift status and gate assignments."
        actions={<button className="btn-primary" data-testid="add-crew-btn">+ Add Crew Member</button>}
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {CREW.map((c, i) => (
          <div key={c.id} className="panel panel-hover p-5 animate-slide-up">
            <div className="flex items-start gap-3">
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${ACCENTS[i % ACCENTS.length]} flex items-center justify-center font-bold text-ink-950 text-sm shrink-0`}>
                {initials(c.name)}
              </div>
              <div className="flex-1 min-w-0">
                <div className="font-semibold text-slate-100 truncate">{c.name}</div>
                <div className="text-xs text-slate-500">{c.id} · {c.role}</div>
              </div>
            </div>

            <div className="mt-4 flex items-center justify-between">
              <StatusBadge status={c.status} />
              <span className="font-mono text-[11px] text-slate-500">{c.shift} Shift</span>
            </div>

            <div className="mt-4 space-y-2 text-xs">
              <div className="flex items-center gap-2 text-slate-400">
                <Phone size={12} />
                <span className="font-mono">{c.phone}</span>
              </div>
              <div className="flex items-start gap-2">
                <BadgeCheck size={12} className="text-signal-green shrink-0 mt-0.5" />
                <div className="flex flex-wrap gap-1">
                  {c.certs.map(cert => (
                    <span key={cert} className="px-1.5 py-0.5 rounded font-mono text-[10px] bg-ink-800 border border-ink-700 text-slate-300">{cert}</span>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-4 pt-3 border-t border-ink-700/60 flex items-center justify-between">
              <span className="label-tiny">Assigned</span>
              <span className="font-mono text-xs text-signal-amber">{c.assigned}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
