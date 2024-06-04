import React, { useState ,useEffect} from 'react'
import { FaHome,FaProductHunt,FaSignInAlt} from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { GiHamburgerMenu } from "react-icons/gi";
import { BiSolidOffer } from "react-icons/bi";
import './sidebar.css'
const Sidebar = () => {
    const [isMobile,setIsMobile]=useState(window.innerWidth>786);
  
  const handleClick=()=>{
    setIsMobile(!isMobile)

  }
 useEffect(()=>{
  window.addEventListener('resize',()=>setIsMobile(window.innerWidth > 786))
  return window.addEventListener('resize',()=>setIsMobile(window.innerWidth > 786))
 },[])
  
  return (
    <>
  <div className='sidebar'>
  <div className="hamburger" style={{ fontSize: '2rem', cursor: 'pointer' }} onClick={handleClick}>
      {isMobile?<IoClose /> :<GiHamburgerMenu />}
      

    </div>
  
    <ul className={isMobile?'open':'nav'}>
      <li className='navItem'>
          <FaHome/>
         <span>Home</span> 
      </li>
      <li className='navItem'>
          <FaProductHunt></FaProductHunt>
          <span>Products</span>
      </li>
      <li className='navItem'>
          <FaSignInAlt></FaSignInAlt>
          <span>Sign in</span>
      </li>
      <li className='navItem'>
          <BiSolidOffer></BiSolidOffer>
          <span>Offer</span>
      </li>
    </ul>
  </div>
    </>
  )
}

export default Sidebar;
