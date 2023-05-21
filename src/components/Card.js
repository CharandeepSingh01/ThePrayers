import React from "react";
import "./Card.css";


const Card = (props) => {
  return (
    <div style={{backgroundImage:`url(${props.bgcolor})`,backgroundSize:"100% 100%"}} className="card">
      <div className="cardtitle">{props.title}</div>
      
    </div>
  );
}

export default Card;