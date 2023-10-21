import React from "react";

const SliderComp = ({image, title, description}) => {
  return   <div className="relative flex h-[40vh] lg:h-[90vh] w-full">
  <img src={image} alt="slide" className="w-full h-full object-cover" />
  <div className=" px-[20px] md:px-[100px] lg:px-[150px] bg-[rgba(0,0,0,0)] top-0 w-full h-full flex flex-col gap-3 justify-center items-center absolute text-white text-center z-9">
      <h3 className="text-[24px] font-semibold lg:text-[40px]">{title}</h3>
      <p className="text-[14px]">
        {description}
        </p>

        <button className="bg-primary py-2 px-8 text-[20px] font-semibold rounded-md">Book Puja</button>
  </div>
</div>;
};

export {SliderComp};
