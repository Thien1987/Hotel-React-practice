import React from 'react'
import { Link, Route } from 'react-router-dom';
import Hero from "./Hero"; 
import Card from "./Card"; 
import CardSecond from "./CardSecond"; 
import CardThird from "./CardThird"; 
import CardFourth from "./CardFourth"; 
import CardFifth from "./CardFifth"; 
import Footer from "./Footer";

function Home() {
    return (
        <>

        <Hero/>
        <Card/>
        <CardSecond />
        <CardThird />
        <CardFourth />
        <CardFifth />


        <Footer />







        </>
    )
}

export default Home
