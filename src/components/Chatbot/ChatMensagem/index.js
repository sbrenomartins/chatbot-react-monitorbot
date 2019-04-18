import React, { Component } from 'react'
import { InputGroup, Input, InputGroupAddon, Button } from 'reactstrap';
import { connect } from 'react-redux';

import { enviaMensagem } from '../../../store/actions/chat';

class ChatMensagem extends Component {
  
  constructor(props){
    super(props)

    this.enviaTexto = this.enviaTexto.bind(this);
    this.enviaTextoBotao = this.enviaTextoBotao.bind(this);
  };

  state = {
    mensagem: "",
  };

  enviaTexto(e){
    if(e.keyCode === 13){
      console.log(e.target.value);
      this.props.enviaTexto(e.target.value);
      e.target.value = '';
    }
  }

  enviaTextoBotao(){
    console.log(this.state.mensagem);
    this.props.enviaTextoBotao(this.state.mensagem);
  } 

  render() {
    return (
      <div className="chat-mensagem"> 
        <InputGroup>
          <Input onKeyDown={this.enviaTexto} placeholder="Digite sua mensagem" onChange={e => this.setState({ mensagem: e.target.value })} />
          <InputGroupAddon addonType="append">
            <Button onClick={this.enviaTextoBotao} color="info"> Enviar </Button>
          </InputGroupAddon>
        </InputGroup>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch =>{
  return{
    enviaTexto: (msg) => dispatch(enviaMensagem(msg)),
    enviaTextoBotao: (msg) => dispatch(enviaMensagem(msg))
  }
}

export default connect(null, mapDispatchToProps)(ChatMensagem);