"use client"
import React from 'react'
import Image from 'next/image'
import Fly from '../assets/flyerch.webp'
function Flyer() {
  return (
    <div className='container mx-auto px-4 py-8'>
         <Image className='w-full h-[130px]' src={Fly}></Image>   
    </div>
  )
}

export default Flyer
