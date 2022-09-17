import React from 'react'
import styles from '../style';
import { footerLinks, socialMedia } from '../constant';
import { logo } from '../assets';

const Footer = () => {
  return (
    <section className={`${styles.flexCenter} ${styles.paddingY} flex-col`}>
      <div className={`${styles.flexStart} md:flex-row flex-col mb-8 w-full`}>
        <div className='flex-[1] flex flex-col justify-start mr-10'>
          <img src={logo} alt="logo" className='w-[266px] h-[72.14px] object-contain' />
          <p className={`${styles.paragraph} mt-4 max-w-[321px]`}>A new way to make the payments easy, reliable and secure.</p>
        </div>

        <div className='flex-[1.5] flex flex-row justify-between flex-wrap md:mt-0 mt-10'>
          {
            footerLinks.map((footerlink) => (
              <div key={footerlink.links} className="flex flex-col ss:my-0 my-4 min-w-[150px]">
                <h4 className='font-poppins text-medium leading-[27px]
                text-[18px] text-white'>{footerlink.title}</h4>
                <ul className='list-none mt-4'>
                  {
                    footerlink.links.map((link, index) => (
                      <li key={index} className={`font-poppins text-normal text-[16px] leading-[24px] text-dimWhite hover:text-secondary cursor-pointer ${footerlink.links.length !== index ? 'mb-4' : 'mb-0'}`}>{link.name}</li>
                    ))
                  }
                </ul>
              </div>
            ))
          }
        </div>
      </div>

      <div className='w-full flex md:flex-row flex-col justify-between items-center pt-6 border-t-[1px] border-t-[#3F3E45]'>
        <p className="font-poppins text-normal text-center text-[18px] leading-[27px] text-white">Copyright Ⓒ 2022 HooBank. All Rights Reserved.</p>

        <div className='flex flex-row md:mt-0 mt-6'>
          {
            socialMedia.map((social, index) => (
              <img src={social.icon} alt={social.id} key={social.id} className={`w-[21px] h-[21px] object-contain cursor-pointer ${index !== socialMedia.length - 1 ? 'mr-6' : 'mr-0'}`} onClick={()=>window.open(social.link)} />
            ))
          }
        </div>
      </div>

    </section>
  )
}

export default Footer