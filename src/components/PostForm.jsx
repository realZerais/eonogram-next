import React from 'react'
import { createPost } from '@/app/actions/actions'

const PostForm = () => {
    return (

        <form action={createPost} >
            <div className=' rounded-md flex flex-col gap-4 mt-5'>
                <input type="text" placeholder='Title' name="title" className='border rounded-sm p-4'/>
                <textarea placeholder='Content' name="content" className='border rounded-sm p-4 h-[25vh]'></textarea>
            </div>
            
            <div className='flex justify-end gap-5'>
                
                <button className='bg-secondary py-2 px-5 mt-3 border rounded-md font-semibold hover:opacity-70'>Save Draft</button>
                <button type='submit' className='bg-secondary py-2 px-5 mt-3 border rounded-md font-semibold hover:opacity-70'>Post</button>
            </div>


        </form>
  

    )
}

export default PostForm;