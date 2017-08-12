export const START_TIMER = 'START_TIMER';
export const startTimer = () => ({
    type: START_TIMER,
});

export const STOP_TIMER = 'STOP_TIMER';
export const stopTimer = () => ({
    type: STOP_TIMER,
});

export const INCREMENT_TIME = 'INCREMENT_TIME';
export const incrementTime = (time) => ({
    type: INCREMENT_TIME,
    time:time
});

export const LAP = 'LAP';
export const lap = (lap) => ({
    type: LAP,
    lap:lap
});

export const SET_COUNT = 'SET_COUNT';
export const setCount = (count) => ({
    type:SET_COUNT,
    count
});

export const DECREMENT_COUNT = 'DECREMENT_COUNT';
export const decrementCount = () => ({
    type: DECREMENT_COUNT
});