import React from 'react'

const VideoBackground: React.FC = () => {
  console.log('VideoBackground component is rendered') // Log when the component is rendered

  return (
    <section className="bg-brand-accent text-white py-16">
      <video
        className="video-bg"
        autoPlay
        loop
        muted
        playsInline
        src="./src/app/images/f1.mp4" // Path to your video file
      ></video>
      <div className="container mx-auto flex items-start p-24">
        {/* Your content (text and image) goes here */}
      </div>
    </section>
  )
}

export default VideoBackground
