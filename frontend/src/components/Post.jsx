import React, { useState } from 'react'
import { postBook } from '../api/BookAPI'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export const Post = ({onStuAdd}) => {

    const [formData, setFormData] = useState({
        title: '',
        author: '',
        genre: '',

    })

    const handleChenge = (e) => {
        setFormData({
            ...formData, [e.target.name]: e.target.value
        })
    }

    // submit form
    const handleSubmit = async (e) => {
        e.preventDefault()
        try {            
            await postBook(formData)
            setFormData({
                title: '',
                author: '',
                genre: '',
            })

            if (onStuAdd) {
                onStuAdd ()
            }
        } catch (error) {
            console.log(error);
            
        }
    }

  return (
    <>
        <div className='my-10 w-full h-50 flex justify-center items-center'>
                <div className='border border-white rounded-2xl my-10 p-10 flex'>
                    <form className='grid grid-cols-2 gap-5 text-center' onSubmit={handleSubmit}>
                        <input type="text" placeholder='Title' name='title' value={formData.title} onChange={handleChenge} className='size-10 w-full'/>
                        <input type="text" placeholder='Author' name='author' value={formData.author} onChange={handleChenge} className='size-10 w-full'/>
                        <select name="genre" id="" onChange={handleChenge} value={formData.genre}>
                            <option className=' bg-black' value="Ficton">Fiction</option>
                            <option className='bg-black' value="Non-Fiction">Non-Fiction</option>
                            <option className='bg-black' value="Science">Science</option>
                            <option className='bg-black' value="History">History</option>
                            <option className='bg-black' value="Technology">Technology</option>
                            <option className='bg-black' value="Biography">Biography</option>
                            <option className='bg-black' value="Education">Education</option>
                            <option className='bg-black' value="Comics">Comics</option>
                        </select>
                        <button type="submit" className='border border-white rounded-2xl bg-green-600 font-medium hover:bg-green-800 active:bg-green-900 py-2 text-xl'>Save</button>             
                    </form>
            </div>
        </div>
    </>
  )
}
