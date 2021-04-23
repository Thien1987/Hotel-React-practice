import React from 'react';
import resort1 from "../images/resort1.jpg"; 
import resort2 from "../images/resort2.jpg";
import resort3 from "../images/resort3.jpg";
import resort4 from "../images/resort4.jpg"; 
import resort5 from "../images/resort5.jpg"; 
import resort6 from "../images/resort6.jpg"; 



function InfoTwo() {
    return (
        

        <div className="infoTwoContainer" >


          <p   className="infoTwoPara">
          
          This is some dummy copy. You’re not really supposed to read this dummy copy, it is just a place holder for people who need some type to visualize what the actual 
        copy might look like if it were real content.<br/>
        <br/>
        <br/>

        In today’s competitive market environment, the body copy of your entry must 
        lead the reader through a series of disarmingly simple thoughts. <br/>
        <br/>
        <br/>

        If you want to read, I might suggest a good book, perhaps Melville. 
        That’s why they call it, the dummy copy. This, of course, 
        is not the real copy for this entry. Rest assured, the words will expand the concept. With clarity. Conviction. And a little wit.
        
          </p>
        <div className="infoTwoPictures">

        <div className="imagesContainer">

        <img class=" imagesSet" src={resort2} width="350" height="300"/>
        <img class=" imagesSet" src={resort1} width="350" height="300"/>
        <img class=" imagesSet" src={resort3} width="350" height="300"/>
        <br/>
        <img class=" imagesSet" src={resort4} width="350" height="300"/>
        <img class=" imagesSet" src={resort5} width="350" height="300"/>
        <img class=" imagesSet" src={resort6} width="350" height="300"/>

        </div>
        
          </div>

          <div className="bottomText">

            <p className="bottomPara">
            In today’s competitive market environment, the body copy of your entry must lead the reader through a series of disarmingly simple thoughts.
            <br/>
            <br/>
            All your supporting arguments must be communicated with simplicity and charm. 
            And in such a way that the reader will read on. (After all, that’s a reader’s job: 
            to read, isn’t it?) And by the time your readers have reached this point in the 
            finished copy, you will have convinced them that you not only 
            respect their intelligence, but you also understand their needs as consumers.
            </p>

          </div>
          

          </div>

        
    )
}

export default InfoTwo
