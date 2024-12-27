import React from 'react'
import Card from './Card';

const CardSection = ({data}) => {

  return (
    <div className='flex flex-col justify-center items-center '>
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold text-center">Our Testimonials</h1>
        <div className="bg-[#A78BFA] h-1 w-[150px] mt-2"></div>
      </div>
      <Card data = {data} />
    </div>
  );
}

export default CardSection