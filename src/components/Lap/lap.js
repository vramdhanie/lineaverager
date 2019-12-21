import React, { Component } from "react";
import moment from "moment";

import styled from "styled-components";

const Lap = ({ className, number, time, duration }) => {
  return (
    <div className={className}>
      <div className="lap__number">{number}</div>
      <div className="lap__time">{moment(time).format("mm:ss:SS")}</div>
      <div className="lap__duration">{moment(duration).format("mm:ss:SS")}</div>
    </div>
  );
};

export default styled(Lap)`
  display: flex;
  border-bottom: solid 1px rgba(0, 0, 0, 0.1);
  padding: 3px;
  background: rgba(0, 0, 0, 0.1);

  .lap__number {
    flex: 1;
  }

  .lap__time {
    flex: 2;
  }

  .lap__duration {
    flex: 2;
  }

  &:first-child {
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
  }

  &:last-child {
    border-bottom-left-radius: 8px;
    border-bottom-right-radius: 8px;
  }
`;
