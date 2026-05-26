import { useEffect, useState } from "react"
import { updateBook } from "../api/BookAPI"


export const Update = ({selectedBook, onUpdate, onCancle}) => {

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

        useEffect(()=>{
            if (selectedBook) {
            setFormData({
                title : selectedBook.title || "",
                author: selectedBook.author|| '',
                genre : selectedBook.genre || ''
            })

            }
        },[selectedBook])
    
        // update form
        const handleUpdate = async (e) => {
            e.preventDefault()
            if(!selectedBook){
                return;
            }
            try {            
                // console.log(selectedBook.id, formData);
                
                await updateBook(selectedBook.id, formData)
                onCancle()
                onUpdate()
            } catch (error) {
                console.log(error);
                alert('Faild to Update data ')
                
            }
        }
        if(!selectedBook){
            return null;
        }
  return (
    <>
        <div className='my-10 w-full h-50 flex justify-center items-center'>
                <div className='border border-white rounded-2xl my-10 p-10 flex'>
                    <form className='grid grid-cols-3 gap-5 text-center' onSubmit={handleUpdate}>
                        <input type="text" placeholder='Title' name='title' value={formData.title} onChange={handleChenge} />
                        <input type="text" placeholder='Author' name='author' value={formData.author} onChange={handleChenge}/>
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
                        <button type="submit" className='border border-white rounded-2xl bg-yellow-600 font-medium hover:bg-yellow-800 active:bg-yellow-900 py-2 text-xl'>Update</button>             
                        <button type="submit" className='border border-white rounded-2xl bg-orange-600 font-medium hover:bg-orange-800 active:bg-orange-900 py-2 text-xl' onClick={onCancle}>Cancle</button>             
                    </form>
            </div>
        </div>
    </>
  )
}
