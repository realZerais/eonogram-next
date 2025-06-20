import React from "react"

export const Post = ({post})=>{
    return(

        <section className='h-full my-5 p-5 border rounded-md bg-secondary'>
        
            <h1 className="font-semibold text-2xl">{post.title} </h1>
            <p>{post.content}</p>
    
        </section>
          
    )

}




