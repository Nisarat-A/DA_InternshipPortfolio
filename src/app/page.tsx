import Image from 'next/image'
import img_noey from './images/img1.jpg'
import React from 'react'
import InterestCard from './components/InterestCard'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        <section className="bg-brand-accent text-white py-16">
          <div className="container mx-auto flex items-start justify-between p-24">
            <div className="w-2/3">
              <h1 className="mb-1 font-mono text-4xl md:text-6xl">
                <span className="uppercase">
                  hi, I&apos;m <br className="block md:hidden" />
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
            <div className="w-1/3 flex justify-center">
              <Image
                src={img_noey}
                alt="Picture of the author"
                layout="responsive"
                width={375}
                height={667}
                className="mx-auto rounded-full"
              />
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
