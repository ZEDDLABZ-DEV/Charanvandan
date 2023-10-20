import React from "react";
import { Footer } from "../../Components/Footer";
import { Header } from "../../Components/Header";
import { TbError404 } from 'react-icons/tb';
import error404 from '../../Assets/images/404-1.png'

const NotFound = () => {
  return <>
    <Header />
    <div className="py-[20px] flex flex-col gap-1 justify-center items-center">
    
    <img src={error404} alt="" className="w-[300px]" />
    <h3 className="text-[60px] font-bold">
       <TbError404 />
    </h3>
    <p className="text-[20px] ">Page Not Found</p>
    </div>
    <Footer />
    </>
};

export {NotFound};
