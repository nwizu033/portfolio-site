import React from 'react';
import '../Headings/header.css';
import IMG1 from '../../Images/header1.jpeg';

function Header() {
  return (
    <> 
    <div className='head'>
    <div className='head_up'>
    <h4>Hello I'm</h4>
      <h1>EKWE CHINIWIZU ANTHONY</h1>
      <h5>Fullstack Blockchain Developer</h5>
      <button>Download CV</button>
      <button>Let's connect</button>
    </div>
    <div className='head_down'>
        <div className='head_socials'>
            <i class="fa fa-linkedin-square" aria-hidden="true"></i>
            <i class="fa fa-github-square" aria-hidden="true"></i>
            <i class="fa fa-twitter-square" aria-hidden="true"></i>
        </div>
        <div className='head_image'>
            <img src={IMG1} />
        </div>
        <h5>Scroll</h5>
    </div>
    </div>
    
   
    </>
  )
}

export default Header