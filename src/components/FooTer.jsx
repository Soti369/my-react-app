import React from 'react'

import { useTypewriter } from 'react-simple-typewriter';



function FooTer () {

const [typeEffect] = useTypewriter({
    words: ['  Inner Peace ☮️ ?', '  Power Of Aura 🫴 ?', '  Chi & Magnetic Field 🧲 ?'],
    loop: {},
    typeSpeed: 77,
    deleteSpeed: 60
  })


  return (
    <div className='h-9 w-1/3 bg-gray-700 border-2 border-white fixed bottom-3 rounded-t-2xl'>
    
      <h1 className='h-9 bg-gray-500 text-center font-mono text-violet-950 rounded-t-2xl'>
        Can you Control Your
        <span className='text-white'>{typeEffect}</span>

      </h1>
      
    </div>
  );
}






export default FooTer