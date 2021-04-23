import React from 'react'

function BookNow() {
    return (
        <div className="cardFourthBox1">
            
            
            <div className="fourthTitle1">

            <h1 className = "fourthTitleText1"> Book A Room </h1>

            </div>


            <div className="fourthInput1">

            
            <div className= "inputBox1">

            <label for="start">Check In:</label>
            <input  className= "inputBoxDate1" type="date" id="start" name="trip-start"
            // value="2021-01-01"
            min="2021-01-01" max="2022-12-31" />
            
            </div>
            
            <div className= "inputBox1">

            <label for="start">Check Out:</label>
            
            <input  className= "inputBoxDate1" type="date" id="start" name="trip-start"
            // value="2021-01-01"
            min="2021-01-01" max="2022-12-31" />
            
            </div>


            <div className= "inputBox1">

            <label for="start">Adult:</label>
            
            <input className= "inputBoxAmount1" type="number" id="quantity" name="quantity" min="1" max="5"
             />
            
            </div>


            <div className= "inputBox1">

            <label for="start">Children:</label>
            
            <input className= "inputBoxAmount1" type="number" id="quantity" name="quantity" min="0" max="5"
             />
                  
            </div>

            <div className= "inputBox1">

            <label for="submit">&nbsp;</label>
            
            <input className="fourthButton1" type="submit" value="Search"/>
                  
            </div>



            </div>


            
            
        </div>
    )
}

export default BookNow
