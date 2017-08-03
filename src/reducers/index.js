import * as actions from '../actions';

const STATE = {
    RUNNING:'RUNNING',
    STOPPED:'STOPPED',
    PAUSED:'PAUSED'
}

export const initialState = {
    timer_state: STATE.STOPPED
};

export const timerReducer = (state = initialState, action) => {
    switch (action.type) {
        case actions.START_TIMER:
            return {...state, timer_state: STATE.RUNNING};
        case actions.STOP_TIMER:
            return {...state, timer_state: STATE.PAUSED};
        default:
            return state;
    }
}