import { TrendingUp, TrendingDown } from 'lucide-react'

export default function StatCard({ label, value, delta, icon: Icon, accent = 'amber' }) {
  const accentMap = {
    amber: 'text-signal-amber bg-signal-amber/10 border-signal-amber/30',
    green: 'text-signal-green bg-signal-green/10 border-signal-green/30',
    blue:  'text-signal-blue bg-signal-blue/10 border-signal-blue/30',
    cyan:  'text-signal-cyan bg-signal-cyan/10 border-signal-cyan/30',
  }
  const up = delta && delta.startsWith('+')

  return (
    <div className="panel panel-hover p-5 animate-slide-up">
      <div className="flex items-start justify-between">
        <div>
          <div className="label-tiny">{label}</div>
          <div className="font-mono font-bold text-3xl text-slate-100 mt-2 tabular-nums">{value}</div>
        </div>
        <div className={`w-10 h-10 rounded-lg border flex items-center justify-center ${accentMap[accent]}`}>
          <Icon size={18} strokeWidth={1.75} />
        </div>
      </div>
      {delta && (
        <div className={`flex items-center gap-1.5 mt-3 text-xs font-mono ${up ? 'text-signal-green' : 'text-signal-red'}`}>
          {up ? <TrendingUp size={13} /> : <TrendingDown size={13} />}
          <span>{delta}</span>
          <span className="text-slate-500">vs last shift</span>
        </div>
      )}
    </div>
  )
}
