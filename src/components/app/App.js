import React, { useState } from "react";
import styles from "./App.module.css";
import { STATE, TICK } from "../../constants";
import ItemCount from "../itemcount/ItemCount";
import EstimatedTime from "../estimatedtime/estimatedtime";
import Timer from "../Timer/timer";
import Laps from "../Laps/laps";
import Header from "../header/header";
import { Controls } from "../Controls/controls";
import moment from "moment";

export const App = props => {
  // const controls = this.props.count > 0 ? <Controls /> : "";
  // const eta = this.props.eta ? <EstimatedTime /> : "";

  const [timerState, setTimerState] = useState(STATE.PAUSED);
  const [timerId, setTimerId] = useState(null);
  const [count, setCount] = useState(0);
  const [laps, setLaps] = useState([]);
  const [mean, setMean] = useState(0);
  const [eta, setEta] = useState(0);
  const [time, setTime] = useState(0);

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
      setCount(count - 1);

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
    setCount(count - 1);
  };

  return (
    <div className={styles.App}>
      <Header />
      <ItemCount label="in queue" count={count} up={up} down={down} />
      <EstimatedTime eta={eta} count={count} mean={mean} />

      <Timer time={time} />

      <Controls
        onStart={onStart}
        onStop={onStop}
        onLap={onLap}
        timerState={timerState}
      />
      <Laps laps={laps} />
    </div>
  );
};

export default App;
