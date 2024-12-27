import React from 'react'
import CardSection from './components/CardSection';
import reviews from "./data";

const App = () => {
  return (
    <div className=" flex flex-col justify-center items-center bg-gray-200 p-5 md:p-10">
      <CardSection data = {reviews} />
    </div>
  );
}

export default App