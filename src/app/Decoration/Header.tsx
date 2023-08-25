import React from 'react'
import Head from 'next/head'
import '../CSS/Header.css'

const YellowHeader: React.FC = () => {
  return (
    <header>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <div className="container mx-auto my-2">
        <h1 className="text-2xl font- ">Profile </h1>
      </div>
     
    </header>
  )
}

export default YellowHeader
