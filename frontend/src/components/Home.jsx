import React, { useEffect, useState } from 'react'
import { deleteBook, listBook } from '../api/BookAPI'
import { Post } from './Post'
import { Update } from './Update'

export const Home = () => {
  const [getList, setData] = useState([])
  const [selectedBook, setSelectedBook] = useState(null)

  const getAllData = async () => {
    try {
      const res = await listBook()
      setData(res.data)
    } catch (error) {
      console.log(error.data)
    }
  }

  useEffect(() => {
    getAllData()
  }, [])

  const handleDeleteBook = async (id) => {
    await deleteBook(id)
    alert('Book deleted!')

    const updateBook = getList.filter((current) => current.id !== id)
    setData(updateBook)
  }

  const handleEditClick = (book) => {
    setSelectedBook(book)
  }

  const uniqueAuthors = [...new Set(getList.map((item) => item.author))].length
  const uniqueGenres = [...new Set(getList.map((item) => item.genre))].length

  return (
    <main className="min-h-screen bg-slate-950 text-slate-100 px-4 py-8">
      <div className="mx-auto max-w-7xl space-y-8">
        <section className="rounded-[32px] border border-slate-700 bg-slate-900/90 p-8 shadow-2xl shadow-slate-950/40 backdrop-blur-xl">
          <p className="text-sm uppercase tracking-[0.35em] text-cyan-300/80">Library Inventory</p>
          <h1 className="mt-3 text-4xl font-semibold text-white">Manage your collection</h1>
          <p className="mt-4 max-w-3xl text-slate-300 leading-8">
            Add, edit, and review books using the library dashboard. The list below gives you a clear overview of available titles, authors, and genres.
          </p>
        </section>

        <section className="grid gap-6 xl:grid-cols-[1.5fr_0.9fr]">
          <div className="space-y-6">
            <div className="rounded-[32px] border border-slate-700 bg-slate-900/90 p-6 shadow-xl shadow-slate-950/20">
              <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                <div>
                  <h2 className="text-2xl font-semibold text-white">Book List</h2>
                  <p className="mt-2 text-slate-400">Showing {getList.length} books in the library.</p>
                </div>
                <div className="rounded-3xl bg-cyan-500/10 px-4 py-3 text-cyan-200 ring-1 ring-cyan-500/20">
                  <p className="text-sm uppercase tracking-[0.3em] text-cyan-300">Quick stats</p>
                  <p className="mt-2 text-lg font-semibold">{uniqueAuthors} authors · {uniqueGenres} genres</p>
                </div>
              </div>

              <div className="mt-6 overflow-hidden rounded-[28px] border border-slate-700 bg-slate-950/80">
                <div className="overflow-x-auto">
                  <table className="min-w-full border-separate border-spacing-0 text-left">
                    <thead className="bg-slate-900 text-slate-300">
                      <tr>
                        <th className="border-b border-slate-700 px-4 py-3">#</th>
                        <th className="border-b border-slate-700 px-4 py-3">Title</th>
                        <th className="border-b border-slate-700 px-4 py-3">Author</th>
                        <th className="border-b border-slate-700 px-4 py-3">Genre</th>
                        <th className="border-b border-slate-700 px-4 py-3">Year</th>
                        <th className="border-b border-slate-700 px-4 py-3">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {getList.map((item, pk) => (
                        <tr key={item.id} className="border-b border-slate-800 hover:bg-slate-900/80">
                          <td className="px-4 py-3 text-slate-300">{pk + 1}</td>
                          <td className="px-4 py-3 text-slate-100">{item.title}</td>
                          <td className="px-4 py-3 text-slate-300">{item.author}</td>
                          <td className="px-4 py-3 text-slate-300">{item.genre}</td>
                          <td className="px-4 py-3 text-slate-300">{item.publication_year}</td>
                          <td className="px-4 py-3 text-slate-300 space-x-2">
                            <button
                              className="rounded-3xl border border-cyan-500 bg-cyan-500/10 px-4 py-2 text-sm text-cyan-200 transition hover:bg-cyan-500/20"
                              onClick={() => handleEditClick(item)}
                            >
                              Edit
                            </button>
                            <button
                              className="rounded-3xl border border-rose-500 bg-rose-500/10 px-4 py-2 text-sm text-rose-200 transition hover:bg-rose-500/20"
                              onClick={() => handleDeleteBook(item.id)}
                            >
                              Delete
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              <div className="rounded-[32px] border border-slate-700 bg-slate-900/90 p-6 shadow-xl shadow-slate-950/20">
                <p className="text-sm uppercase tracking-[0.35em] text-slate-400">Total books</p>
                <p className="mt-4 text-4xl font-semibold text-white">{getList.length}</p>
              </div>
              <div className="rounded-[32px] border border-slate-700 bg-slate-900/90 p-6 shadow-xl shadow-slate-950/20">
                <p className="text-sm uppercase tracking-[0.35em] text-slate-400">Unique authors</p>
                <p className="mt-4 text-4xl font-semibold text-white">{uniqueAuthors}</p>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="rounded-[32px] border border-slate-700 bg-slate-900/90 p-6 shadow-xl shadow-slate-950/20">
              <h2 className="text-2xl font-semibold text-white">Add a new book</h2>
              <p className="mt-2 text-slate-400">Use the form below to add new titles to your library.</p>
              <div className="mt-5">
                <Post onStuAdd={getAllData} />
              </div>
            </div>

            <div className="rounded-[32px] border border-slate-700 bg-slate-900/90 p-6 shadow-xl shadow-slate-950/20">
              <h2 className="text-2xl font-semibold text-white">Update book details</h2>
              <p className="mt-2 text-slate-400">Select a book from the list to edit its information.</p>
              <div className="mt-5">
                <Update
                  selectedBook={selectedBook}
                  onUpdate={getAllData}
                  onCancle={() => setSelectedBook(null)}
                />
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}
