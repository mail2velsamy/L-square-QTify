import React from 'react';
import './App.css';   
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import CardComponent from './components/Card/CardComponent';
import Section from './components/Section/Section';
import TopAlbum from './components/Album/TopAlbum';
import NewAlbum from './components/Album/NewAlbum';

function App() {
  return (
    <div className="App">
     <Navbar/> 
     <Hero/>
    <TopAlbum/> 
    <NewAlbum/>
    </div>
  );
}

export default App;
