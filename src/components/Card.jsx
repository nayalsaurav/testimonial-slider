import React, { useState } from 'react'
import reviews from "../data";

const Card = () => {
    // console.log(reviews);
    const [index, setIndex] = useState(0);
    const { name, job, image, text } = reviews[index];
    function clickHandler(value) {
        setIndex((index + value + reviews.length) % reviews.length);
    }
    function randomHandler() {
      let randomIndex;
      do {
        randomIndex = Math.floor(Math.random() * reviews.length);
      } while (randomIndex === index);
      setIndex(randomIndex);
    }

  return (
    <div className="w-[85vw] md:w-[700px] bg-white mt-10 shadow-md hover:shadow-xl rounded-md transition-all duration-700 flex flex-col justify-center items-center p-10 relative">
      <div className="bg-violet-500 rounded-full w-[140px] h-[140px] mb-4 relative md:top-[-70px] md:left-[70px] md:absolute">
        <img className="absolute top-2 -left-2 rounded-full object-cover h-full w-full" src={image} alt={name} />
      </div>
      <div className="flex flex-col items-center gap-2">
        {/* <h2 className="text-2xl font-semibold">{name}</h2> */}
        <h2 className="font-bold text-lg md:text-2xl tracking-wider capitalize">
          {name}
        </h2>
        <h3 className="text-violet-300 uppercase text-sm">{job}</h3>
        <div className="flex flex-col items-center gap-5 mt-4">
          <div>
            <svg
              stroke="#A78BFA"
              fill="#A78BFA"
              stroke-width="0"
              viewBox="0 0 512 512"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M464 256h-80v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8c-88.4 0-160 71.6-160 160v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48zm-288 0H96v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8C71.6 32 0 103.6 0 192v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48z"></path>
            </svg>
          </div>
          <p className="text-center text-slate-500 mt-4 ">{text}</p>
          <div>
            <svg
              stroke="#A78BFA"
              fill="#A78BFA"
              stroke-width="0"
              viewBox="0 0 512 512"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M464 256h-80v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8c-88.4 0-160 71.6-160 160v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48zm-288 0H96v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8C71.6 32 0 103.6 0 192v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48z"></path>
            </svg>
          </div>
        </div>
      </div>
      <div className="flex justify-between items-center gap-5">
        <button
          className="mt-5 text-violet-400 hover:text-violet-500 text-3xl"
          onClick={() => clickHandler(-1)}
        >
          &lt;
        </button>
        <button
          className="mt-5 text-violet-400 hover:text-violet-500 text-3xl"
          onClick={() => clickHandler(1)}
        >
          &gt;
        </button>
      </div>
      <button
        className="mt-5 bg-violet-400 hover:bg-violet-500 shadow-md hover:shadow transition-all duration-200 cursor-pointer px-10 py-2 rounded-md font-bold text-white text-lg"
        onClick={randomHandler}
      >
        Surprise Me
      </button>
    </div>
  );
}

export default Card