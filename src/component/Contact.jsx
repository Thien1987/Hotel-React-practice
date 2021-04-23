import React from 'react';
import Footer from "./Footer";

function Contact() {
    return (
        <div className = "contactContainer">

        <div>

        <h1>Contact</h1>

        </div>



        <div className="inputBox">

        <div className= "inputRow">

            <label for="start">First Name:</label> <br />
            <input  className= "inputBox2" type="text" id="text1" name="trip-text1"
             />

        </div>

        <div className= "inputRow">

            <label for="start">Last Name:</label> <br />
            <input  className= "inputBox2" type="text" id="text2" name="trip-text2"
             />

        </div>

        <div className= "inputRow">

            <label for="start">Email:</label> <br />
            <input  className= "inputBox2" type="email" id="email" name="trip-email"/>
            
            

        </div>

        <div className= "inputRow">

            <label for="start">Website/Url:</label> <br />
            <input  className= "inputBox2" type="url" id="url" name="trip-url"/>

        </div>

        
       <div className= "inputRow">

       <label for="start">Comment or Messages:</label><br />
       <textarea className= "inputBox2" rows="9" cols="120" name="comment" form="usrform"></textarea>


       </div>


       <div className="inputRow">

       <button className= "contactButton">Submit</button>
        
       </div>


        
        </div>


            
        </div>


       
    )
}



export default Contact
