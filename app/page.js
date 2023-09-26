'use client'

import Image from 'next/image'

export default function Home() {
  return (
    <div className="App overflow-hidden">
      <header className="App-header">
        <img src={'speedhero.png'} className="App-logo" alt="logo" />
      </header>
      <div className='bg-gray-500 w-full'>
        <div className='flex flex-col w-full mx-auto'>
        <div>
        <h1 className='text-[70px] w-full text-left mt-[50px] ml-[20px]'>T-Shirts</h1>
        </div>
          <div className='flex justify-center gap-[60px] mt-[50px]'>
          <img src='fer2.jpg' className='w-1/3'/>
          <img src='fer.jpg' className='w-1/3'/>
          </div>
          <div>
            <br/>
            <h1 className='flex justify-center font-bold text-white'>Ferrari 458 Italia</h1>
            <h1 className='flex justify-center font-bold text-white'>T shirt</h1>
            <h1 className='flex justify-center font-bold text-white'>$25 USD</h1>
            <h1 className='flex justify-center font-bold text-white'>Colors: available in black and White</h1>
          </div>
        </div>
      </div>
      <div className='bg-gray-500 w-full'>
        <div className='flex flex-col w-full mx-auto'>
          <div className='flex justify-center gap-[60px] mt-[160px]'>
          <img src='lam.jpg' className='w-1/3'/>
          <img src='lam2.jpg' className='w-1/3'/>
          </div>
          <div>
            <br></br>
            <h1 className='flex justify-center font-bold text-white'>Lamborghini Aventador</h1>
            <h1 className='flex justify-center font-bold text-white'>T shirt</h1>
            <h1 className='flex justify-center font-bold text-white'>$25 USD</h1>
            <h1 className='flex justify-center font-bold text-white'>Colors: available in black and White</h1>
          </div>
        </div>
      </div>
      <div className='bg-gray-500 w-full'>
        <div className='flex flex-col w-full mx-auto'>
          <div className='flex justify-center gap-[60px] mt-[160px]'>
          <img src='por.jpg' className='w-1/3'/>
          <img src='por2.jpg' className='w-1/3'/>
          </div>
          <div>
            <br></br>
            <h1 className='flex justify-center font-bold text-white'>Porsche GT3RS</h1>
            <h1 className='flex justify-center font-bold text-white'>T shirt</h1>
            <h1 className='flex justify-center font-bold text-white'>$25 USD</h1>
            <h1 className='flex justify-center font-bold text-white'>Colors: available in black and White</h1>
          </div>
        </div>
      </div>
      <div className='bg-gray-500 w-full'>
        <div className='flex flex-col w-full mx-auto'>
          <div className='flex justify-center gap-[60px] mt-[160px]'>
          <img src='por4.jpg' className='w-1/3'/>
          <img src='por3.jpg' className='w-1/3'/>
          </div>
          <div>
            <br></br>
            <h1 className='flex justify-center font-bold text-white'>The classic Porsche 911</h1>
            <h1 className='flex justify-center font-bold text-white'>T shirt</h1>
            <h1 className='flex justify-center font-bold text-white'>$25 USD</h1>
            <h1 className='flex justify-center font-bold text-white'>Colors: available in black and White</h1>
          </div>
        </div>
        <div>
        <h1 className='text-[50px] w-full text-left mt-[50px] ml-[20px]'>T-Shirts pictures</h1>
        <div className='flex mt-[20px] ml-[20px]'>
        <img src='irlpor.jpg' className='w-1/3 mb-[20px]'/>
        </div>
      </div>
      </div>
    </div>
  )
}
