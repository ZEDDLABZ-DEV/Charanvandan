import React from "react";
import { BsStarFill } from 'react-icons/bs'

const TestimonialCard = () => {
  return    <div className="relative flex p-4 w-full">
  <div className=" bg-primary rounded-md p-6 w-full flex flex-col gap-4 justify-center items-center text-white text-center">
      <p> Services provided by charanvandan are highly recomanded. i booked verious pujas from charanvandan.com. its very easy to use and prices are also very reasonable </p>
      <div className="flex w-full justify-between items-center">
          <div className="flex gap-2">
              <BsStarFill />
              <BsStarFill />
              <BsStarFill />
              <BsStarFill />
              <BsStarFill />
          </div>
          <h3 className="text-[20px] text-right w-full italic"> - Jaskaran</h3>
      </div>
  </div>
</div>
};

export  {TestimonialCard};
