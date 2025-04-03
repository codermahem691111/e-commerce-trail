"use client"
import React from 'react'
import Image from 'next/image'
import Fly from '../assets/flyer3.webp'
function Flyer() {
  return (
    <div className='container mx-auto px-4 py-8'>
         <Image className='w-full h-[230px]' src={Fly} alt="Promotional flyer banner" />   
    </div>
  )
}

export default Flyer
