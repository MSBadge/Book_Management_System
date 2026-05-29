import React from 'react'

export const Contact = () => {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100 px-4 py-8">
      <div className="mx-auto max-w-5xl space-y-10">
        <section className="rounded-[32px] border border-slate-700 bg-slate-900/90 p-8 shadow-2xl shadow-slate-950/40 backdrop-blur-xl">
          <p className="text-sm uppercase tracking-[0.35em] text-cyan-300/80">Get in touch</p>
          <h1 className="mt-3 text-4xl font-semibold text-white">Contact the library team</h1>
          <p className="mt-4 max-w-2xl text-slate-300 leading-8">
            Have a question about a book, a request for a new title, or need help with your account? Send us a message and we’ll reply as soon as possible.
          </p>
        </section>

        <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="rounded-[32px] border border-slate-700 bg-slate-900/90 p-8 shadow-xl shadow-slate-950/20">
            <h2 className="text-2xl font-semibold text-white">Library contact info</h2>
            <div className="mt-6 space-y-5 text-slate-300">
              <div>
                <p className="font-medium text-slate-100">Address</p>
                <p>123 Book Lane, Reading Town, Library State</p>
              </div>
              <div>
                <p className="font-medium text-slate-100">Phone</p>
                <p>+1 (555) 123-4567</p>
              </div>
              <div>
                <p className="font-medium text-slate-100">Email</p>
                <p>hello@library.example.com</p>
              </div>
              <div>
                <p className="font-medium text-slate-100">Open hours</p>
                <p>Mon - Sat: 8:00 AM - 8:00 PM</p>
              </div>
            </div>
          </div>

          <form className="rounded-[32px] border border-slate-700 bg-slate-900/90 p-8 shadow-xl shadow-slate-950/20 space-y-5">
            <div>
              <label className="mb-2 block text-sm font-medium text-slate-300">Name</label>
              <input className="w-full rounded-3xl border border-slate-700 bg-slate-950 px-4 py-3 text-slate-100 outline-none ring-1 ring-transparent transition focus:border-cyan-400 focus:ring-cyan-400/40" placeholder="Your name" />
            </div>
            <div>
              <label className="mb-2 block text-sm font-medium text-slate-300">Email</label>
              <input className="w-full rounded-3xl border border-slate-700 bg-slate-950 px-4 py-3 text-slate-100 outline-none ring-1 ring-transparent transition focus:border-cyan-400 focus:ring-cyan-400/40" placeholder="Your email" />
            </div>
            <div>
              <label className="mb-2 block text-sm font-medium text-slate-300">Message</label>
              <textarea rows="5" className="w-full rounded-3xl border border-slate-700 bg-slate-950 px-4 py-3 text-slate-100 outline-none ring-1 ring-transparent transition focus:border-cyan-400 focus:ring-cyan-400/40" placeholder="How can we help you?" />
            </div>
            <button type="submit" className="w-full rounded-3xl bg-cyan-500 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-400">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </main>
  )
}
