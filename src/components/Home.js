import React from 'react'
import image from '../webdev.jpg'

const Home = () => {
  return (
    <main>
      <div className="homepage min-h-screen relative">
        <img
          src={image}
          alt="Web Development"
          className="absolute object-cover w-full min-h-screen"
        />
        <section className="relative flex justify-center min-h-screen pt-12 lg:pt-64 px-8">
          <h1 className="text-6xl text-green-100 font-light leading-none lg:leading-snug home-name">
            Hi. I'm Abbas Ali.
          </h1>
        </section>
      </div>
    </main>
  )
}

export default Home
