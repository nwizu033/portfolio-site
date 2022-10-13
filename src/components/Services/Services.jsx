import React from 'react'
import '../Services/services.css'

function Services() {
  return (
    <>
      <div className='services_up'>
          <h5>what I offer</h5>
          <h2>--------Services--------</h2>
      </div>
      
      <div className='services_down'>
        <div>
          <h4>Web Development</h4>
          <ul>
            <li>Frontend Development</li>
            <li>Responsive web design</li>
          </ul>
        </div>

        <div>
        <h4>Blockchain Development</h4>
          <ul>
            <li>Writing smart contracts</li>
            <li>Deploying smart contracts</li>
            <li>ERC20 tokens</li>
            <li>NFT creation</li>
            <li>Frontend integration</li>
          </ul>
        </div>

        <div>
        <h4>Teaching</h4>
          <ul>
            <li>HTML, CSS & Javascript</li>
            <li>Blockchain Fundamentals</li>
            <li>Solidity</li>
            <li>Frontend integration</li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default Services