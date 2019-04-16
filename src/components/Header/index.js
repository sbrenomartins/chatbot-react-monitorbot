import React, { Component } from 'react';
import logo from '../../logo.svg';

// import { Container } from './styles';

export default class Header extends Component {
  render() {
    return (
        <div className="header">
            <header className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
            </header>
        </div>
    );
  }
}
