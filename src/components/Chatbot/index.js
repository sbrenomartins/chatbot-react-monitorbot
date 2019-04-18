import React, { Component } from 'react';
import ChatHeader from './ChatHeader';
import ChatConversa from './ChatConversa';
import ChatMensagem from './ChatMensagem';

import './chatbot.css';
// import { Container } from './styles';

export default class Chatbot extends Component {
  render() {
    return (
        <div className="chatbot">
            <div className="chat-conteudo">
                <ChatHeader />
                <ChatConversa />
                <ChatMensagem />
            </div>
        </div>
    );
  }
}
