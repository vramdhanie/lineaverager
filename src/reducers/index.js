import * as actions from '../actions';

export const STATE = {
    RUNNING:'RUNNING',
    STOPPED:'STOPPED',
    PAUSED:'PAUSED'
}

export const initialState = {
    timer_state: STATE.STOPPED,
    time:0,
    laps:[],
    count:0,
    mean:0
};

export const timerReducer = (state = initialState, action) => {
    switch (action.type) {
        case actions.START_TIMER:
            return {...state, timer_state: STATE.RUNNING};
        case actions.STOP_TIMER:
            return {...state, timer_state: STATE.PAUSED};
        case actions.INCREMENT_TIME:
            return {...state, time: action.time};
        case actions.LAP:
            let laps = state.laps.slice(0);
            laps.push(action.lap)
            return {...state, laps: laps};
        case actions.SET_COUNT:
            return {...state, count:action.count};
        case actions.DECREMENT_COUNT:
            return {...state, count: state.count - 1};
        case actions.INCREMENT_COUNT:
            return {...state, count: state.count + 1};
        case actions.SET_MEAN:
            return {...state, mean: action.mean};
        default:
            return state;
    }
}