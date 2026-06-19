import PageHeader from '../components/PageHeader.jsx'
import { CREW, SHIFTS, DAYS } from '../data/mockData.js'

// deterministic pseudo-random for demo
function cellState(crewIdx, dayIdx, shiftIdx) {
  const x = (crewIdx * 7 + dayIdx * 3 + shiftIdx) % 5
  if (x === 0) return 'off'
  if (x === 1) return 'standby'
  return 'on'
}

const STATE_STYLE = {
  on:      { color: 'bg-signal-amber/20 border-signal-amber/40 text-signal-amber',  label: '●' },
  standby: { color: 'bg-signal-blue/15 border-signal-blue/30 text-signal-blue',     label: '◐' },
  off:     { color: 'bg-ink-800/60 border-ink-700/60 text-slate-600',               label: '○' },
}

export default function Schedule() {
  const week = CREW.slice(0, 7)

  return (
    <div>
      <PageHeader
        eyebrow="Workforce Planning"
        title="Shift Schedule"
        description="Week-at-a-glance crew assignments across operating shifts."
        actions={
          <>
            <button className="btn-ghost" data-testid="prev-week">←</button>
            <span className="font-mono text-xs text-slate-300 px-2">Feb 16 – Feb 22, 2026</span>
            <button className="btn-ghost" data-testid="next-week">→</button>
            <button className="btn-primary ml-2" data-testid="publish-schedule">Publish</button>
          </>
        }
      />

      <div className="flex items-center gap-5 mb-4 text-xs font-mono">
        {Object.entries(STATE_STYLE).map(([k, v]) => (
          <span key={k} className="flex items-center gap-2 text-slate-400">
            <span className={`w-3 h-3 rounded-sm border ${v.color}`} />
            <span className="capitalize">{k}</span>
          </span>
        ))}
      </div>

      <div className="panel overflow-x-auto animate-slide-up">
        <table className="w-full text-xs">
          <thead>
            <tr className="border-b border-ink-700/60">
              <th className="sticky left-0 bg-ink-900/90 backdrop-blur-sm px-4 py-3 text-left label-tiny min-w-[180px]">Crew</th>
              {DAYS.map(d => (
                <th key={d} colSpan={SHIFTS.length / 2} className="label-tiny py-3 text-center border-l border-ink-700/40">{d}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {week.map((c, ci) => (
              <tr key={c.id} className="border-b border-ink-700/30 last:border-0 hover:bg-ink-800/20">
                <td className="sticky left-0 bg-ink-900/90 backdrop-blur-sm px-4 py-2">
                  <div className="text-sm font-medium text-slate-100">{c.name}</div>
                  <div className="text-[10px] text-slate-500">{c.role}</div>
                </td>
                {DAYS.map((d, di) => (
                  SHIFTS.slice(0, 4).map((s, si) => {
                    const state = cellState(ci, di, si)
                    return (
                      <td key={d + s} className={`p-1 text-center border-l border-ink-700/30`}>
                        <div className={`mx-auto w-9 h-9 flex items-center justify-center rounded border ${STATE_STYLE[state].color} font-mono`}>
                          {STATE_STYLE[state].label}
                        </div>
                      </td>
                    )
                  })
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
