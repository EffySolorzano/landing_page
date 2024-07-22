import React from 'react';
import Header from './components/header.js';
import Footer from './components/footer.js';
import LandingPage from './components/landingPage.js'
import './App.css';


function App() {
  return (
    <div className="App">
     <Header />
     <LandingPage />
     <Footer />
    </div>
  );
}

export default App;
