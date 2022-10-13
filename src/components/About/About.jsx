import React from 'react'
import '../About/about.css'
import IMG2 from '../../Images/about1.jpeg'

function About() {
  return (
    <>
      <div className='about_up'>
        <h5>Get to know</h5>
        <h2>---------About Me---------</h2>
      </div>
      <div className='about_down'>
        <div className='down_image'>
          <img src={IMG2} />
        </div>
        <div className='about_down-right'>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea magni quaerat sint, at laboriosam illo a aut nulla debitis dicta? Eaque voluptatem fugit nam quidem dolorem reprehenderit sequi quos distinctio?</p>
          <button className='btn_primary'>Let's talk</button>
        </div>
      </div>
    </>
  )
}

export default About