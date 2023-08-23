import Image from 'next/image'
import img_noey from './images/img1.jpg'
import React from 'react'


export default function Home() {
  return (
    
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="mb-1 font-mono text-4xl text-gray-100 md:text-6xl">
        hi, I&apos;m <br className="block md:hidden" />
        <span className="inline-flex h-20 pt-2 overflow-x-hidden animate-type group-hover:animate-type-reverse whitespace-nowrap text-brand-accent will-change-transform text-yellow-500 text-lg md:text-6xl md:leading-none md:h">
          Nisarat 👋
        </span>
        <span className="box-border inline-block w-1 h-10 ml-2 -mb-2 bg-white md:-mb-4 md:h-16 animate-cursor will-change-transform"></span>
      </h1>
      <div className="text-xl font-semibold md:text-3xl mt-4">
        data by it self is useless . data is only useful if you apply it .
      </div>

      <div className="flex flex-col items-center justify-center mt-8">
        <Image
          src={img_noey}
          alt="Picture of the author"
          layout="responsive"
          width={375} // Set the desired width for your smaller image
          height={667} // Set the corresponding height to maintain aspect ratio
          className="mx-auto rounded-full sm:w-1/2 md:w-3/4 lg:w-full"
        />
      </div>
    </main>
  )
}
