import React, { Component } from 'react'
import { Alert, Badge } from 'reactstrap';

export default class ChatConversa extends Component {
  render() {
    return (
      <div className="conversa">
        <div className="chatbot-message">
          <Badge color="info">Monitorbot disse:</Badge>
          <Alert color="info">Olá. Seja bem vindo! Eu sou o MonitorBot e estou aqui para te ajudar com suas dúvidas sobre Programação Orientada à Objetos. Então, me diz, em que posso te ajudar hoje?</Alert>
        </div>

        <div className="user-message">
          <Badge color="success">Você disse:</Badge>
          <Alert color="success">Olá!</Alert>
        </div>
      </div>
    )
  }
}
