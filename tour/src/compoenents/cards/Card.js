import React from 'react';
import {data} from "../helpers/data";
import "./Card.css"

const Card = () => {
    
    return (
        <div className="card_container">
            {data.map((card,index)=>{
                
                return(
                    <div className="cards" key={index}>
                        <div className="title">
                            <h1>{card.title}</h1>
                        </div>
                        <img  src={card.image} alt={card.title}></img>

                        <div className="card-over">
                           
                            <p>{card.desc}</p>
                        </div>
                        
                    </div>
                )
            })}
            
        </div>
    )
};

export default Card;