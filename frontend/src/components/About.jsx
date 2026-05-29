import React from 'react'

export const About = () => {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100 px-4 py-8">
      <div className="mx-auto max-w-5xl space-y-10">
        <section className="rounded-[32px] border border-slate-700 bg-slate-900/90 p-8 shadow-2xl shadow-slate-950/40 backdrop-blur-xl">
          <p className="text-sm uppercase tracking-[0.35em] text-cyan-300/80">About the Library</p>
          <h1 className="mt-3 text-4xl font-semibold text-white">A modern library experience for every reader</h1>
          <p className="mt-4 text-slate-300 leading-8">
            Our library blends classic reading comfort with digital tools designed to help students, researchers, and book lovers explore every collection easily.
            From curated book lists to community resources, we build a warm and intuitive space for learning.
          </p>
        </section>

        <section className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-[32px] border border-slate-700 bg-slate-900/90 p-8 shadow-xl shadow-slate-950/20">
            <h2 className="text-2xl font-semibold text-white">Our mission</h2>
            <p className="mt-4 text-slate-300 leading-7">
              To create a library that feels welcoming, organized, and insightful. We support readers in discovering books easily, staying informed, and connecting with stories that matter.
            </p>
            <ul className="mt-6 space-y-4 text-slate-300">
              <li className="flex items-start gap-3">
                <span className="mt-1 inline-flex h-2.5 w-2.5 rounded-full bg-cyan-400" />
                Curate quality collections for every age and interest.
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 inline-flex h-2.5 w-2.5 rounded-full bg-cyan-400" />
                Keep tracking, borrowing, and returning simple.
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 inline-flex h-2.5 w-2.5 rounded-full bg-cyan-400" />
                Support learning through recommended reading paths.
              </li>
            </ul>
          </div>

          <div className="rounded-[32px] border border-slate-700 bg-slate-900/90 p-8 shadow-xl shadow-slate-950/20">
            <h2 className="text-2xl font-semibold text-white">What we offer</h2>
            <div className="mt-6 space-y-5">
              {[
                { title: 'Book discovery', body: 'Search and browse genres, authors, and recommendations in one place.' },
                { title: 'Reading progress', body: 'Keep track of what you’ve read and what’s reserved next.' },
                { title: 'Community space', body: 'Find library events, reading groups, and local news.' },
              ].map((item) => (
                <div key={item.title} className="rounded-3xl bg-slate-950/80 p-5 ring-1 ring-slate-700/70">
                  <h3 className="text-xl font-semibold text-white">{item.title}</h3>
                  <p className="mt-2 text-slate-400">{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}
