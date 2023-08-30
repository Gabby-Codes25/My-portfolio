import React from 'react'
import { useState } from 'react'
import {
  FaBars,
  FaInstagram,
  FaTimes,
  FaGithub,
  FaLinkedin,
} from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi'
import { Link } from 'react-scroll'

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);
  
  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300'>
    <div>
      <h1 className=' font-bold text-5xl font-sans'>G.O</h1>
    </div>
    {/* menu */}
    <ul className='hidden md:flex gap-x-8'>
      <li className="hover:scale-110">
        <Link to='home' smooth={true} duration={500}>
          Home
        </Link>
      </li>
      <li className="hover:scale-110">
        <Link to='about' smooth={true} duration={500}>
          About
        </Link>
      </li>
      <li className="hover:scale-110">
        <Link to='skills' smooth={true} duration={500}>
          Skills
        </Link>
      </li>
      <li className="hover:scale-110">
        <Link to='Projects' smooth={true} duration={500}>
          Projects
        </Link>
      </li>
      <li className="hover:scale-110">
        <Link to='contact' smooth={true} duration={500}>
          Contact
        </Link>
      </li>
    </ul>
    {/* Hamburger */}
    <div onClick={handleClick} className='cursor-pointer md:hidden z-10'>
      {!nav ? <FaBars /> : <FaTimes />}
    </div>
    {/* Mobile menu */}
    <ul
      className={
        !nav
          ? 'hidden'
          : 'absolute cursor-pointer top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'
      }
    >
      <li className='py-6 text-4xl hover:scale-110'>
        <Link onClick={handleClick} to='home' smooth={true} duration={500}>
          Home
        </Link>
      </li>
      <li className='py-6 text-4xl hover:scale-110'>
        {' '}
        <Link onClick={handleClick} to='about' smooth={true} duration={500}>
          About
        </Link>
      </li>
      <li className='py-6 text-4xl hover:scale-110'>
        {' '}
        <Link onClick={handleClick} to='skills' smooth={true} duration={500}>
          Skills
        </Link>
      </li>
      <li className='py-6 text-4xl hover:scale-110'>
        {' '}
        <Link onClick={handleClick} to='Projects' smooth={true} duration={500}>
          Projects
        </Link>
      </li>
      <li className='py-6 text-4xl hover:scale-110'>
        {' '}
        <Link onClick={handleClick} to='contact' smooth={true} duration={500}>
          Contact
        </Link>
      </li>
    </ul>
    {/* Social icons */}
    <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
      <ul>
        <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600'>
          <a
            className='flex justify-between items-center w-full text-gray-300'
            href='https://www.linkedin.com/in/gabriel-obasi-3b9487269/'
          >
            Linkedin <FaLinkedin size={30} />
          </a>
        </li>
        <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]'>
          <a
            className='flex justify-between items-center w-full text-gray-300'
            href='https://github.com/Gabby-Codes25' target="/_blank"
          >
            Github <FaGithub size={30} />
          </a>
        </li>
        <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6fc2b0]'>
          <a
            className='flex justify-between items-center w-full text-gray-300'
            href='gabrielobasi557@gmail.com'
          >
            Email <HiOutlineMail size={30} />
          </a>
        </li>
        <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]'>
          <a
            className='flex justify-between items-center w-full text-gray-300'
            href='https://instagram.com/blaq_dev25?igshid=YmMyMTA2M2Y=' target="/_blank" 
          >
            Instagram <FaInstagram size={30} />
          </a>
        </li>
      </ul>
    </div>
  </div>
  )
}

export default Navbar