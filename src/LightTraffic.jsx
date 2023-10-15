import React from "react";
import { useState } from "react";


function LightTraffic () {
    const [color, setColor] = useState();
  
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
            <div onClick= {() => setColor("#A42509")} className="redLight" style={{
                width: "50px",
                height: "50px",
                borderRadius: "50%",
                background: color === "#A42509" ? 'red' : '#A42509',
                margin: "0px 15px",
            }}></div>
            <div onClick= {() => setColor("#CBD11C")} className="yellowLight" style={{
                width: "50px",
                height: "50px",
                borderRadius: "50%",
                background: color === "#CBD11C" ? '#F3FA23' : "#CBD11C",
                margin: "5px 15px"
            }}></div>
            <div onClick= {() => setColor("#1B6921")} className="greenLight" style={{
                width: "50px",
                height: "50px",
                borderRadius: "50%",
                background: color === "#1B6921" ? '#30D53D' : '#1B6921',
                margin: "5px 15px",
            }}></div>
            

        </div>
    </div>
        
    );
}

export default LightTraffic;