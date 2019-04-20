import { combineReducers } from "redux";

import chat from './chatReducer';
import watson from './watson';

const rootReducer = combineReducers({
    chat,
    watson
});

export default rootReducer;