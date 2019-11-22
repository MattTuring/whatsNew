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
      <section data-type='local'> <img data-type='local' alt='place' className='navImg' src={place}/><span data-type='local'>Local News</span></section>
      <section data-type='technology'> <img data-type='technology' alt='technology' className='navImg' src={robot}/><span data-type='technology'>Technology</span></section>
      <section data-type='entertainment'> <img data-type='entertainment' alt='entertainment' className='navImg' src={camera}/><span data-type='entertainment'>Entertainment</span></section>
      <section data-type='science'> <img data-type='science' alt='science' className='navImg' src={space}/><span data-type='science'>Science</span></section>
      <section data-type='health'> <img data-type='health' alt='health' className='navImg' src={heart}/><span data-type='health'>Health</span></section>
    </nav>
  )
}

export default Menu;
