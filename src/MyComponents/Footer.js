import React from 'react'
import './Footercss.css';

export const Footer =() => {
  return (
    <footer className='py-2 StyleFooter'  style={{position:"relative",bottom:"0px"}}>
      <p className='text-center ' style={{color:"white",fontSize:"15px"}}> | MyToDoList.com copyright&copy; |</p>
    </footer>
  )
}