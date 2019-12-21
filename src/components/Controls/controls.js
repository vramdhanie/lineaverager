import React, { useState } from "react";
import styled from "styled-components";
import { STATE } from "../../constants";
import { MdStop, MdPlayCircleOutline } from "react-icons/md";
import { GiStopwatch } from "react-icons/gi";

export const Controls = ({ className, onStart, onStop, onLap, timerState }) => {
  const start_btn_state = {
    disabled: timerState === STATE.RUNNING
  };
  const lap_btn_state = { disabled: timerState !== STATE.RUNNING };
  return (
    <div className={className}>
      <div className="btn-group">
        <button {...start_btn_state} onClick={onStart}>
          <MdPlayCircleOutline />
        </button>
        <button {...lap_btn_state} onClick={onLap}>
          <GiStopwatch />
        </button>
        <button {...lap_btn_state} onClick={onStop}>
          <MdStop />
        </button>
      </div>
    </div>
  );
};

export default styled(Controls)`
  margin: 0 auto;
  width: 100%;
  height: 80px;
  position: fixed;
  bottom: 0;
  background: var(--secondary);

  .controls .disable {
    color: #999999;
  }

  .controls .disable:hover {
    text-shadow: 0px 1px 1px #3d768a;
  }

  .btn-group {
    display: flex;
    width: 60%;
    margin: 0 auto;
    justify-content: space-around;
    padding: 10px;
  }

  .btn-group button {
    font-size: 1.2rem;
    border-radius: 50%;
    width: 50px;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: var(--primaryLight);
    color: var(--primaryDark);
    border: none;
    transition: var(--mainTransition);
  }

  .btn-group button:hover:enabled {
    box-shadow: var(--lightShadow);
    background: var(--primaryDark);
    color: var(--primaryLight);
  }

  .btn-group button:disabled {
    filter: grayscale(80%);
  }
`;
