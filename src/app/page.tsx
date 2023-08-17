import Image from 'next/image'
import img_noey from './images/img1.jpg'
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="mb-2 font-mono text-4xl text-gray-100 md:text-6xl">
        hi, I&apos;m <br className="block md:hidden" />
        <span className="relative">
          <span className="h-20 pt-2 overflow-x-hidden whitespace-nowrap text-brand-accent">
            vanntile <span className="text-3xl md:text-5xl">👋</span>
          </span>
          <span className="{`${styles.cursor} absolute -bottom-0 left-0 -top-1 inline-block bg-gray-900 w-full animate-type will-change`}"></span>
        </span>
      </h1>

      <div className="flex flex-col items-center justify-center">
        <Image
          src={img_noey}
          alt="Picture of the author"
          layout="responsive"
          width={375} // Set the desired width for your smaller image
          height={667} // Set the corresponding height to maintain aspect ratio
          className="mx-auto rounded-full sm:w-1/2 md:w-3/4 lg:w-full space-x-4"
        />
        <h1 className="text-4xl font-bold mt-8">Nisarat-A</h1>
        <p className="text-xl mt-4">Data girl</p>
      </div>
    </main>
  )
}
