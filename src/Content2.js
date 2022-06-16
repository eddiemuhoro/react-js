import React from 'react'
import { useState } from "react";
import "./App.css";
import background from './Tests.js/bugatti1.jpg'
import me from './pages/me.jpg'
const Content2 = () => {
    const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <div style={{ backgroundImage: `url(${background})` ,backgroundRepeat:'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center center',
    height:'100vh'
     }}>
    <h2>Content 2</h2>
    <hr />
    <div style={{display:'flex'}}>
      <div className="calcs contentsOf2">
      <h3>Age</h3>
        {/* <img src={me} /> */}

      </div>
      <div className="calcs contentsOf2">
      <h3>Age</h3>
        
      </div>
    </div>
  </div>
  )
}

export default Content2