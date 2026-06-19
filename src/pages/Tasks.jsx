import { useState } from 'react'
import PageHeader from '../components/PageHeader.jsx'
import StatusBadge from '../components/StatusBadge.jsx'
import { TASKS } from '../data/mockData.js'

const FILTERS = ['All', 'Pending', 'In Progress', 'Done']

const PRIORITY = {
  High:   'text-signal-red bg-signal-red/10 border-signal-red/30',
  Medium: 'text-signal-amber bg-signal-amber/10 border-signal-amber/30',
  Low:    'text-slate-400 bg-ink-800 border-ink-600',
}

export default function Tasks() {
  const [filter, setFilter] = useState('All')
  const list = filter === 'All' ? TASKS : TASKS.filter(t => t.status === filter)

  return (
    <div>
      <PageHeader
        eyebrow="Operations"
        title="Turnaround Tasks"
        description="Track every step of the aircraft turnaround across active flights."
        actions={<button className="btn-primary" data-testid="new-task-btn">+ New Task</button>}
      />

      <div className="flex flex-wrap items-center gap-2 mb-5">
        {FILTERS.map(f => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            data-testid={`task-filter-${f.toLowerCase().replace(/\s+/g, '-')}`}
            className={`px-3.5 py-1.5 rounded-lg text-xs font-mono transition-colors ${
              filter === f
                ? 'bg-signal-amber text-ink-950 font-semibold'
                : 'bg-ink-800/60 text-slate-400 hover:text-slate-100 border border-ink-700/60'
            }`}
          >
            {f}
          </button>
        ))}
        <span className="ml-auto label-tiny">{list.length} tasks</span>
      </div>

      <div className="panel overflow-hidden animate-slide-up">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="text-left label-tiny border-b border-ink-700/60">
                <th className="px-5 py-3">Task ID</th>
                <th className="px-5 py-3">Flight</th>
                <th className="px-5 py-3">Task</th>
                <th className="px-5 py-3">Assignee</th>
                <th className="px-5 py-3">Priority</th>
                <th className="px-5 py-3">ETA</th>
                <th className="px-5 py-3">Status</th>
              </tr>
            </thead>
            <tbody>
              {list.map(t => (
                <tr key={t.id} className="border-b border-ink-700/30 last:border-0 hover:bg-ink-800/30 transition-colors">
                  <td className="px-5 py-3.5 font-mono text-xs text-slate-500">{t.id}</td>
                  <td className="px-5 py-3.5 font-mono font-semibold text-slate-100">{t.flight}</td>
                  <td className="px-5 py-3.5 text-slate-200">{t.task}</td>
                  <td className="px-5 py-3.5 text-slate-400">{t.assignee}</td>
                  <td className="px-5 py-3.5">
                    <span className={`chip ${PRIORITY[t.priority]}`}>{t.priority}</span>
                  </td>
                  <td className="px-5 py-3.5 font-mono tabular-nums text-slate-300">{t.eta}</td>
                  <td className="px-5 py-3.5"><StatusBadge status={t.status} /></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
