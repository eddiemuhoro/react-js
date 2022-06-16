import React, { useState } from 'react'
import Content1 from '../Content1';
import Content2 from '../Content2';
import Content3 from '../Content3';

const Tests = () => {
    const[toggleState, setToggleState] = useState(1);
    const toggleTab = (index)=> setToggleState(index)
  return (
      <>
        <div className='top-bar'>
            <div className='logo'>
                <h3>Bugatti</h3>
            </div>
            <div className='test'>
                <button className={toggleState === 1 ? "tab active" : 'tab'} onClick={()=> toggleTab(1)}>Home</button>
                <button className={toggleState===2 ? "tab active" : 'tab'} onClick={()=> toggleTab(2)}>About us</button>
                <button className={toggleState === 3 ? "tab active" : 'tab' } onClick={()=> toggleTab(3)}>Contacts</button>
            </div>
        </div>
        <div className='contents'>
            <div className={toggleState===1 ? 'content-active' : 'content'}>
                <Content1 />
            </div>
            <div className={toggleState===2 ? 'content-active' : 'content'}>
                <Content2 />
            </div>
            <div className={toggleState===3 ? 'content-active' : 'content'}>
                <Content3 />
            </div>
        </div>
    </>
  )
  }

export default Tests