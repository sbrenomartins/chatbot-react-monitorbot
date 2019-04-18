import React, { Component } from 'react';

// import { Container } from './styles';

export default class Footer extends Component {
  render() {
    return (
        <div className="footer">
            <header className="App-footer">
                <p>Pontifícia Universidade Católica de Minas Gerais - Unidade São Gabriel <span>&copy;</span> &lt;<a href="https://github.com/sbrenomartins" rel="external">Breno M. Silva</a>&gt;</p>
            </header>
        </div>
    );
  }
}
