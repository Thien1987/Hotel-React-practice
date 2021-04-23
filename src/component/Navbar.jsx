import React from 'react'
import PolymerIcon from '@material-ui/icons/Polymer';
import { Link, Route } from 'react-router-dom';

function Navbar() {
    return (
        
        <header className="headNavbar">
            <div class="row">
                <div class="col-lg-6">
                    <div class="logo">
                        <Link to="/"> <a className="logoTitle" href="#" >Moon's Hotel  <PolymerIcon /></a> </Link>
                    </div>
                </div>

            <div class="col-lg-6">
                <div class="navigation">
                    <ul>
                        <Link to="/"><li><button  type="button" class="btn btn-primary  loveIt">Home</button></li> </Link>
                        <Link to="/HomeTwo"><li><button  type="button" class="btn btn-primary  loveIt">Info</button></li></Link>
                        <Link to="/HomeThree"><li><button type="button" class="btn btn-primary  loveIt">Contact</button></li></Link>
                        <Link to="/HomeFour"><li><button type="button" class="btn btn-primary  loveIt">Activities</button></li></Link>
                        <Link to="/HomeBookNow"><li><button type="button" class="btn btn-primary bookNow">Book Now</button></li></Link>
                    </ul>

                </div>

            </div>

            </div>
        </header>

    )
}

export default Navbar
