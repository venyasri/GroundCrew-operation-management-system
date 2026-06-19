import { Plane, Users, ClipboardCheck, Activity, AlertTriangle, Info, AlertCircle, ArrowUpRight, ArrowDownRight } from 'lucide-react'
import { LineChart, Line, XAxis, YAxis, ResponsiveContainer, Tooltip, CartesianGrid } from 'recharts'
import StatCard from '../components/StatCard.jsx'
import StatusBadge from '../components/StatusBadge.jsx'
import PageHeader from '../components/PageHeader.jsx'
import { FLIGHTS, ALERTS, TURNAROUND_CHART, CREW, TASKS } from '../data/mockData.js'

const ALERT_ICON = {
  critical: { icon: AlertCircle, color: 'text-signal-red bg-signal-red/10 border-signal-red/30' },
  warning:  { icon: AlertTriangle, color: 'text-signal-amber bg-signal-amber/10 border-signal-amber/30' },
  info:     { icon: Info, color: 'text-signal-blue bg-signal-blue/10 border-signal-blue/30' },
}

export default function Dashboard() {
  const onDuty = CREW.filter(c => c.status === 'On Duty').length
  const inProgress = TASKS.filter(t => t.status === 'In Progress').length

  return (
    <div>
      <PageHeader
        eyebrow="Operations Center · Live"
        title="Ground Ops Dashboard"
        description="Real-time visibility across flights, crew, turnaround and ground support equipment."
        actions={
          <>
            <button className="btn-ghost" data-testid="export-btn">Export</button>
            <button className="btn-primary" data-testid="new-task-btn">+ New Task</button>
          </>
        }
      />

      {/* KPIs */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-7">
        <StatCard label="Active Flights"    value={FLIGHTS.length} delta="+2" icon={Plane}          accent="amber" />
        <StatCard label="Crew On Duty"      value={onDuty}         delta="+4" icon={Users}          accent="green" />
        <StatCard label="Tasks In Progress" value={inProgress}     delta="-1" icon={ClipboardCheck} accent="blue" />
        <StatCard label="Avg Turnaround"    value="46m"            delta="-3m" icon={Activity}      accent="cyan" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
        {/* Turnaround chart */}
        <div className="lg:col-span-2 panel p-5 animate-slide-up">
          <div className="flex items-start justify-between mb-5">
            <div>
              <div className="label-tiny">Performance</div>
              <h3 className="font-mono font-bold text-lg text-slate-100 mt-1">Turnaround Time · Today</h3>
            </div>
            <div className="flex items-center gap-4 text-xs font-mono">
              <span className="flex items-center gap-1.5 text-signal-amber"><span className="w-2.5 h-2.5 rounded-sm bg-signal-amber" /> Actual</span>
              <span className="flex items-center gap-1.5 text-slate-500"><span className="w-2.5 h-2.5 rounded-sm bg-slate-500" /> Target</span>
            </div>
          </div>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={TURNAROUND_CHART}>
                <CartesianGrid stroke="#1f2836" strokeDasharray="3 3" vertical={false} />
                <XAxis dataKey="hr" stroke="#475569" fontSize={11} tickLine={false} axisLine={false} />
                <YAxis stroke="#475569" fontSize={11} tickLine={false} axisLine={false} unit="m" />
                <Tooltip
                  contentStyle={{ background: '#0f141c', border: '1px solid #2a3447', borderRadius: 8, fontSize: 12 }}
                  labelStyle={{ color: '#cbd5e1' }}
                />
                <Line type="monotone" dataKey="target" stroke="#64748b" strokeDasharray="4 4" strokeWidth={1.5} dot={false} />
                <Line type="monotone" dataKey="actual" stroke="#f5a524" strokeWidth={2.5} dot={{ fill: '#f5a524', r: 4 }} activeDot={{ r: 6 }} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Alerts */}
        <div className="panel p-5 animate-slide-up">
          <div className="flex items-center justify-between mb-4">
            <div>
              <div className="label-tiny">Live Feed</div>
              <h3 className="font-mono font-bold text-lg text-slate-100 mt-1">Active Alerts</h3>
            </div>
            <span className="chip text-signal-red border-signal-red/30 bg-signal-red/10">
              {ALERTS.filter(a => a.level === 'critical').length} Critical
            </span>
          </div>
          <div className="space-y-3">
            {ALERTS.map(a => {
              const { icon: Icon, color } = ALERT_ICON[a.level]
              return (
                <div key={a.id} className="flex items-start gap-3 p-3 rounded-lg bg-ink-800/40 border border-ink-700/40 hover:border-ink-600 transition-colors">
                  <div className={`w-8 h-8 rounded-md border flex items-center justify-center shrink-0 ${color}`}>
                    <Icon size={14} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-sm text-slate-200 leading-snug">{a.msg}</div>
                    <div className="font-mono text-[11px] text-slate-500 mt-1">{a.time}</div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>

      {/* Recent flights */}
      <div className="panel mt-5 animate-slide-up">
        <div className="p-5 border-b border-ink-700/60 flex items-center justify-between">
          <div>
            <div className="label-tiny">Live Board</div>
            <h3 className="font-mono font-bold text-lg text-slate-100 mt-1">Today’s Flights</h3>
          </div>
          <a href="/flights" className="text-xs text-signal-amber hover:text-amber-400 font-mono">VIEW ALL →</a>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="text-left label-tiny border-b border-ink-700/60">
                <th className="px-5 py-3">Flight</th>
                <th className="px-5 py-3">Type</th>
                <th className="px-5 py-3">Route</th>
                <th className="px-5 py-3">Gate</th>
                <th className="px-5 py-3">Aircraft</th>
                <th className="px-5 py-3">Sched</th>
                <th className="px-5 py-3">Status</th>
              </tr>
            </thead>
            <tbody>
              {FLIGHTS.slice(0, 6).map(f => (
                <tr key={f.id} className="border-b border-ink-700/30 last:border-0 hover:bg-ink-800/30 transition-colors">
                  <td className="px-5 py-3.5">
                    <div className="font-mono font-semibold text-slate-100">{f.flightNo}</div>
                    <div className="text-xs text-slate-500">{f.airline}</div>
                  </td>
                  <td className="px-5 py-3.5">
                    <span className="inline-flex items-center gap-1.5 text-xs text-slate-300">
                      {f.type === 'Arrival' ? <ArrowDownRight size={13} className="text-signal-cyan" /> : <ArrowUpRight size={13} className="text-signal-amber" />}
                      {f.type}
                    </span>
                  </td>
                  <td className="px-5 py-3.5 font-mono text-slate-300">{f.origin} → {f.dest}</td>
                  <td className="px-5 py-3.5 font-mono text-slate-100">{f.gate}</td>
                  <td className="px-5 py-3.5 text-slate-400">{f.aircraft}</td>
                  <td className="px-5 py-3.5 font-mono tabular-nums text-slate-300">{f.sched}</td>
                  <td className="px-5 py-3.5"><StatusBadge status={f.status} /></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
