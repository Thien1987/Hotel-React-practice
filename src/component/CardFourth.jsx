import React from 'react'

function CardFourth() {
    return (
        <div className="cardFourthBox">
            
            
            <div className="fourthTitle">

            <h1 className = "fourthTitleText"> Book A Room </h1>

            </div>


            <div className="fourthInput">

            
            <div className= "inputBox">

            <label for="start">Check In:</label>
            <input  className= "inputBoxDate" type="date" id="start" name="trip-start"
            // value="2021-01-01"
            min="2021-01-01" max="2022-12-31" />
            
            </div>
            
            <div className= "inputBox">

            <label for="start">Check Out:</label>
            
            <input  className= "inputBoxDate" type="date" id="start" name="trip-start"
            // value="2021-01-01"
            min="2021-01-01" max="2022-12-31" />
            
            </div>


            <div className= "inputBox">

            <label for="start">Adult:</label>
            
            <input className= "inputBoxAmount" type="number" id="quantity" name="quantity" min="1" max="5"
             />
            
            </div>


            <div className= "inputBox">

            <label for="start">Children:</label>
            
            <input className= "inputBoxAmount" type="number" id="quantity" name="quantity" min="0" max="5"
             />
                  
            </div>

            <div className= "inputBox">

            <label for="submit">&nbsp;</label>
            
            <input className="fourthButton" type="submit" value="Search"/>
                  
            </div>



            </div>


            
            
        </div>
    )
}

export default CardFourth
