import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';
import Blaq from '../images/Blaq.jpeg';
import { Link } from "react-scroll"; 

const Home = () => {
  return (
    <div
    name="home"
    className="h-screen w-full bg-[#0a192f]"
  >
    <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 lg:pt-[100px] md:flex-row pt-[280px]">
      <div className="flex flex-col justify-center h-full">
        <h2 className="text-4xl sm:text-7xl font-bold text-white pr-4">
          I'm a Software Developer
        </h2>
        <p className="text-gray-500 py-4 max-w-md">
           I have 2 years of experience in Web development.
          Currently, I work on web application, interact and creating APIs. I'm open to learning new things, feel free to let me prove myself by helping you build your dream application.
        </p>
        <div>
          <Link
            to="about"
            smooth
            duration={500}
            className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
          >
            About Me
            <span className="group-hover:rotate-90 duration-300">
              <HiArrowNarrowRight size={25} className="ml-3" />
            </span>
          </Link>
        </div>
      </div>
      <div>
        <img
          src={Blaq}  
          alt="my profile"
          className="rounded-2xl bg-cover mx-auto w-full h-[500px] overflow-none md:w-full"
        />
      </div>
    </div>
  </div>
  );
};

export default Home