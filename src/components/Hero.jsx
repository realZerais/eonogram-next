import React from 'react'
import Link from 'next/link'


export const Hero = () => {
  return (

    <section className="bg-[#F9F9F7] text-[#1C1C1E] py-10 px-6 md:px-12">
        <div className="max-w-5xl mx-auto text-center">

            <div className="flex justify-center mb-6">
            <img src="/eonogram_logo.svg" alt="Eonogram Hourglass Logo"  />
        </div>


        <h1 className="text-4xl md:text-6xl  font-sans  font-semibold tracking-tight">
            Timeless Moments, <br className="hidden md:inline" />
            Shared Across Eons
        </h1>


        <p className="mt-6 text-lg md:text-xl text-[#4B4B4B] max-w-2xl mx-auto font-light">
            Eonogram is not just another social media app. It’s where your stories are preserved,
            not for likes — but for legacy.
        </p>


        <div className="mt-10 flex flex-col md:flex-row gap-4 justify-center">
            <Link href="/home" className="px-6 py-3 rounded-2xl border bg-primary opacity-90 text-white text-base font-medium hover:border-accent transition">
                Browse Posts
            </Link>
            <Link href="/" className="px-6 py-3 rounded-2xl border text-base font-medium hover:bg-accent transition">
                Learn More
            </Link>
            </div>
        </div>
    </section>

  )
}


