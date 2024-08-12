import React from "react";
import moon from "../Images/rcb.webp";
import Img from '../Images/MI.png';

function Task2(){
return(

    <>
  
  <div className="Container">
    <div className="insideCard">
        <h1>INDIAN SUPER LEAGUE</h1>
      <img src={moon} className="monish"/>
      <img src={Img} className="sarath"/>
    </div>
  </div>

    </>
)

}
export default Task2;