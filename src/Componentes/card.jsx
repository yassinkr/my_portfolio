import React from 'react';
import Book from './svg/book.jsx';
import Pincel from './svg/pincel.jsx';
import Tags from './svg/tags.jsx';

const Card = ({ color,title,desc }) => {
  let svg;

  switch (color) {
    case 'red':
      svg = <Book />;
      break;
    case 'yellow':
      svg = <Tags />;
      break;
    case 'blue':
      svg = <Pincel />;
      break;
    default:
      svg = null;
  }

  return (
    <div className={`w-[250px] h-[342px] rounded-b-[125px] bg-${color}-400 text-grey-400 relative `}>
      <div className={`bg-gradient-to-t from-${color}-300 w-full h-[145px] border-[9px] border-${color}-500 text-42 text-grey-400 flex justify-center items-center `}>
       {title}
      </div>
      {svg && (
        <div className='rounded-full w-[97px] h-[97px] bg-grey-400 flex justify-center items-center absolute top-[93px] left-[72px] drop-shadow-[0_-5px_5px_rgba(0,0,0,0.25)]'>
          {svg}
        </div>
      )}
      <div className='text-center text-[17px] py-16 px-5'> {desc} </div>
    </div>
  );
};

export default Card;
