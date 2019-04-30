import React, { Component } from 'react'
import { Alert, Badge } from 'reactstrap';
import { connect } from 'react-redux';

class ChatConversa extends Component {

  state = {
    entidade: ''
  };

  renderMensagem(msg, k){
        return (
          <div key={k}>
            {
              msg.origem === 'user' && <span>
              <div className="user-message">
                <Badge color="success">Você disse:</Badge>
                <Alert color="success">{msg.texto}</Alert>
              </div>
            </span>
            }
            {
              msg.origem === 'bot' && <span>
                <div className="chatbot-message">
                  <Badge color="info">Monitorbot disse:</Badge>
                  <Alert color="info">{msg.texto.output.text[0]}</Alert>
                </div>
              </span>
            }
          </div>
        )
  }

  renderMensagemComPausa(msg, k){
    return (
      <div key={k}>
        {
          msg.origem === 'user' && <span>
          <div className="user-message">
            <Badge color="success">Você disse:</Badge>
            <Alert color="success">{msg.texto}</Alert>
          </div>
        </span>
        }
        {
          msg.origem === 'bot' && <span>
            <div className="chatbot-message">
              <Badge color="info">Monitorbot disse:</Badge>
              <Alert color="info">{msg.texto.output.text[0]}</Alert>
              <Badge color="info">Monitorbot disse:</Badge>
              <Alert color="info">{msg.texto.output.text[1]}</Alert>
            </div>
          </span>
        }
      </div>
    )
  }

  renderMensagemCodigo(msg, k){
    return (
      <div key={k}>
        {
          msg.origem === 'user' && <span>
          <div className="user-message">
            <Badge color="success">Você disse:</Badge>
            <Alert color="success">{msg.texto}</Alert>
          </div>
        </span>
        }
        {
          msg.origem === 'bot' && <span>
            <div className="chatbot-message">
              <Badge color="info">Monitorbot disse:</Badge>
              <Alert color="info"><code><pre>{msg.texto.output.text}</pre></code></Alert>
            </div>
          </span>
        }
      </div>
    )
  }

  render() {
    return (
      <div className="chat-conversa">
        {
          Object.keys(this.props.mensagens).map(key => {
            console.log(this.props.mensagens[key].texto);
            //this.setState({ entidade: this.props.mensagens[key].texto.entities });
            if(this.props.mensagens[key].origem === 'user'){
              return this.renderMensagem(this.props.mensagens[key], key);
            } else if(this.props.mensagens[key].texto.entities[0] !== undefined && this.props.mensagens[key].texto.entities[0].value === "exemplo"){
              return this.renderMensagemCodigo(this.props.mensagens[key], key);
            } else if(this.props.mensagens[key].origem === 'bot' && this.props.mensagens[key].texto.output.text.length <= 1){
              return this.renderMensagem(this.props.mensagens[key], key);
            } else {
              return this.renderMensagemComPausa(this.props.mensagens[key], key);
            }
          })
        }
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    mensagens: state.chat.mensagens
  }
}

export default connect(mapStateToProps, null)(ChatConversa);