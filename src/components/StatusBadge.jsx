const MAP = {
  'On Time':      { color: 'text-signal-green border-signal-green/30 bg-signal-green/10', dot: 'bg-signal-green' },
  'Boarding':     { color: 'text-signal-blue border-signal-blue/30 bg-signal-blue/10',    dot: 'bg-signal-blue' },
  'Delayed':      { color: 'text-signal-red border-signal-red/30 bg-signal-red/10',       dot: 'bg-signal-red' },
  'On Duty':      { color: 'text-signal-green border-signal-green/30 bg-signal-green/10', dot: 'bg-signal-green' },
  'Off Duty':     { color: 'text-slate-400 border-ink-600 bg-ink-800',                    dot: 'bg-slate-500' },
  'Break':        { color: 'text-signal-amber border-signal-amber/30 bg-signal-amber/10', dot: 'bg-signal-amber' },
  'Done':         { color: 'text-signal-green border-signal-green/30 bg-signal-green/10', dot: 'bg-signal-green' },
  'In Progress':  { color: 'text-signal-amber border-signal-amber/30 bg-signal-amber/10', dot: 'bg-signal-amber' },
  'Pending':      { color: 'text-slate-400 border-ink-600 bg-ink-800',                    dot: 'bg-slate-500' },
  'In Use':       { color: 'text-signal-blue border-signal-blue/30 bg-signal-blue/10',    dot: 'bg-signal-blue' },
  'Available':    { color: 'text-signal-green border-signal-green/30 bg-signal-green/10', dot: 'bg-signal-green' },
  'Maintenance':  { color: 'text-signal-red border-signal-red/30 bg-signal-red/10',       dot: 'bg-signal-red' },
}

export default function StatusBadge({ status }) {
  const m = MAP[status] || { color: 'text-slate-400 border-ink-600 bg-ink-800', dot: 'bg-slate-500' }
  return (
    <span className={`chip ${m.color}`} data-testid={`status-${status.toLowerCase().replace(/\s+/g, '-')}`}>
      <span className={`w-1.5 h-1.5 rounded-full ${m.dot}`} />
      {status}
    </span>
  )
}
