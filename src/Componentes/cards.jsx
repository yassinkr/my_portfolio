import React from 'react'
import Card from './card'
const cards = () => {
  return (
    <div className='w-full  h-screen relative grid'>
      <div className='w-full  h-screen blur-[125px] absolute overflow-hidden bg-opacity-100'>
       <div className='relativ bg-opacity-100'>
        <div className='rounded-full w-[562px] h-[562px] bg-blue-400 left-[500px] top-[672px] absolute'></div>
        <div className='rounded-full w-[605px] h-[605px] bg-red-400 right-[-190px] top-[-346px] absolute'></div>

        <div className='rounded-full w-[290px] h-[290px] bg-red-400 left-[-112px] bottom-[-111px] absolute'></div>

        <div className='rounded-full w-[428px] h-[428px] bg-yellow-400 right-[-161px] bottom-[-282px] absolute'></div>

        <div className='rounded-full w-[562px] h-[562px] bg-blue-400 left-[-291px] top-[-316px] absolute'></div></div>
      </div>
      <div className='flex justify-center align-middle items-center'>
              <div className=''>
      <div className='py-[70px]'> 
        <div className='text-blue-400 text-3xl text-center'>
        Skills & professions 
        </div>
        <div className='text-black-400 text-2xl text-center'>
        exploit and highlight my skills on creating amazing digital experiences  
        </div>
      </div>
      

      <div className='flex space-x-3 justify-center items-center align-middle gap-[85px] bg-opacity-100'>
        <Card color={"blue"} title={"UI&UX"} desc={"web design services and user experience research"}/>        
        <Card color={"yellow"} title={"WEBDEV"} desc={"creating Responsive and efficient web experiences"}/>
        <Card color={"red"} title={"Data Science"} desc={"working on this"}/>
      </div>
      </div>
      </div>

    </div>
  )
}

export default cards