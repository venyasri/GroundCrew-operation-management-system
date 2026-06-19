export default function PageHeader({ eyebrow, title, description, actions }) {
  return (
    <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-7 animate-fade-in">
      <div>
        {eyebrow && <div className="label-tiny mb-2">{eyebrow}</div>}
        <h1 className="font-mono font-bold text-3xl md:text-4xl text-slate-100 tracking-tight">
          {title}
        </h1>
        {description && <p className="text-sm text-slate-400 mt-2 max-w-2xl">{description}</p>}
      </div>
      {actions && <div className="flex items-center gap-2">{actions}</div>}
    </div>
  )
}
