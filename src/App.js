import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Chatbot from './components/Chatbot';
import Footer from './components/Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Chatbot />
        <Footer />
      </div>
    );
  }
}

export default App;
