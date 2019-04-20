import axios from 'axios';

import { enviaMensagem } from './chat';

export const conversaWatsonRequest = () => {
    return {
        type: 'CONVERSA_WATSON_REQUEST',
        carregando: true,
        erro: false
    }
};

export const conversaWatsonSuccess = ((respostas) => {
    return {
        type: 'CONVERSA_WATSON_SUCCESS',
        respostas,
        carregando: false,
        erro: false
    }
});

export const conversaWatsonError = () => {
    return {
        type: 'CONVERSA_WATSON_ERROR',
        carregando: false,
        erro: true
    }
} 

export const conversaWatson = ((mensagem, contexto) => {
    return dispatch => {
        dispatch(conversaWatsonRequest());
        //Chama o backend do Watson
        const url = 'https://api-bot-assistant-discovery.herokuapp.com/conversation/';
        axios.post(url, { input: mensagem.texto, context: contexto })
            .then((data) => { 
                dispatch(conversaWatsonSuccess(data))
                const msg = {
                    texto: data.data.output.text[0],
                    origem: 'bot'
                }
                dispatch(enviaMensagem(msg));
            })
            .catch(() => dispatch(conversaWatsonError()));
    }
});