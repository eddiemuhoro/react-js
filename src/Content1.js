import React from 'react'
import { useState } from "react";
import "./App.css";
import background from './Tests.js/bugatti1.jpg'
import { FaBars, FaListUl } from 'react-icons/fa';

import Footer from './Footer';
import Logo from './Tests.js/Logo';
import Socials from './Tests.js/Socials';

const Content1 = () => {
    const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };
//
  return (
    <div className='content1' style={{ backgroundImage: `url(${background})` ,backgroundRepeat:'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center center',
    
     }}>
    <section className='content-section'>
      <div className='topper'>
        <div className='heading2'>
            <h1>DAY</h1>
        </div>
        <div className='car-type xtics'>
        <h3><FaListUl />Interior </h3>
        <p><ul>
            <li>Shiny blab-pool </li>
            <li>Black-ripple reflector</li>
            <li>Luminicent glow</li>
            </ul></p>
        </div>
        <div className='car-type xtics'>
        <h3><FaListUl />Interior </h3>
        <p><ul>
            <li>Wowow dash-board</li>
            <li>Strayback type</li>
            <li>Luminicent glow</li>
            </ul></p>
        </div>
      </div>
      <div>
      <div className='heading2'>
            <h1>NIGHT</h1>
        </div>
        <div className='xtics'>
          <h3><FaListUl /> Interior Lights</h3>
          <p><ul>
            <li>245MW</li>
            <li>Strayback type</li>
            <li>Luminicent glow</li>
            </ul></p>
        </div>
        <div className='xtics'>
          <h3><FaListUl />Exterior Lights</h3>
          <p><ul>
            <li>245MW</li>
            <li>Strayback type</li>
            <li>Luminicent glow</li>
            </ul></p>
        </div>
      </div>
    </section>
      
     <div className='social-media'>
       
     </div>
     <Footer style={{bottom:'0'}}/>
     <Socials />
  </div>
  )
  
}


export default Content1