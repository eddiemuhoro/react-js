import { useState } from "react";
import "./App.css";

import Content1 from "./Content1";
import Content2 from "./Content2";
import Content3 from "./Content3";

function Tabs() {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);//updates active CN
  };
  //
  return (
    <div className="container">
      <div className="bloc-tabs">
         
        <button
          className={toggleState === 1 ? "tabs active-tabs" : "tabs"}//if tab is '1' ? active
          onClick={() => toggleTab(1)}//sets toggletab to 1
        >
          Home
        </button>
        <button
          className={toggleState === 2 ? "tabs active-tabs" : "tabs"}//if toggle tab is 2 ? active
          onClick={() => toggleTab(2)}//set toggletab to 2
        >
          Gallery
        </button>
        <button
          className={toggleState === 3 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(3)}
        >
          Profile
        </button>
      </div>
      <div className="cc">
        <div 
              className={toggleState === 1 ? "content  active-content" : "content" }
                >
        <Content1 />
        </div>

        <div
              className={toggleState === 2 ? "content  active-content" : "content"}
                >
        <Content2 />

        </div>

        <div
            className={toggleState === 3 ? "content  active-content" : "content"}
            >
        <Content3 /> 
        </div>
      </div>
    </div>
  );
}

export default Tabs;
