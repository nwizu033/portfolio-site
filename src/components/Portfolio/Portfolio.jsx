import React from 'react'
import '../Portfolio/portfolio.css'
import IMG1 from '../../Images/about1.jpeg'

function Portfolio() {
  return (
    <>
    <div className='portfolio_up'>
      <h5>My recent works?</h5>
      <h2>--------Portfolio--------</h2>
    </div>
    
    <div className='project_container'>
      <div className='project'>
        <img src={IMG1}/>
        <div className='project_down'>
        <h3>Title</h3>
        <button>Github</button>
        <button>Live Demo</button>
        </div>
      </div>
      <div className='project'>
        <img src={IMG1}/>
        <div className='project_down'>
        <h3>Title</h3>
        <button>Github</button>
        <button>Live Demo</button>
        </div>
      </div>
      <div className='project'>
        <img src={IMG1}/>
        <div className='project_down'>
        <h3>Title</h3>
        <button>Github</button>
        <button>Live Demo</button>
        </div>
      </div>
      <div className='project'>
        <img src={IMG1}/>
        <div className='project_down'>
        <h3>Title</h3>
        <button>Github</button>
        <button>Live Demo</button>
        </div>
      </div>
      <div className='project'>
        <img src={IMG1}/>
        <div className='project_down'>
        <h3>Title</h3>
        <button>Github</button>
        <button>Live Demo</button>
        </div>
      </div>
      <div className='project'>
        <img src={IMG1}/>
        <div className='project_down'>
        <h3>Title</h3>
        <button>Github</button>
        <button>Live Demo</button>
        </div>
      </div>
     
    </div>
      
    </>
  )
}

export default Portfolio