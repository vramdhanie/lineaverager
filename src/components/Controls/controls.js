import React, { useState } from "react";

import styled from "styled-components";
import Container from "../container/container";

import { STATE } from "../../constants";

export const Controls = ({ className, onStart, onStop, onLap, timerState }) => {
  const start_btn_state = {
    disabled: timerState === STATE.RUNNING
  };
  const lap_btn_state = { disabled: timerState !== STATE.RUNNING };
  return (
    <Container>
      <div className={className}>
        <div>
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
    </Container>
  );
};

export default styled(Controls)`
  margin-top: 5px;
  width: 80%;
  max-width: 600px;

  .controls .disable {
    color: #999999;
  }

  .controls .disable:hover {
    text-shadow: 0px 1px 1px #3d768a;
  }
`;
