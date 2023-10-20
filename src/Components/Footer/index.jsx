import React from "react";
import { BsFacebook, BsInstagram, BsLinkedin, BsTwitter, BsYoutube } from 'react-icons/bs'


const Footer = () => {
    return <div className="flex bg-[#FFC107] px-[100px] py-[50px]">
        <div className="flex-1">
            <h3 className="text-[20px] mb-4 font-semibold">About Charanvandan</h3>
            {/* <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat illum nihil unde reiciendis impedit nulla, debitis iste eius dolore molestiae?</p> */}
        </div>
        <div className="flex-1 px-10">
            <h3 className="text-[20px]  mb-4 font-semibold">Links</h3>
            <ul>
                <li>Home</li>
                <li>Services</li>
                <li>About</li>
                <li>Blog</li>
                <li>Contact</li>
            </ul>



        </div>
        <div className="flex-1">
            <h3 className="text-[20px] mb-4 font-semibold">Subscribe to our Newsletter</h3>
            <div className="w-full flex">

                <input type="email" className="w-3/4 rounded-tl-md rounded-bl-md" />
                <button className="bg-black text-white px-3 py-2  rounded-tr-md rounded-br-md" >Subscribe</button>
            </div>
            <div className="flex flex-col py-4">
                <h3 className="mb-4 font-semibold">Social Media</h3>
                <ul className="flex gap-8 text-[24px]">
                    <li> <BsFacebook /> </li>
                    <li> <BsTwitter /></li>
                    <li> <BsInstagram /> </li>
                    <li> <BsYoutube /> </li>
                    <li> <BsLinkedin /> </li>
                </ul>
            </div>
        </div>

    </div>;
};

export { Footer };
