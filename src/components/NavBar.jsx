import React, { useState } from 'react'
import { close, logo, menu } from '../assets';
import { navLinks } from '../constant';

const NavBar = () => {

  const [toggle, setToggle] = useState(false);

  return (
    <nav className='w-full flex justify-between items-center py-4 navbar'>
      <img className='w-[124px] h-[23px]' src={logo} alt="banklogo" />
      <ul className='list-none sm:flex hidden text-white flex-1 justify-end'>
        {
          navLinks.map((item, index) => (
            <li key={item.id} className={`w-[48px] h-[21px] font-poppins font-normal text-[16px] ${index === navLinks.length - 1 ? 'mr-0' : 'mr-10'}`}>
              {item.title}
            </li>
          ))
        }
      </ul>
      <div className={`sm:hidden flex flex-1 justify-end items-center`}>
        <img
          src={toggle ? close : menu}
          alt="closebtn"
          className='w-[28px] h-[28px] object-contain'
          onClick={() => setToggle((prev) => !prev)}
        />
        <div className={`${!toggle ? 'hidden' : 'flex'} p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}>
          <ul className='list-none flex flex-col flex-1 justify-end items-start text-white'>
            {
              navLinks.map((item, index) => (
                <li key={item.id} className={`w-[48px] h-[21px] font-poppins font-normal text-[16px] ${index === navLinks.length - 1 ? 'mb-0' : 'mb-4'}`}>
                  {item.title}
                </li>
              ))
            }
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default NavBar