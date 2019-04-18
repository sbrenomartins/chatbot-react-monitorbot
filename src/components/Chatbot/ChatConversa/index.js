import React, { Component } from 'react'
import { Alert, Badge } from 'reactstrap';
import { connect } from 'react-redux';

class ChatConversa extends Component {

  renderMensagem(msg, autor){
    return (
      <div>
        {
        autor === 'user' && <span>
          <div className="user-message">
            <Badge color="success">Você disse:</Badge>
            <Alert color="success">{msg}</Alert>
          </div>
        </span>
        }
        {
          autor === 'bot' && <span>
            <div className="chatbot-message">
              <Badge color="info">Monitorbot disse:</Badge>
              <Alert color="info">{msg}</Alert>
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
          this.props.mensagens.map(key => {
            return this.renderMensagem(key, 'user');
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