import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { STATE, TICK } from "../../constants";
import ItemCount from "../itemcount/ItemCount";
import EstimatedTime from "../estimatedtime/estimatedtime";
import Timer from "../Timer/timer";
import Laps from "../Laps/laps";
import Header from "../header/header";
import Controls from "../Controls/controls";
import moment from "moment";

export const App = ({ className }) => {
  // const controls = this.props.count > 0 ? <Controls /> : "";
  // const eta = this.props.eta ? <EstimatedTime /> : "";

  const [timerState, setTimerState] = useState(STATE.PAUSED);
  const [timerId, setTimerId] = useState(null);
  const [count, setCount] = useState(0);
  const [laps, setLaps] = useState([]);
  const [mean, setMean] = useState(0);
  const [eta, setEta] = useState(0);
  const [time, setTime] = useState(0);

  useEffect(() => {
    if (count === 0) {
      setTimerState(STATE.PAUSED);
      clearInterval(timerId);
    }
  }, [count]);

  const onStart = () => {
    if (timerState !== STATE.RUNNING) {
      setTimerState(STATE.RUNNING);
      setTimerId(setInterval(() => tick(), TICK));
    }
  };

  const tick = () => {
    setTime(time => time + TICK);
  };

  const onStop = () => {
    setTimerState(STATE.PAUSED);
    clearInterval(timerId);
  };

  const onLap = () => {
    if (timerState === STATE.RUNNING) {
      let currentTime = time;
      let previousTime = laps.length ? laps[laps.length - 1].time : 0;
      let number = laps.length + 1;
      setLaps([
        ...laps,
        {
          time: currentTime,
          duration: currentTime - previousTime,
          number: number
        }
      ]);
      setCount(count > 0 ? count - 1 : count);

      const avg = currentTime / (laps.length + 1);
      setMean(avg);

      const wait = avg * (count - 1);
      const eta = moment().add(wait, "ms");

      setEta(eta);
    }
  };

  const up = () => {
    setCount(count + 1);
  };

  const down = () => {
    setCount(count > 0 ? count - 1 : count);
  };

  return (
    <div className={className}>
      <Header />
      <ItemCount label="in queue" count={count} up={up} down={down} />
      {laps.length > 0 ? (
        <EstimatedTime eta={eta} count={count} mean={mean} />
      ) : (
        ""
      )}
      {count > 0 ? (
        <>
          <Timer time={time} />

          <Controls
            onStart={onStart}
            onStop={onStop}
            onLap={onLap}
            timerState={timerState}
          />
        </>
      ) : (
        ""
      )}
      <Laps laps={laps} />
    </div>
  );
};

export default styled(App)`
  text-align: center;
`;
