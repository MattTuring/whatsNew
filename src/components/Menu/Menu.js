import React from 'react';
import './Menu.css'

import camera from '../../img/camera.svg'
import robot from '../../img/robot.svg'
import place from '../../img/place.svg'
import space from '../../img/space-shuttle.svg'
import heart from '../../img/heartbeat.svg'

const Menu = (props) => {
  return (
    <nav onClick={props.onClick}>
      <h1><span>What's</span><span className='yellow'>New?</span></h1>
      <section id='local'> <img alt='place' className='navImg' src={place}/>Local News</section>
      <section id='technology'> <img alt='techology' className='navImg' src={robot}/>Technology</section>
      <section id='entertainment'> <img alt='entertainment' className='navImg' src={camera}/>Entertainment</section>
      <section id='science'> <img alt='science' className='navImg' src={space}/>Science</section>
      <section id='health'> <img alt='health' className='navImg' src={heart}/>Health</section>
    </nav>
  )
}

export default Menu;
