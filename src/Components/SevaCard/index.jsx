import React from "react";
import { useNavigate } from "react-router-dom";

const SevaCard = ({ image, title, description, id }) => {

  const navigate = useNavigate()

  return (
  <div className="flex flex-col shadow-xl gap-4 w-[300px] bg-white p-3 rounded-lg">
    <img src={image} alt="" />
    <h3 className="text-[20px] font-semibold">{title}</h3>
    <p className="text-[14px] leading-6">{description}</p>
    <button className="bg-[#FFC107] px-3 py-2 rounded-lg w-full" onClick={() => navigate(`/service-details/${id}`)}>Book Now</button>
  </div>
  )
};

export { SevaCard };
