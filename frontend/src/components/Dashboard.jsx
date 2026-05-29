import React from 'react'

export const Dashboard = () => {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100 px-4 py-8">
      <div className="mx-auto max-w-6xl space-y-8">
        <section className="rounded-[32px] border border-slate-700 bg-slate-900/90 p-8 shadow-2xl shadow-slate-950/40 backdrop-blur-xl">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.35em] text-cyan-300/80">Library Dashboard</p>
              <h1 className="mt-3 text-4xl font-semibold text-white">Your library at a glance</h1>
              <p className="mt-3 max-w-2xl text-slate-300">
                Manage books, keep track of collections, and discover new library insights from one modern dashboard.
              </p>
            </div>
            <div className="rounded-3xl bg-cyan-500/10 px-5 py-4 text-cyan-200 ring-1 ring-cyan-500/20">
              <p className="text-sm uppercase tracking-[0.3em] text-cyan-300">Open Hours</p>
              <p className="mt-2 text-2xl font-semibold">8:00 AM – 8:00 PM</p>
            </div>
          </div>
        </section>

        <section className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {[
            { label: 'Books', value: '1,250', color: 'from-sky-500 to-cyan-500' },
            { label: 'Authors', value: '320', color: 'from-emerald-500 to-teal-500' },
            { label: 'Genres', value: '24', color: 'from-violet-500 to-fuchsia-500' },
            { label: 'Available', value: '984', color: 'from-amber-500 to-orange-500' },
          ].map((item) => (
            <div key={item.label} className={`rounded-[28px] border border-slate-700 bg-slate-900/80 p-6 shadow-xl shadow-slate-950/20 ring-1 ring-slate-700/80`}>
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-sm uppercase tracking-[0.3em] text-slate-400">{item.label}</p>
                  <p className="mt-4 text-4xl font-semibold text-white">{item.value}</p>
                </div>
                <div className={`h-14 w-14 rounded-3xl bg-gradient-to-br ${item.color} shadow-lg shadow-slate-950/20`} />
              </div>
            </div>
          ))}
        </section>

        <section className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <article className="rounded-[32px] border border-slate-700 bg-slate-900/90 p-8 shadow-xl shadow-slate-950/20">
            <h2 className="text-2xl font-semibold text-white">Featured Collections</h2>
            <p className="mt-3 text-slate-300">Curated library collections that readers are enjoying right now.</p>
            <div className="mt-6 space-y-4">
              {[
                { title: 'Modern Fiction', subtitle: 'Latest novels, bestsellers, and emerging voices.' },
                { title: 'Classical Literature', subtitle: 'Timeless stories from world-renowned authors.' },
                { title: 'Science & Technology', subtitle: 'Practical guides and future thinking.' },
              ].map((item) => (
                <div key={item.title} className="rounded-3xl bg-slate-950/80 p-5 ring-1 ring-slate-700/70 hover:bg-slate-900 transition-colors">
                  <h3 className="text-xl font-semibold text-white">{item.title}</h3>
                  <p className="mt-2 text-slate-400">{item.subtitle}</p>
                </div>
              ))}
            </div>
          </article>

          <aside className="rounded-[32px] border border-slate-700 bg-slate-900/90 p-8 shadow-xl shadow-slate-950/20">
            <h2 className="text-2xl font-semibold text-white">Quick Actions</h2>
            <div className="mt-6 space-y-4">
              {[
                'Add new book',
                'Review pending requests',
                'Update library notices',
                'Track borrowed books',
              ].map((action) => (
                <button
                  key={action}
                  className="w-full rounded-3xl border border-slate-700 bg-slate-950/90 px-5 py-4 text-left text-slate-100 transition hover:border-cyan-400 hover:bg-slate-900"
                >
                  {action}
                </button>
              ))}
            </div>
          </aside>
        </section>
      </div>
    </main>
  )
}
