import React from 'react'
import { Link } from 'react-router-dom'

const Header :React.FC= () => {
  return (
    <div className='flex gap-10 justify-end px-20 p-4 '>
      <Link to={"/product"}>Product</Link>
      <Link to={"/"}>Contact Us</Link>
    </div>
  )
}

export default Header
