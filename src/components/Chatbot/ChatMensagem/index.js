import React, { Component } from 'react'
import { connect } from 'react-redux';
import { InputGroup, Input, InputGroupAddon, Button, Form } from 'reactstrap';

import { enviaMensagem } from '../../../store/actions/chat';
import { conversaWatson } from '../../../store/actions/watson';

class ChatMensagem extends Component {
  
  constructor(props){
    super(props)

    this.enviaTexto = this.enviaTexto.bind(this);
    this.enviaTextoBotao = this.enviaTextoBotao.bind(this);
    this.props.conversaWatson("inicio", '');
  };

  state = {
    mensagem: "",
  };

  enviaTexto(e){
    if(e.keyCode === 13){
      //console.log(e.target.value);
      const mensagem = {
        texto: e.target.value,
        origem: 'user'
      }
      let contexto = {};
      if (this.props.resposta.data && this.props.resposta.data.context){
        contexto = this.props.resposta.data.context
      }
      this.props.enviaTexto(mensagem);
      this.props.conversaWatson(mensagem, contexto);
      e.target.value = '';
    }
  }

  enviaTextoBotao(e){
    e.preventDefault();
    //console.log(this.state.mensagem);
    const mensagem = {
      texto: this.state.mensagem,
      origem: 'user'
    }
    let contexto = {};
    if(this.props.resposta.data && this.props.resposta.data.context){
      contexto = this.props.resposta.data.context
    }
    this.props.enviaTextoBotao(mensagem);
    this.props.conversaWatson(mensagem, contexto);
  } 

  render() {
    return (
      <div className="chat-mensagem"> 
        <Form onSubmit={this.enviaTextoBotao}>
          <InputGroup>
            <Input onKeyDown={this.enviaTexto} placeholder="Digite sua mensagem" onChange={e => this.setState({ mensagem: e.target.value })} />
            <InputGroupAddon addonType="append">
              <Button color="info" type="submit"> Enviar </Button>
            </InputGroupAddon>
          </InputGroup>
        </Form>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch =>{
  return{
    enviaTexto: (msg) => dispatch(enviaMensagem(msg)),
    enviaTextoBotao: (msg) => dispatch(enviaMensagem(msg)),
    conversaWatson: (msg, contexto) => dispatch(conversaWatson(msg, contexto))
  }
}

const mapStateToProps = (state) => {
  return {
    resposta: state.watson.respostas 
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ChatMensagem);