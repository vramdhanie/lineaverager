import React, { Component } from "react";
import Lap from "../Lap/lap";
import styled from "styled-components";

const Laps = ({ className, laps }) => {
  const lapList = laps.map(lap => <Lap key={lap.number} {...lap} />);

  return <div className={className}>{lapList}</div>;
};

export default styled(Laps)`
  width: 80%;
  max-width: 600px;
  box-shadow: 0 0 2px 0 rgba(0, 0, 0, 0.2);
  border-radius: 4px;
  margin: 0 auto;
`;
