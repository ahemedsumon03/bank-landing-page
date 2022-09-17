import React from 'react'
import { bill, apple, google } from '../assets';
import styles, { layout } from '../style';

const Billings = () => {
  return (
    <section id="product" className={`${layout.sectionReverse}`}>
      <div className={`${layout.sectionImgReverse}`}>
        <img className='h-[100%] w-[100%] z-[5]' src={bill} alt="bill" />

        {/* gradient start */}

        <div className='absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient' />
        <div className='absolute z-[0] -left-1/2 h-[50%] w-[50%] bottom-0 rounded-full pink__gradient' />
        {/* gradient fail */}

      </div>

      <div className={`${layout.sectionInfo}`}>
        <h2 className={`${styles.heading2}`}>Easily control your <br className="sm:block hidden" /> billing &
          invoicing
        </h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}> Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio
          aenean neque. Fusce ipsum orci rhoncus aliporttitor integer platea
          placerat.</p>

        <div className='flex flex-row flex-wrap sm:mt-10 mt-6'>
          <img src={apple} alt="apple__store" className='w-[128.86px] h-[42.05px] object-contain mr-5 cursor-pointer' />
          <img src={google} alt="google__store" className='w-[128.86px] h-[42.05px] object-contain cursor-pointer' />
        </div>

      </div>
    </section>
  )
}

export default Billings