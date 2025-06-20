import React from "react"

export const Post = ({post})=>{
    return(

        <div className='h-full my-5 p-5 border rounded-md'>
        
            <h1 className="font-bold">{post.title} </h1>
            <p>{post.content}</p>
    
        </div>
          
    )

}




