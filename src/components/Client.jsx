import React from 'react'
import { clients } from '../constant';
import styles from '../style';

const Client = () => {
  return (
    <section className={`${styles.flexCenter} my-4`}>
      <div className={`${styles.flexCenter} flex-wrap w-full`}>
        {
          clients.map(({ id, logo }) => (
            <div key={id} className={`${styles.flexCenter} flex-1 sm:min-w-[192px] min-w-[120px] m-5`}>
              <img src={logo} alt="logo" className='sm:w-[192px] w-[100px] object-contain' />
            </div>
          ))
        }
      </div>
    </section>
  )
}

export default Client