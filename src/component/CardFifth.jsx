import React from 'react';
import family from "../images/familybeach.jpg";

function CardFifth() {
    return (
        <div className="fifthCard">

        <div className ="imgBox">
        
        <img className="imgFifth" src={family} width="500" height="400" />
        
        </div>   
        
        <div className="fifthText">

        <h1 className= "fifthTitle">AN ISLAND ANTIDOTE TO EVERYDAY STRESS</h1>

        <p className="fifthPara" >
        Led by the island's foremost Yoga and Pilates instructors,our  <br/>
        daily classes in the breezy open-air beach pavilion and on the <br />
        sunset deck overlook the blue-hued beauty of the Caribbean. 
        </p>

        </div>   

        
            
        </div>
    )
}

export default CardFifth
