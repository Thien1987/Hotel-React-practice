import React from 'react'
import { Link, Route } from 'react-router-dom';

function CardSecond() {
    return (
        <div className="cardTwo">

        <div className="cardTwoContainer">

        <h1 className="cardTwoTitle"> Explore the many activities</h1>

        <p className="cardTwoPara">Enjoy one of the best dive and snorkelling spots on the planet and 
        explore the world beneath <br/>
        
         the water, go deep sea fishing, kayak around the 
        island at sunrise <br/>
        
        or take an excursion to a nearby island to explore underwater 
        caves before embarking on a trek to a secret waterfall. </p>

       <Link to="/HomeTwo"> <button className="cardTwoButton">Explore </button> </Link>
            
        </div>

        </div>
    )
}

export default CardSecond
