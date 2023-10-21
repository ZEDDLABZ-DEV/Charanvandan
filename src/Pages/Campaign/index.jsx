import React from "react";
import { Footer } from "../../Components/Footer";
import { Header } from "../../Components/Header";
import banner from '../../Assets/images/banner.png'
import { SevaCard } from "../../Components/SevaCard";
import navratri from '../../Assets/images/navratri.jpg'


const Campaign = () => {
  return <>
        <Header />

        <div className="relative">
            <img src={banner} alt="" />
            <div className="absolute top-0 bg-[rgba(0,0,0,0.5)] w-full h-full text-center flex items-center justify-center">
            <h1 className="text-[38px] font-semibold text-[white]">Campaign</h1>
            </div>
        </div>

            <div className="flex px-[10px] flex-col md:flex-row lg:px-[100px] py-[50px] gap-4 flex-wrap">

            <SevaCard image={navratri} id={1}  title="Maa Durga Pooja" description="
                On the occasion of Shardiya Navratri, the festival of worship of the mother of the world, Charnvandan has brought a special service to worship the Maa Durga.In which there are Campaigns like Maha Gauri Puja and Archana, Durga Havan, Kanya Puja etc.
                
            " />


            </div>
        <Footer />
    </>;
};

export {Campaign};
