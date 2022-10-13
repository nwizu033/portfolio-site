import React from 'react'
import '../Experience/experience.css';

function Experience() {
  return (
    <>
    <div className='experience_up'>
        <h5>What skills I possess?</h5>
        <h2>---------My experience---------</h2>
    </div>
    <div className='experience_down'>
        <div>
          <h3>Front End</h3>
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>Javascript</li>
            <li>React</li>
          </ul>
        </div>
        <div>
          <h3>Blockchain</h3>
          <ul>
            <li>Solidity</li>
            <li>Hardhat</li>
            <li>Ethers.js</li>
            <li>Web3modal</li>
          </ul>
        </div>
        <div>
          <h3>Soft Skills</h3>
          <ul>
            <li>Decision Making</li>
            <li>Team work</li>
            <li>Time Management</li>
            <li>Research</li>
            <li>Communication</li>
          </ul>
        </div>
    </div>
      
    </>
  )
}

export default Experience