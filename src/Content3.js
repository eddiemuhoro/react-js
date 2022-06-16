import React from 'react'
import { useState } from "react";
import "./App.css";
import background from './Tests.js/bugatti1.jpg'
import me from './pages/me.jpg'
const Content3 = () => {
    const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <div
    style={{ backgroundImage: `url(${background})` ,backgroundRepeat:'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center center',
    height:'100vh'
     }}
  >
    <h2>Ann</h2>
    <hr />
   <div className='contentsOf3'>
     {/* <img src={me} /> */}
     <div className="descriptionOf3">
       <p>
         Lore Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
      voluptatum 
       </p>
     </div>
    </div>
  </div>
  )
}

export default Content3