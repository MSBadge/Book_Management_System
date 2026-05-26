import React, { useEffect, useState } from 'react'
import { deleteBook, listBook } from '../api/BookAPI'
import { Post } from './Post'
import { Update } from './Update'

export const Home = () => {

  // list data
  const [getList, setData] = useState([])
  const [selectedBook, setSelectedBook] = useState(null)


  const getAllData = async () => {
    try {
      const res = await listBook()
      setData(res.data)
    } catch (error) {
      console.log(error.data);
      
    }
  }

  useEffect(()=>{
    getAllData()
  },[])


  //delete book
  const handleDeleteBook = async (id) => {
    await deleteBook(id)
    alert('Student Delete!')

    const updateBook = getList.filter((current) => {
      return current.id !== id
    })
    setData(updateBook)
  }

  const handleEditClick = (book) => {
    setSelectedBook(book)
  }


  return (
    <>
      <Post onStuAdd={getAllData}/>
      <Update 
        selectedBook={selectedBook}
        onUpdate={getAllData}
        onCancle={() => setSelectedBook(null)}
      />

      <div className='w-full h-screen'>
        <div className='m-4 p-2'>
          <div className='flex justify-center'>
            <table>
              <caption>Book List</caption>
              <thead>
                <tr>
                    <th className='border border-gray-300 px-4 py-2'>Sr. No</th>
                    <th className='border border-gray-300 px-4 py-2'>Title</th>
                    <th className='border border-gray-300 px-4 py-2'>Author</th>
                    <th className='border border-gray-300 px-4 py-2'>Genre</th>
                    <th className='border border-gray-300 px-4 py-2'>Publication Year</th>
                    <th className='border border-gray-300 px-4 py-2'>Edit / Delete</th>
                </tr>
              </thead>
              <tbody>
                {getList.map((item, pk) => (
                  <tr key={item.id}>
                    <td className='border border-gray-300 px-4 py-2'>{pk + 1}</td>
                    <td className='border border-gray-300 px-4 py-2 text-justify'>{item.title}</td>
                    <td className='border border-gray-300 px-4 py-2 text-justify'>{item.author}</td>
                    <td className='border border-gray-300 px-4 py-2 text-justify'>{item.genre}</td>
                    <td className='border border-gray-300 px-4 py-2 text-justify'>{item.publication_year}</td>
                    <td className='border border-gray-300 px-4 py-2 text-justify'>
                      <button className='border border-green-500 bg-green-400 m-1 p-2 hover:bg-green-500 active:bg-green-800 rounded-4xl' onClick={()=>{handleEditClick(item)}} >Edit</button>
                      <button className='border border-red-500 bg-red-400 m-1 p-2 hover:bg-red-500 active:bg-red-800 rounded-4xl'
                      type='submit'
                      onClick={()=>{handleDeleteBook(item.id)}}
                      >Delete</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  )
}
