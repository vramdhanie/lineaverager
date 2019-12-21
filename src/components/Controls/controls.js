import React, { useState } from "react";

import styled from "styled-components";

import { STATE } from "../../constants";

export const Controls = ({ className, onStart, onStop, onLap, timerState }) => {
  const start_btn_state = {
    disabled: timerState === STATE.RUNNING
  };
  const lap_btn_state = { disabled: timerState !== STATE.RUNNING };
  return (
    <div className={className}>
      <div className="btn-group">
        <button {...start_btn_state} onClick={onStart}>
          Start
        </button>
        <button {...lap_btn_state} onClick={onLap}>
          Lap
        </button>
        <button {...lap_btn_state} onClick={onStop}>
          Stop
        </button>
      </div>
    </div>
  );
};

export default styled(Controls)`
  margin: 0 auto;
  width: 80%;
  max-width: 600px;

  .controls .disable {
    color: #999999;
  }

  .controls .disable:hover {
    text-shadow: 0px 1px 1px #3d768a;
  }

  .btn-group {
    display: flex;
    width: 300px;
    margin: 0 auto;
  }

  .btn-group button {
    flex: 1;
    font-size: 1.2rem;
  }

  .btn-group button:first-child {
    border-top-left-radius: 6px;
    border-bottom-left-radius: 6px;
  }

  .btn-group button:last-child {
    border-top-right-radius: 6px;
    border-bottom-right-radius: 6px;
  }
`;
