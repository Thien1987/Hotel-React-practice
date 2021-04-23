import React from 'react'
import { Link, Route } from 'react-router-dom';

function Card() {
    return (
        <div className="newCards">

        <h1 className="cardIntro">
            Come and join the adventure!
        </h1>

        <p className="cardPara">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry.<br/> 
        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, <br/>
        when an unknown printer took a galley of type and scrambled it to make a type 
        specimen book. 
        .</p>

      
            
        <Link to="/HomeTwo"><button className="cardButton">Read More </button></Link>


        </div>
    )
}

export default Card
