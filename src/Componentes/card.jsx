import React from 'react';
import Book from './svg/book.jsx';
import Pincel from './svg/pincel.jsx';
import Tags from './svg/tags.jsx';

const Card = ({ color }) => {
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
    <div className={`w-[250px] h-[342px] rounded-b-[125px] bg-${color}-400 text-white relative`}>
      <div className={`bg-gradient-to-b from-${color}-400 to-${color}-200 w-full h-[142px] border-[9px] border-${color}-500 text-4xl text-white flex justify-center items-center `}>
        Data Science
      </div>
      {svg && (
        <div className='rounded-full w-[97px] h-[97px] bg-white flex justify-center items-center absolute top-[93px] left-[72px]'>
          {svg}
        </div>
      )}
      <div className='flex justify-center items-center text-lg py-16'> working on this </div>
    </div>
  );
};

export default Card;
