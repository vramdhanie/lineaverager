import React, { Component } from "react";
import moment from "moment";
import styled from "styled-components";
import Container from "../container/container";

export const Timer = ({ className, time }) => {
  return (
    <Container>
      <div className={className}>
        <div className="timer__time">{moment(time).format("mm:ss:SS")}</div>
      </div>
    </Container>
  );
};

export default styled(Timer)`
  flex: 1;

  box-shadow: 0 0 2px 0 rgba(0, 0, 0, 0.2);
  border-radius: 4px;
  margin: 0 auto;
  margin-top: 5px;
  width: 80%;
  max-width: 600px;

  .timer__time {
    font-size: 3em;
    font-weight: bold;
    color: var(--primaryDark);
  }
`;
