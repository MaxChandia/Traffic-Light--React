import React from "react";
import { useState } from "react";


function LightTraffic () {
    const [color1, setColor1] = useState("#A42509");

  const toggleColor = () => {
    setColor1(prevColor => prevColor === "#A42509" ? 'red' : '#A42509');
  };

  const [color2, setColor2] = useState("#CBD11C");

  const toggleColor2 = () => {
    setColor2(prevColor => prevColor === "#CBD11C " ? '#F3FA23' : '#CBD11C ');
  };

  const [color3, setColor3] = useState("green");

  const toggleColor3 = () => {
    setColor3(prevColor => prevColor === "green" ? 'green' : 'green');
  };

    return (
    <div className="container">
         <div className="semaforo" style={{
            width: "80px",
            height: "170px",
            background: "black",
            borderRadius: "10%"
        }}>
            <div onClick= {toggleColor} className="red" style={{
                width: "50px",
                height: "50px",
                borderRadius: "50%",
                background: color1,
                margin: "5px 15px"
            }}></div>
            <div onClick= {toggleColor2} className="red" style={{
                width: "50px",
                height: "50px",
                borderRadius: "50%",
                background: color2,
                margin: "5px 15px"
            }}></div>
            <div onClick= {toggleColor3} className="red" style={{
                width: "50px",
                height: "50px",
                borderRadius: "50%",
                background: color3,
                margin: "5px 15px",
            }}></div>
            

        </div>
    </div>
        
    );
}

export default LightTraffic;