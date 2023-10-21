import React from "react";
import { Footer } from "../../Components/Footer";
import { Header } from "../../Components/Header";
import banner from '../../Assets/images/banner.png'
import {FaRegAddressCard} from 'react-icons/fa'
import {FiPhoneCall} from 'react-icons/fi'
import { BsFacebook, BsInstagram, BsLinkedin, BsTwitter, BsYoutube } from 'react-icons/bs'

const Contact = () => {
  return <>
    <Header />
        <div className="relative">
            <img src={banner} alt="" />
            <div className="absolute top-0 bg-[rgba(0,0,0,0.5)] w-full h-full text-center flex items-center justify-center">
            <h1 className="text-[38px] font-semibold text-[white]">Contact Us</h1>
            </div>
        </div>

        <div className="flex flex-col-reverse gap-4 md:flex-row lg:px-[100px] px-[10px] py-[50px]">
            <div className="flex-1 flex flex-col gap-8 justify-center">
                <div className="flex items-start gap-4 pt-[40px]">

                {/*<FaRegAddressCard className="text-[30px]" /> */}
                <div className="flex flex-col">
                    {/* <h3 className="text-[18px] font-semibold">Address</h3> */}
                    {/* <p className="leading-6">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. <br /> Quaerat illum nihil unde reiciendis impedit nulla, <br /> debitis iste eius dolore molestiae?
                    </p> */}
                </div>
                </div>

                <div className="flex items-start gap-4">

                    <FiPhoneCall className="text-[30px]" />
                    <div className="flex flex-col">
                        <h3 className="text-[18px] font-semibold">Contact</h3>
                        <p className="leading-6">
                        <ul>
                            
                            <li>info@charanvandan.com</li>
                        </ul>
                        </p>
                    </div>
                </div>

                <div className="flex items-start gap-4">
                <ul className="flex gap-8 text-[30px]">
                    <li> <BsFacebook /> </li>
                    <li> <BsTwitter /></li>
                    <li> <BsInstagram /> </li>
                    <li> <BsYoutube /> </li>
                    <li> <BsLinkedin /> </li>
                </ul>
            </div>

            </div>
            <div className="flex-1">
                <form className="flex flex-col gap-4">
                    <div className="flex flex-col">
                    <label>Name</label>
                    <input type="text" className="w-full border-[1px] h-[34px] rounded-md border-[gray]" />
                    </div>
                    <div className="flex flex-col">

                    <label>Phone no.</label>
                    <input type="text" className="w-full border-[1px] h-[34px] rounded-md border-[gray]" />
                    
                    </div>


                    <div className="flex flex-col">

                    <label>Email</label>
                    <input type="text" className="w-full border-[1px] h-[34px] rounded-md border-[gray]" />

                    </div>

                    <div className="flex flex-col">

                    <label>Message</label>
                    <textarea  className="w-full border-[1px] border-[gray] rounded-md" rows={4}></textarea>
                    </div>

                    <div className="flex flex-col">

                    <button className="bg-primary rounded-md py-[6px]"> Send Message </button>
                    </div>
                </form>
            </div>
        </div>
    <Footer />
  </>
  ;
};

export  {Contact};
