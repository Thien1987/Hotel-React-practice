import React from 'react';
import room1 from "../images/room1.jpg";
import room2 from "../images/room2.jpg";
import room3 from "../images/room3.jpg";
import room4 from "../images/room4.jpg";

function CardThird() {
    return (
        <div className="cardThirdBox">
        


        <div className="cardThirdTitle">
            <h1> Our Luxury Accomodation </h1>
        </div>



        <div className="cardThirdImg">

            
            <img className="thirdButton" src={room1} width="350" height="300" />
            
            {/* <div>

            <div className = "img-text"><h4>Amazon Room </h4> 
                <button> View More </button>
            </div>
               
            </div> */}
            <img className="thirdButton" src={room2} width="350" height="300" />
           
           
            {/* <div>

            <div className = "img-text"><h4>Amazon Room </h4> 
                <button> View More </button>
            </div>
               
            </div> */}


            <img className="thirdButton" src={room3} width="350" height="300" />
            
            
            {/* <div>

            <div className = "img-text"><h4>Amazon Room </h4> 
                <button> View More </button>
            </div>
               
            </div> */}


            <img className="thirdButton" src={room4} width="350" height="300" />
            
            
            {/* <div>

            <div className = "img-text"><h4>Amazon Room </h4> 
                <button> View More </button>
            </div>
               
            </div> */}
      

        </div>
            
        </div>
    )
}

export default CardThird
