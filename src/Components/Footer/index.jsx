import React from "react";
import { BsFacebook, BsInstagram, BsLinkedin, BsTwitter, BsYoutube } from 'react-icons/bs'


const Footer = () => {
    return <div className="flex flex-col md:flex-row bg-primary gap-8 px-[10px] lg:px-[100px] py-[50px]">
        <div className="flex-1">
            <h3 className="text-[20px] mb-4 font-semibold">About Charanvandan</h3>
            <p>
            At Charanvandan, we are devoted to connecting individuals with the spiritual wisdom, guidance, and community they seek, all in the digital realm. Our online religious platform is a sacred space where faith and technology unite to enrich lives and nurture the soul.
            </p>
        </div>
        <div className="w-[200px] px-[0px] lg:px-[10px]">
            <h3 className="text-[20px]  mb-4 font-semibold">Links</h3>
            <ul className="flex flex-col gap-2">
                <li>Home</li>
                <li>Campaign</li>
                <li>About</li>
                <li>Blog</li>
                <li>Contact</li>
            </ul>



        </div>

        <div className="w-[200px] px-[0px] lg:px-[10px]">
            <h3 className="text-[20px] mb-4 font-semibold">Support</h3>
            <ul className="flex flex-col gap-2">
                <li>Privacy Policy</li>
                <li>Terms and conditions</li>
              
            </ul>



        </div>
        <div className="flex-2 lg:flex-1">
            <h3 className="text-[20px] mb-4 font-semibold">Subscribe to our Newsletter</h3>
            <div className="w-full flex">

                <input type="email" className="w-3/4 rounded-tl-md rounded-bl-md" />
                <button className="bg-black text-white px-3 py-2  rounded-tr-md rounded-br-md" >Subscribe</button>
            </div>
            <div className="flex flex-col py-4">
                <h3 className="mb-4 font-semibold">Social Media</h3>
                <ul className="flex gap-8 justify-between md:justify-start text-[24px]">
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
