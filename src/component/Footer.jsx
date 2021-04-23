import React from 'react'
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import YouTubeIcon from '@material-ui/icons/YouTube';

function Footer() {

    const year = new Date(). getFullYear();

    return (
        
        <footer className="footerMain">
       
            
        

        <div className="footerSocialMedia">
        <h1 className = "footerTitle"> Follow us</h1>
        
        <div className= "socialBox">
        <a href="#" className = "social"><FacebookIcon/></a>
        <a href="#" className = "social"><TwitterIcon/></a>
        <a href="#" className = "social"><InstagramIcon/></a>
        <a href="#" className = "social"><YouTubeIcon/></a>

        </div>

        </div>

        <div className="footerBottom" > 

            <h1 className ="copyright" >Copyright © {year} </h1>

            <h1 className="design" >Designed By Thien Nguyen</h1>

        </div>

       

        </footer>    
        
    )
}

export default Footer
