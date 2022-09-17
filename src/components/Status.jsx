import React from 'react'
import { stats } from '../constant';
import styles from '../style';

const Status = () => {
  return (
    <section className={`${styles.flexCenter} flex-row flex-wrap sm:mb-20 mb-6`}>
      {
        stats.map(sta => (
          <div key={sta.id} className={`flex-1 flex items-center justify-start flex-row m-3`}>
            <h4 className='text-white font-poppins font-semibold xs:text-[40.89px] text-[30.89] xs:leading-[53.16px] leading-[43.16px]'>{sta.value}</h4>
            <p className='text-gradient font-poppins font-normal xs:text-[20.45px] text-[15.45px] xs:leading-[26.58px] leading-[21.58px] uppercase ml-3'>{sta.title}</p>
          </div>
        ))
      }
    </section>
  )
}

export default Status
