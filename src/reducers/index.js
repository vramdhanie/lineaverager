import * as actions from '../actions';

const STATE = {
    RUNNING:'RUNNING',
    STOPPED:'STOPPED',
    PAUSED:'PAUSED'
}

export const initialState = {
    timer_state: STATE.STOPPED,
    time:0
};

export const timerReducer = (state = initialState, action) => {
    switch (action.type) {
        case actions.START_TIMER:
            return {...state, timer_state: STATE.RUNNING};
        case actions.STOP_TIMER:
            return {...state, timer_state: STATE.PAUSED};
        case actions.INCREMENT_TIME:
            return {...state, time: action.time}
        default:
            return state;
    }
}