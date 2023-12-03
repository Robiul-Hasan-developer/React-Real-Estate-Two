import React from 'react';
import Hero from './hero/Hero';
import Header from '../common/header/Header';
import Footer from '../common/footer/Footer';
import Brand from './brand/Brand';
import Residence from './residence/Residence';
import Faqs from './faq/Faqs';
import Contact from './contact/Contact';
import GetStart from './getStart/GetStart';

const Home = () => {
    return (
        <>
            <Header/>
            <Hero/>   
            <Brand/>   
            <Residence/>   
            <Faqs/>   
            <Contact/>   
            <GetStart/>   
            <Footer/>  
        </>
    );
};

export default Home;