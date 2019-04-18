import React, { Component } from 'react';
import './App.css';

import { Provider } from 'react-redux';
import store from './store';

import Header from './components/Header';
import Chatbot from './components/Chatbot';
import Footer from './components/Footer';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <Header />
          <Chatbot />
          <Footer />
        </div>
      </Provider>
    );
  }
}

export default App;
