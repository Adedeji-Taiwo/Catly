import React from "react"
import Header from '../component/Header';
import Main from "./Main";
import Footer from '../component/Footer';

const Home = () => {
    const date = new Date().getFullYear();
    return(   
    <div className="container">
        <Header />
        <Main />
        <Footer date={date}/>
    </div>
    )}

export default Home;