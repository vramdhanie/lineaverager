export const START_TIMER = 'START_TIMER';
export const startTimer = () => ({
    type: START_TIMER,
});

export const STOP_TIMER = 'STOP_TIMER';
export const stopTimer = () => ({
    type: STOP_TIMER,
});

export const INCREMENT_TIME = 'INCREMENT_TIME';
export const incrementTime = (time) = ({
    type: INCREMENT_TIME,
    time:time
});