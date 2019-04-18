import React, { Component } from 'react';

import './index.css';
import ChatHeader from './ChatHeader';
import ChatConversa from './ChatConversa';
import ChatMensagem from './ChatMensagem';

// import { Container } from './styles';

export default class Chatbot extends Component {
  render() {
    return (
        <div className="chatbot">
            <ChatHeader />
            <ChatConversa />
            <ChatMensagem />
        </div>
    );
  }
}
