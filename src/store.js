import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import { timerReducer } from './reducers';

export default createStore(
    timerReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    applyMiddleware(thunk)
);