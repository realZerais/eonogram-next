import React from 'react'
import Link from 'next/link'


export const Navigation = () => {
  return (
    <nav className='flex items-center justify-between w-full h-[10vh] border-b-1 p-3 px-7 sticky top-0 z-50  backdrop-blur'>
      <ul className=''>
        <Link href='/'><img src="/eonogram_logo.svg" alt="Eonogram Logo" /></Link>
      </ul>
      <ul className='flex gap-6'>
        <Link href='/home' className='border border-primary rounded-lg hover:bg-primary hover:border-accent hover:text-secondary px-7 py-2'>Home</Link>
        {/* <Link href='/posts/create' className='border border-accent rounded-lg hover:bg-accent hover:border-primary hover:text-primary px-7 py-2'>Create Post</Link> */}
      </ul>
    </nav>
  )
}
