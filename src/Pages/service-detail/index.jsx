import React from 'react';
import { Tabs } from 'antd';
import {
  BsFacebook,
  BsInstagram,
  BsTwitter,
  BsWhatsapp,
  BsYoutube,
} from 'react-icons/bs';
import { Header } from '../../Components/Header';
import { Footer } from '../../Components/Footer';
import slide2 from '../../Assets/images/main-slider/slide2.jpg';
import DurgaHomam from '../../Assets/images/Durga-Homam.jpg';
import KanyaPuja from '../../Assets/images/Kanya-Puja.jpg';
import navratri from '../../Assets/images/navratri.jpg'
import maagauri from '../../Assets/images/maagauri.jpg';
import { SevaCard } from '../../Components/SevaCard';
import { Accordion } from 'react-bootstrap-accordion';
import 'react-bootstrap-accordion/dist/index.css';

const ServiceDetails = () => {
  const items = [
    {
      key: '1',
      label: 'Sevas',
      children: (
        <div className="flex flex-wrap gap-6">
          <SevaCard
            image={maagauri}
            id={1}
            title="Maha Gauri Puja"
            description="Mahagauri form of Mother is worshiped on the eighth day of Navratri. This form of Mother is very calm and visible. By just worshiping him, all the sins of a person are destroyed. You will get the Prasad after completion of the Puja from place of Worship. Which includes 
            Akshat
            Kumkum 
            Homam bhasham
            Mishri and makhana
"
          />
          <SevaCard
            image={DurgaHomam}
            id={1}
            title="Durga Homam"
            description="Along with worshiping Goddess Durga, Homam is also performed in her name. It is said that after being satisfied with the Homam, the Goddess fulfills the wishes of the devotees. Performing Havan purifies the mind and also maintains positivity in the house. You will get the Prasad after completion of the Puja from place of Worship. Which includes 
            Akshat
            Kumkum 
            Homam bhasham
            Mishri and makhana"
          />
          
          <SevaCard
            image={KanyaPuja}
            id={1}
            title="Kanya Puja"
            description=":- Kumari Puja is done to get the results of auspicious works. By worshiping a girl, one gets respect, Lakshmi, knowledge and brilliance and also destroys obstacles, fear and enemies. Mother Durga is very happy with the worship of girls. No Prasad will be given in the Puja."
          />
        </div>
      ),
    },
    {
      key: '2',
      label: 'Story',
      children: (
        <div className="flex flex-col gap-4 py-[30px]">
          {/* <h3 className="text-[24px] font-semibold">Story Title</h3> */}
          <hr />
          <p>
            The festival of Navratri is very special and full of Miracles
            stories of Maa Durga. To please Goddess Durga, devotees perform
            various types of worship and get blessings of Goddess Durga.
          </p>
          <p>
            Charanvandan is orchestrating an exclusive Homam and Puja,
            meticulously designed by experienced Veda Pandits, with the sole
            purpose of invoking the divine blessings of the Goddess upon you and
            your family during this Navaratri. Seize this sacred opportunity to
            embrace and receive these hallowed blessings.".
          </p>

          <p>
            Performing Special Vedic Homas in Durga Navaratri offers a multitude
            of blessings, including deepening one's spiritual practice, invoking
            protection against negative forces, fostering inner peace and mental
            clarity, promoting health and well-being, seeking abundance and
            prosperity, overcoming obstacles, absorbing positive energy,
            nullifying Graha Doshas, developing courage and inner strength, and
            inviting divine blessings for a fulfilling and harmonious life.
          </p>

          <p>
            Book these Sevas now and immerse yourself in the Divine Grace of
            Goddess Durga during Navaratri!
          </p>
        </div>
      ),
    },
    {
      key: '3',
      label: 'Updates',
      children: (
        <div className="flex flex-col gap-4 py-[30px]">
          <h3 className="text-[20px] font-semibold">Updates</h3>
          <div className="flex">
            <div className="flex flex-col p-4 w-full shadow-lg rounded-md bg-[#FFFAF2]">
              <div className="flex gap-4 justify-start items-center">
                <span className="flex justify-center items-start p-2 text-white font-bold rounded-md bg-[#EE4823]">
                  #1
                </span>
                <h4 className="text-[18px] font-bold">04/10/23</h4>
              </div>
              <p>You can see the updates for this campaign here</p>
            </div>
          </div>
        </div>
      ),
    },
    {
      key: '4',
      label: 'FAQ',
      children: (
        <div className="flex flex-col gap-2 py-[30px]">
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
            Here are different types of sevas (services or offerings) that can
            involve Charanvandan:Deity Seva: In temples or places of worship,
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
      ),
    },
  ];

  return (
    <>
      <Header />

      <div className="flex px-[100px] py-[50px]">
        <div className="w-1/3">
          <img src={navratri} className="w-full" alt="" />
        </div>
        <div className="flex-1 p-4">
          <h1 className="text-[30px] font-bold mb-2">
            Blessings of Maa Durga in this Navaratri for you & Your Family
          </h1>
          <hr />
          <p className="leading-6 text-[14px]">
            On the occasion of Shardiya Navratri, the festival of worship of the
            mother of the world, Charnvandan has brought a special service to
            worship the Maa Durga.In which there are services like Maha Gauri
            Puja and Archana, Durga Havan, Kanya Puja etc. <br /> <br /> You can
            get this service done especially at Chamundeshwari Mata temple area
            in Mysore. You can also book your service by joining Charanvandan on
            this special festival of Navratri and get the blessings of Maa
            Durga.
          </p>

          <div className="flex gap-4 flex-col py-3">
            <h3 className="text-[20px] font-semibold">Share on:</h3>
            <div className="flex gap-4">
              <button className="flex justify-center items-center gap-2 py-2 rounded-md px-4 border-[#FFC107] border-[2px]">
                {' '}
                <BsWhatsapp /> <span> Whatsapp</span>{' '}
              </button>
              <button className="flex justify-center items-center gap-2 py-2 rounded-md px-4 border-[#FFC107] border-[2px]">
                {' '}
                <BsFacebook />
                <span> Facebook </span>
              </button>
              <button className="flex justify-center items-center gap-2 py-2 rounded-md px-4 border-[#FFC107] border-[2px]">
                {' '}
                <BsInstagram />
                <span> Instagram </span>
              </button>
              <button className="flex justify-center items-center gap-2 py-2 rounded-md px-4 border-[#FFC107] border-[2px]">
                {' '}
                <BsTwitter /> <span> Twitter </span>
              </button>
              <button className="flex justify-center items-center gap-2 py-2 rounded-md px-4 border-[#FFC107] border-[2px]">
                {' '}
                <BsYoutube /> <span> Youtube </span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="px-[100px]">
        <Tabs items={items} defaultActiveKey={1} />
      </div>

      <Footer />
    </>
  );
};

export { ServiceDetails };
