import React from 'react';
import './App.css';   
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import CardComponent from './components/Card/CardComponent';
import Section from './components/Section/Section';
import TopAlbum from './components/Album/TopAlbum';
import NewAlbum from './components/Album/NewAlbum';
import SongSection from './components/Album/SongSection';

function App() {
  return (
    <div className="App">
     <Navbar/> 
     <Hero/>
    <TopAlbum/> 
    <hr style={{ border: '1px solid green', marginTop: '0', marginBottom: '0' }} />
    <NewAlbum/>
    <hr style={{ border: '1px solid green', marginTop: '0', marginBottom: '0' }} />
    <SongSection/>
    </div>
  );
}

export default App;
