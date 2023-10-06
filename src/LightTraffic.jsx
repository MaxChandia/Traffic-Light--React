import React from "react";
import { useState } from "react";


function LightTraffic () {
    const [colorRed, setColorRed] = useState("#A42509");

  const toggleColorRed = () => {
    setColorRed(prevColor => prevColor === "#A42509" ? 'red' : '#A42509');
  };

  const [colorYellow, setColorYellow] = useState("#CBD11C");

  const toggleColorYellow = () => {
    setColorYellow(prevColor => prevColor === "#CBD11C " ? '#F3FA23' : '#CBD11C ');
  };

  const [colorGreen, setColorGreen] = useState("#1B6921");

  const toggleColorGreen = () => {
    setColorGreen(prevColor => prevColor === "#1B6921" ? '#30D53D' : '#1B6921');
  };

    return (
    <div className="container">
            <div className="topSemaforo" style={{width: "15px",
        height: "50px",
        background: "black",
        marginLeft: "auto",
        marginRight: "auto",
        marginBottom: "0px"
        }}></div>
         <div className="semaforo" style={{
            width: "80px",
            height: "170px",
            background: "black",
            borderRadius: "10%",
            marginLeft: "auto",
            marginRight: "auto",
            marginTop: "0px"
            
        }}>
            <div onClick= {toggleColorRed} className="redLight" style={{
                width: "50px",
                height: "50px",
                borderRadius: "50%",
                background: colorRed,
                margin: "0px 15px",
            }}></div>
            <div onClick= {toggleColorYellow} className="yellowLight" style={{
                width: "50px",
                height: "50px",
                borderRadius: "50%",
                background: colorYellow,
                margin: "5px 15px"
            }}></div>
            <div onClick= {toggleColorGreen} className="greenLight" style={{
                width: "50px",
                height: "50px",
                borderRadius: "50%",
                background: colorGreen,
                margin: "5px 15px",
            }}></div>
            

        </div>
    </div>
        
    );
}

export default LightTraffic;