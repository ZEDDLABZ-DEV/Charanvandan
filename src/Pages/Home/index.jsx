import React from 'react';
import Slider from 'react-slick';
import slide1 from '../../Assets/images/main-slider/slide1.jpg';
import krishna from '../../Assets/images/krishna.png';
import slide3 from '../../Assets/images/main-slider/slider3.jpg';
import slide4 from '../../Assets/images/main-slider/slider4.jpg';
import navratri from '../../Assets/images/navratri.jpg';
import ganesha from '../../Assets/images/ganesha.jpg';
import { Accordion } from 'react-bootstrap-accordion';
import { Header } from '../../Components/Header';
import { Footer } from '../../Components/Footer';
import { SevaCard } from '../../Components/SevaCard';
import { TestimonialCard } from '../../Components/TestimonialCard';
import { SliderComp } from '../../Components/Slider';
import 'react-bootstrap-accordion/dist/index.css';
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
    responsive: [
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 400,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
    ],
  };

  return (
    <>
      {/* header  */}

      <Header />

      <div className="overflow-hidden">
        <Slider {...settings}>
          <SliderComp
            image={slide1}
            title="Connect, Explore, and Evolve on the Path of Devotion"
          />
          <SliderComp
            image={slide4}
            title="Connect, Explore, and Evolve on the Path of Devotion"
          />
          <SliderComp
            image={slide3}
            title="Connect, Explore, and Evolve on the Path of Devotion"
          />
        </Slider>
      </div>

      <div className="flex flex-col px-[10px] lg:px-[100px] py-[50px] bg-primary">
        <div className="flex flex-col gap-4 items-center">
          <h3 className="text-[28px] font-semibold">Campaigns</h3>
        </div>

        <div className="flex flex-col md:flex-row gap-4 pt-[50px]">
          <SevaCard
            image={navratri}
            id={1}
            title="Maa Durga Pooja"
            description="On the occasion of Shardiya Navratri, the festival of worship of the mother of the world, Charnvandan has brought a special service to worship the Maa Durga.In which there are campaigns like Maha Gauri Puja and Archana, Durga Havan, Kanya Puja etc."
          />
        </div>
      </div>

      <div className="flex px-[10px] lg:px-[100px] flex-col-reverse md:flex-row justify-center items-center">
        <div className="flex-1 py-[30px] md:py-auto">
          <h3 className="text-[28px] font-semibold">
            {' '}
            Welcome to Charanvandan Digital Solution Pvt Ltd
          </h3>
          <p className="pt-4 leading-6">
            Welcome to Charanvandan Digital Solution Pvt Ltd, your trusted
            partner in spiritual well-being. With over a decade of 10+ years
            dedicated service. Our journey began in 2013 as an offline mode,
            with a profound commitment for making puja rituals accessible and
            affordable, enriching lives through divine connections. Registered
            in 2023, <br /> <br /> Charanvandan Digital Solution Pvt Ltd
            embarked on a mission to bridge the spiritual gap in today's
            fast-paced world, envisioning a platform where individuals and
            families could experience the sanctity of homa and pujas from the
            comfort of their homes
          </p>

          <button className="bg-primary text-black px-6 py-2 rounded-lg mt-4 w-full md:w-[200px]">
            Know More
          </button>
        </div>
        <div className="flex-1">
          <img src={ganesha} alt="ganesha" />
        </div>
      </div>

      <div className="overflow-hidden px-[10px] lg:px-[100px] py-[50px]">
        <center>
          <h3 className="text-[28px] font-semibold mb-10">
            {' '}
            How we get blessings for you
          </h3>
        </center>

        <div className="flex flex-col lg:flex-row gap-2">
          <div className="w-[400px] md:w-[700px] flex justify-center items-center">
            <img src={krishna} className="w-full" alt="" />
          </div>
          <div className="flex-1 flex gap-3 flex-col">
            <div className="flex flex-col md:flex-row gap-3">
              <div className="flex-1 bg-primary p-4 rounded-lg h-[200px]">
                <h3 className="font-bold text-lg mb-2 bg-[lightgray] w-8 h-8 flex justify-center items-center rounded-full">
                  1
                </h3>
                <h3 className="font-bold text-lg mb-2">Choose A Puja</h3>
                <p>
                Choose your puja according to your choice
                </p>
              </div>
              <div className="flex-1 bg-primary p-4 rounded-lg h-[200px]">
                <h3 className="font-bold text-lg mb-2 bg-[lightgray] w-8 h-8 flex justify-center items-center rounded-full">
                  2
                </h3>
                <h3 className="font-bold text-lg mb-2">Fill the form for sankalpa</h3>
                <p>
                Fill the form for sankalpa
                </p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-3">
              <div className="flex-1 bg-primary p-4 rounded-lg h-[200px]">
                <h3 className="font-bold text-lg mb-2 bg-[lightgray] w-8 h-8 flex justify-center items-center rounded-full">
                  3
                </h3>
                <h3 className="font-bold text-lg mb-2">Fill the address for prasadam,</h3>
                <p>
                Fill the address for prasadam,
                </p>
              </div>

              <div className="flex-1 bg-primary p-4 rounded-lg h-[200px]">
                <h3 className="font-bold text-lg mb-2 bg-[lightgray] w-8 h-8 flex justify-center items-center rounded-full">
                  4
                </h3>
                <h3 className="font-bold text-lg mb-2">Complete your bookings</h3>
                <p>
                complete your bookings
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="overflow-hidden px-[10px] lg:px-[100px] bg-[#f3f3f3] py-[50px]">
        <center>
        <h3 className="font-semibold text-[24px] mb-8">What We Offer</h3>
        </center>
        <div className='flex gap-8 flex-wrap'>
        <div className="flex flex-col justify-center items-center flex-1 p-4 bg-[#fff] rounded-lg">
            <span>🙏</span>
          <h3 className="font-bold text-lg mb-2">Inspiration</h3>
          <p className='w-[320px]'>
          Immerse yourself in a world of spiritual wisdom, daily prayers, and sacred texts that inspire and uplift your heart and mind.

          </p>
        </div>
        <div className="flex  flex-col justify-center items-center p-4 flex-1 bg-[#fff] rounded-lg">
            <span>🤝</span> 
        <h3 className="font-bold text-lg mb-2">
        Community
        </h3>
        <p className="w-[320px]">
        Join a vibrant community of believers from diverse backgrounds who share their faith, stories, and support, creating a tapestry of spiritual connections.

        </p>
        </div>
        <div className="flex flex-col justify-center items-center p-4 flex-1 bg-[#fff] rounded-lg">
        <span>🔒</span>

        <h3 className="font-bold text-lg mb-2">
        Security
        </h3>
        <p className="w-[320px]">
        We provide a safe and secure environment where you can explore your faith, ask questions, and grow spiritually without worry.

        </p>
        </div>
        <div className="flex flex-col justify-center items-center p-4 flex-1 bg-[#fff] rounded-lg">
        <span>🌍</span>
        <h3 className="font-bold text-lg mb-2">
        Global Reach
        </h3>
        <p className="w-[320px]">
        Our platform transcends geographical boundaries, offering a global congregation for worship, learning, and fellowship.

        </p>
        </div>
        <div className="flex flex-col justify-center items-center p-4 flex-1 bg-[#fff] rounded-lg">
            <span>📅</span>
        <h3 className="font-bold text-lg mb-2">
        Events & Rituals
        </h3>
        <p className="w-[320px]">
        Participate in virtual religious events, ceremonies, and rituals that bring your faith to life, no matter where you are.

        </p>
        </div>
        <div className="flex flex-col justify-center items-center p-4 flex-1 bg-[#fff]  rounded-lg">
            <span>🌟</span>
        <h3 className="font-bold text-lg mb-2">
        Spiritual Growth
        </h3>
        <p className="w-[320px]">Access a treasure trove of teachings, sermons, and resources to nurture your spiritual growth and understanding.</p>
        </div>
        </div> 
      </div>
      <div className="overflow-hidden px-[10px] lg:px-[100px] py-[50px]">
        <center>
          <div className="flex flex-col gap-4 py-[50px]">
            <h3 className="text-[28px] font-semibold">
              What our blessed devotees says about us.
            </h3>
          </div>
        </center>

        <Slider {...testimonialSettings}>
          <TestimonialCard />
          <TestimonialCard />
          <TestimonialCard />
          <TestimonialCard />
          <TestimonialCard />
          <TestimonialCard />
        </Slider>
      </div>

      <div className=" px-[10px] lg:px-[100px] py-[50px]">
        <center>
          <div className="flex flex-col gap-4 py-[50px]">
            <h3 className="text-[28px] font-semibold">
              Frequently Asked Questions
            </h3>
            {/* <p className="px-[180px]">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse molestias reiciendis pariatur ullam quaerat magnam eveniet explicabo asperiores adipisci maiores nisi corrupti, itaque quisquam quasi veritatis similique provident, suscipit facere.
                    </p> */}
          </div>
        </center>

        <div className="flex flex-col gap-2">
          <Accordion title="  Why should I perform a Charanvandan seva? ">
            Spiritual Connection: Charanvandan is a deeply spiritual practice
            that helps you establish a strong connection with the divine. It
            signifies your surrender and devotion to a higher power, whether
            it's a deity or guru. This act of humility can foster a sense of
            spiritual closeness and inner peace.
          </Accordion>

          <Accordion title="   What are the different sevas I can perform through Charanvandan? ">
            Charanvandan is a gesture of reverence and humility in which one
            bows down and touches the feet or lotus feet of a revered figure,
            typically a deity, guru, or elder. While the act of Charanvandan
            itself is consistent, the context in which it is performed may vary.
            Here are different types of sevas (Campaigns or offerings) that can
            involve Charanvandan: Deity Seva: In temples or places of worship,
            individuals often perform Charanvandan as part of their devotion to
            the deity.
          </Accordion>

          <Accordion title="  How can I book the Charanvandan sevas? ">
            Booking Charanvandan sevas, especially in the context of temple or
            religious institutions, can vary depending on the specific temple or
            organization and its practices. Here are some general steps you can
            follow to inquire about and potentially book Charanvandan
            sevas:Contact the Temple or Organization: Start by identifying the
            temple or organization where you wish to perform the Charanvandan
            seva.
          </Accordion>

          <Accordion title=" Why should I trust Charanvandan? ">
            Trust in Charanvandan, like trust in any religious or spiritual
            practice, is a matter of personal belief, faith, and cultural or
            spiritual inclination. Here are some reasons why individuals choose
            to trust and engage in Charanvandan:Cultural and Religious
            Tradition: Charanvandan is deeply rooted in the cultural and
            religious traditions of many societies, particularly in Hinduism.
            Trust in Charanvandan often stems from a respect for and adherence
            to these long-standing customs and rituals.
          </Accordion>
        </div>
      </div>

      <Footer />
    </>
  );
};

export { Home };
