import Image from 'next/image'
import img_noey from './images/img1.jpg'

import React from 'react'

import AboutMe from './components/AboutMe'
import InterestCard from './components/InterestCard'
import './globals.css'

export default function Home() {
  console.log('Home component is mounted')
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        <section className="bg-brand-accent text-white py-16">
          
          <div className="container mx-auto flex items-start p-24">
            <div className=" pr-8 mt-20 md:mt-0">
              <h1 className="mb-3 font-mono text-4xl md:text-6xl pl-4">
                <span className="uppercase">
                  I&apos;m <br className="block md:hidden" />
                  <span className="inline-flex h-20 pt-2 overflow-x-hidden animate-type group-hover:animate-type-reverse whitespace-nowrap text-yellow-500 text-lg md:text-6xl md:leading-none md:h">
                    Nisarat 👋
                  </span>
                </span>
              </h1>
              <div className="text-xl font-semibold md:text-3xl mt-4">
                <span className="uppercase">
                  data by itself is useless. data is only useful if you apply
                  it.
                </span>
              </div>
            </div>
          </div>
        </section>
        <section className="py-16">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold mb-8 uppercase">
              My Interest Areas
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <InterestCard
                title="Financial Markets"
                description="I enjoy studying financial markets and analyzing trends to make informed decisions."
              />
              <InterestCard
                title="Data-Driven Decisions"
                description="I believe in the power of data to drive strategic decisions in various domains."
              />
              <InterestCard
                title="Economic Analysis"
                description="Understanding economic factors helps me interpret data and its implications."
              />
              {/* Add more InterestCard components for each interest */}
            </div>
          </div>
        </section>
        {/* More content and components */}
      </div>
    </main>
  )
}
