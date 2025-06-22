'use client'

import { Typewriter as SimpleTypewriter } from 'react-simple-typewriter'

export const Typewriter = () => {
  return (
    <h1 className="font-semibold text-5xl sm:text-6xl md:text-7xl lg:text-8xl">
      <SimpleTypewriter words={['config']} loop={1} typeSpeed={150} delaySpeed={5000} />
      <span className="text-accent">.json</span>
    </h1>
  )
}
