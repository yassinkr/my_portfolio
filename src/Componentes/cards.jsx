import React from 'react'
import Card from './card'
const cards = () => {
  return (
    <div className='w-full  h-screen relative flex justify-center align-middle items-center'>
      <div className='w-full  h-screen blur-[125px] absolute overflow-hidden bg-opacity-100'>
       <div className='relativ bg-opacity-100'>
        <div className='rounded-full w-[562px] h-[562px] bg-blue-400 left-[500px] top-[672px] absolute'></div>
        <div className='rounded-full w-[605px] h-[605px] bg-red-400 right-[-190px] top-[-346px] absolute'></div>

        <div className='rounded-full w-[290px] h-[290px] bg-red-400 left-[-112px] bottom-[-111px] absolute'></div>

        <div className='rounded-full w-[428px] h-[428px] bg-yellow-400 right-[-161px] bottom-[-282px] absolute'></div>

        <div className='rounded-full w-[562px] h-[562px] bg-blue-400 left-[-291px] top-[-316px] absolute'></div></div>
      </div>
      <div className='flex space-x-3 justify-center items-center align-middle gap-[85px] bg-opacity-100'>
        <Card color={"red"}/>
        <Card color={"yellow"}/>
        <Card color={"blue"}/>
      </div>
    </div>
  )
}

export default cards