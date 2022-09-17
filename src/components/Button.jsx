import React from 'react'

const Button = ({ styles, children }) => (
  <button type='button' className={`px-6 py-4 font-poppins font-medium text-[18px] text-primary bg-blue-gradient rounded-[10px] outline-none focus:outline-none ${styles}`}>
    {children}
  </button>
)


export default Button