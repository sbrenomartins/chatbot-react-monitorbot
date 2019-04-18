const INITIAL_STATE = {
    mensagens: []
}

export default function chatReducer (state = INITIAL_STATE, action) {

    if(action.type === 'ENVIA_MENSAGEM'){
        return {
            mensagens: [...state.mensagens, action.payload.mensagem]
        }
    } else {
        return state
    }
}