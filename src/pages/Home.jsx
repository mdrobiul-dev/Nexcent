import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Footer from '../components/Footer';
import Client from '../components/Client';
import Community from '../components/Community';

const Home = () => {
  return (
    <>
    <Navbar />
    <Hero />
    <Client />
    <Community />
    <Footer />
    </>
  );
};

export default Home;
