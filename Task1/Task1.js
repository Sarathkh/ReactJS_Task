import React from "react";
import Img from '../Images/sarath.jpg';
function Task1(){
return(

    <>
  
  <div className="Container">
    <h1>Congratulations</h1>
    <div className="insideCard">
    <img src={Img} className="sarath"/>
     
    <h1> Sarath</h1>
    <p>BSC Computer science</p>
    <p>KG college of arts and science,saravanampatti</p>
    <img src="https://assets.ccbp.in/frontend/react-js/congrats-card-watch-img.png" />
    </div>
  </div>

    </>
)

}
export default Task1;
