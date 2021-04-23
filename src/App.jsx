import React from "react"; 
import Home from "./component/Home";
import HomeTwo from "./component/HomeTwo"; 
import "./style.scss"; 
import Navbar from "./component/Navbar";
import HomeThree from "./component/HomeThree";
import HomeFour from "./component/HomeFour"; 
import HomeBookNow from "./component/HomeBookNow";  
import {BrowserRouter as Router, Switch, Route } from "react-router-dom"; 

function App() {
  return (
    <div className="mainApp">
     <Router>
     
     <Navbar />

     <Switch>

    <Route exact path="/" component={Home} />
    <Route exact path="/HomeTwo" component={HomeTwo} />
   <Route exact path="/HomeThree" component={HomeThree} />
   <Route exact path="/HomeFour" component={HomeFour} /> 
   <Route exact path="/HomeBookNow" component={HomeBookNow} /> 

   


</Switch>

     

</Router>

    </div>
  );
}

export default App;
