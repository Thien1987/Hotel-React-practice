import React from 'react'
import seaplane from "../images/seaplane.jpg"; 
import snorkeling from "../images/snorkeling.jpg"; 
import wellness from "../images/wellness.jpg"; 
import jetski from "../images/jetski.jpg"; 

function Activities() {
    return (
        <div className="activitiesContainer">

        <div className="activitiesTitle">
        
        <h1>Activities</h1> <br /> 
        <br/>

        <p>Get the Most of your Day </p>

         </div>

        <div className="imgGroup">

        <div>
        <label className="activitiesLabel">Seaplane</label> <br />
        <img className= "activitiesImg" src={seaplane} />
        </div>


        {/* <div className="img__Overlay">
            <div className="imgTitle">Seaplane</div>
            <p className="imgDescription">button</p>
        </div> */}
        
        
        <div>
        <label className="activitiesLabel">snorkeling</label> <br />   
        <img className= "activitiesImg" src={snorkeling}  />
        </div>

        <div>
        <label className="activitiesLabel">wellness</label> <br />
        <img className= "activitiesImg" src={wellness}  />
        </div>


        <div>
        <label className="activitiesLabel">Jet Ski</label> <br />
        <img className= "activitiesImg" src={jetski}  />
        </div>



        </div>

        </div>
    )
}

export default Activities
