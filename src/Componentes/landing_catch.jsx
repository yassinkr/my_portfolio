import React from 'react';
import instagram from './svg/instagram.svg'
import twitter from './svg/twitter.svg'
import linkedin from './svg/linkedin.svg'
import sparcle1 from './svg/sparcle_1.svg'
import sparcle2 from './svg/sparcle_2.svg'
import My_pic from './svg/pic.jpg'
const LandingCatch = () => {
  return (
    
    <div className='bg-blue-500 flex justify-end font-bebas items-center text-center text-white h-screen w-full relative overflow-hidden'>
      <div className='absolute left-[356px] top-[150px] z-10 w-[380px] h-[827px] bg-white'>
        <div>
        <img className='object-fill' src={My_pic}  />
        </div>
      </div>
      <div className=' bg-white absolute left-[-45rem] top-[-19rem] h-[80rem] rotate-45 aspect-square flex flex-col gap-16  py-16 z-0'>
        <div className='bg-blue-500 w-full h-10'></div>
        <div className='bg-blue-500 w-full h-10'></div>
      </div>
      <div className='absolute  w-[130px] h-[130px] top-[150px] left-[700px]'>
     <img src={sparcle1} alt="sparcle1" />
      </div>
      <div className='absolute  w-[197px] h-[197px] bottom-24 left-[380px]'>
     <img src={sparcle2} alt="sparcle2" />
      </div>

      <div className='grid aligne-right px-80 '>
        <div className='underline font-md text-7xl text-white'>
          HI! I am Yassin Kerrai
        </div>
        <div className='text-29 font-md pt-2'>
          Crafting Digital Experiences with Precision and Passion
        </div>
        <div className='flex justify-center align-middle items-center text-white ' >
        <ul className='text-xs flex space-x-4'>
        <li>
        <img src={linkedin} alt="linkedin" />
        </li>
        <li>
        <img src={twitter} alt="twitter" />
        </li>
        <li>
        <img src={instagram} alt="instagram" />
        </li>
 
        </ul>

        </div>
      </div>
    </div>
  );
};

export default LandingCatch;
