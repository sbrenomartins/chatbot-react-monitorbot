import React, { Component } from 'react'
import { InputGroup, Input, InputGroupAddon, Button } from 'reactstrap';

export default class ChatMensagem extends Component {
  render() {
    return (
      <div className="mensagem"> 
        <InputGroup>
          <Input placeholder="Digite sua mensagem" />
          <InputGroupAddon addonType="append">
            <Button color="info"> Enviar </Button>
          </InputGroupAddon>
        </InputGroup>
      </div>
    )
  }
}
