import { combineReducers } from "redux";

import chat from './chatReducer';

const rootReducer = combineReducers({
    chat,
});

export default rootReducer;