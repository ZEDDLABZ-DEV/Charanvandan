import React from "react";
import Slider from "react-slick";
import slide1 from '../../Assets/images/main-slider/slide1.jpg'
import slide3 from '../../Assets/images/main-slider/slider3.jpg'
import slide4 from '../../Assets/images/main-slider/slider4.jpg'
import navratri from '../../Assets/images/navratri.jpg'
import ganesha from '../../Assets/images/ganesha.jpg'
import { BsStarFill } from 'react-icons/bs'
import { Accordion } from "react-bootstrap-accordion";
import { Header } from "../../Components/Header";
import { Footer } from "../../Components/Footer";
import { SevaCard } from "../../Components/SevaCard";
import 'react-bootstrap-accordion/dist/index.css'
const Home = () => {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        autoplay: true,
        slidesToScroll: 1,
        arrows: true,
    };

    const testimonialSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        autoplay: true,
        slidesToScroll: 1,
        arrows: true,
    };

    return <>

        {/* header  */}

        <Header />

        <div className="overflow-hidden">
            <Slider {...settings}>
                <div className="relative flex h-[90vh] w-full">
                    <img src={slide4} alt="slide" className="w-full h-full object-cover" />
                    <div className="px-[150px] bg-[rgba(0,0,0,0.5)] top-0 w-full h-full flex flex-col justify-center items-center absolute text-white text-center z-9">
                        {/* <h3 className="text-[40px]">Title</h3> */}
                        {/* <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. <br /> Animi ipsa recusandae error. Ad accusamus cumque praesentium quasi dolor! Consectetur, nesciunt?</p> */}
                    </div>
                </div>
                <div className="relative flex h-[90vh] w-full">
                    <img src={slide1} alt="slide" className="w-full h-full object-cover" />
                    <div className="px-[150px] bg-[rgba(0,0,0,0.5)] top-0 w-full h-full flex flex-col justify-center items-center absolute text-white text-center z-9">
                        {/* <h3 className="text-[40px]">Title</h3> */}
                        {/* <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. <br /> Animi ipsa recusandae error. Ad accusamus cumque praesentium quasi dolor! Consectetur, nesciunt?</p> */}
                    </div>
                </div>

                <div className="relative flex h-[90vh] w-full">
                    <img src={slide3} alt="slide" className="w-full h-full object-cover" />
                    <div className="px-[150px] bg-[rgba(0,0,0,0.5)] top-0 w-full h-full flex flex-col justify-center items-center absolute text-white text-center z-9">
                        {/* <h3 className="text-[40px]">Title</h3> */}
                        {/* <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. <br /> Animi ipsa recusandae error. Ad accusamus cumque praesentium quasi dolor! Consectetur, nesciunt?</p> */}
                    </div>
                </div>
            </Slider>
        </div>


        <div className="flex px-[100px] justify-center items-center">
            <div className="flex-1">
                <h3 className="text-[28px] font-semibold">Welcome to the Charanvandan</h3>
                <p className="pt-4 leading-6">
                    Welcome to Charanvandan, your trusted partner in spiritual well-being. Our journey began with a profound commitment to making puja rituals accessible and affordable, enriching lives through divine connections.
                </p>
                <p className="pt-4 leading-6">

                    Established in 2023, Charanvandan has embarked on a mission to bridge the spiritual gap in today's fast-paced world, envisioned a platform where individuals and families could experience the sanctity of homams and pujas from the comfort of their homes.
                </p>

                <button className="bg-[#FFC107] text-black px-6 py-2 rounded-lg mt-4">Know More</button>

            </div>
            <div className="flex-1">
                <img src={ganesha} alt="ganesha" />
            </div>
        </div>

        <div className="flex flex-col px-[100px] py-[50px] bg-[#FFC107]">
            <div className="flex flex-col gap-4 items-center">
                <h3 className="text-[28px] font-semibold">Our Services</h3>
                <p className="px-[180px] text-center">On the occasion of Shardiya Navratri, the festival of worship of the mother of the world, Charnvandan has brought a special service to worship the Maa Durga.In which there are services like Maha Gauri Puja and Archana, Durga Havan, Kanya Puja etc. You can get this service done especially at Chamundeshwari Mata  temple area in Mysore.</p>
            </div>

            <div className="flex gap-4 pt-[50px]">
              

            <SevaCard image={navratri} id={1}  title="Maa Durga Pooja" description="
                On the occasion of Shardiya Navratri, the festival of worship of the mother of the world, Charnvandan has brought a special service to worship the Maa Durga.In which there are services like Maha Gauri Puja and Archana, Durga Havan, Kanya Puja etc.
                
            " />

            </div>
        </div>
{/* 
        <div className="overflow-hidden px-[100px] py-[50px]">

            <center>
                <div className="flex flex-col gap-4 py-[50px]">
                    <h3 className="text-[28px] font-semibold">What our blessed devotees says about us.</h3>
                    <p className="px-[180px]">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse molestias reiciendis pariatur ullam quaerat magnam eveniet explicabo asperiores adipisci maiores nisi corrupti, itaque quisquam quasi veritatis similique provident, suscipit facere.
                    </p>
                </div>
            </center>



            <Slider {...testimonialSettings}>
                <div className="relative flex p-4 w-full">
                    <div className=" bg-[#FFC107] rounded-md p-6 w-full flex flex-col gap-4 justify-center items-center text-white text-center">
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi ipsa recusandae error. Ad accusamus cumque praesentium quasi dolor! Consectetur, nesciunt?</p>
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

                <div className="relative flex p-4 w-full">
                    <div className=" bg-[#FFC107] rounded-md p-6 w-full flex flex-col gap-4 justify-center items-center text-white text-center">
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi ipsa recusandae error. Ad accusamus cumque praesentium quasi dolor! Consectetur, nesciunt?</p>
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

                <div className="relative flex p-4 w-full">
                    <div className=" bg-[#FFC107] rounded-md p-6 w-full flex flex-col gap-4 justify-center items-center text-white text-center">
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi ipsa recusandae error. Ad accusamus cumque praesentium quasi dolor! Consectetur, nesciunt?</p>
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

                <div className="relative flex p-4 w-full">
                    <div className=" bg-[#FFC107] rounded-md p-6 w-full flex flex-col gap-4 justify-center items-center text-white text-center">
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi ipsa recusandae error. Ad accusamus cumque praesentium quasi dolor! Consectetur, nesciunt?</p>
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

                <div className="relative flex p-4 w-full">
                    <div className=" bg-[#FFC107] rounded-md p-6 w-full flex flex-col gap-4 justify-center items-center text-white text-center">
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi ipsa recusandae error. Ad accusamus cumque praesentium quasi dolor! Consectetur, nesciunt?</p>
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

                <div className="relative flex p-4 w-full">
                    <div className=" bg-[#FFC107] rounded-md p-6 w-full flex flex-col gap-4 justify-center items-center text-white text-center">
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi ipsa recusandae error. Ad accusamus cumque praesentium quasi dolor! Consectetur, nesciunt?</p>
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

                <div className="relative flex p-4 w-full">
                    <div className=" bg-[#FFC107] rounded-md p-6 w-full flex flex-col gap-4 justify-center items-center text-white text-center">
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi ipsa recusandae error. Ad accusamus cumque praesentium quasi dolor! Consectetur, nesciunt?</p>
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
            </Slider>
        </div> */}


        <div className="px-[100px] py-[50px]">

            <center>
                <div className="flex flex-col gap-4 py-[50px]">
                    <h3 className="text-[28px] font-semibold">Frequently Asked Questions</h3>
                    {/* <p className="px-[180px]">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse molestias reiciendis pariatur ullam quaerat magnam eveniet explicabo asperiores adipisci maiores nisi corrupti, itaque quisquam quasi veritatis similique provident, suscipit facere.
                    </p> */}
                </div>
            </center>

        <div className="flex flex-col gap-2">
            
            <Accordion title="  Why should I perform a Charanvandan seva? ">
                Spiritual Connection: Charanvandan is a deeply spiritual practice that helps you establish a strong connection with the divine. It signifies your surrender and devotion to a higher power, whether it's a deity or guru. This act of humility can foster a sense of spiritual closeness and inner peace.
            </Accordion>

            <Accordion title="   What are the different sevas I can perform through Charanvandan? ">
                Charanvandan is a gesture of reverence and humility in which one bows down and touches the feet or lotus feet of a revered figure, typically a deity, guru, or elder. While the act of Charanvandan itself is consistent, the context in which it is performed may vary. Here are different types of sevas (services or offerings) that can involve Charanvandan:Deity Seva: In temples or places of worship, individuals often perform Charanvandan as part of their devotion to the deity.
            </Accordion>

            <Accordion title="  How can I book the Charanvandan sevas? ">
                Booking Charanvandan sevas, especially in the context of temple or religious institutions, can vary depending on the specific temple or organization and its practices. Here are some general steps you can follow to inquire about and potentially book Charanvandan sevas:Contact the Temple or Organization: Start by identifying the temple or organization where you wish to perform the Charanvandan seva.
            </Accordion>

            <Accordion title=" Why should I trust Charanvandan? ">
                Trust in Charanvandan, like trust in any religious or spiritual practice, is a matter of personal belief, faith, and cultural or spiritual inclination. Here are some reasons why individuals choose to trust and engage in Charanvandan:Cultural and Religious Tradition: Charanvandan is deeply rooted in the cultural and religious traditions of many societies, particularly in Hinduism. Trust in Charanvandan often stems from a respect for and adherence to these long-standing customs and rituals.
            </Accordion>
        </div>
        </div>


        <Footer />


    </>;
};

export { Home };
