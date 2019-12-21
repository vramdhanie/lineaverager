import React from "react";

import styled from "styled-components";

const Header = ({ className }) => {
  return (
    <div className={className}>
      <h1>Line Averager</h1>
    </div>
  );
};

export default styled(Header)`
  padding: 10px;
  width: 100vw;
  height: 15vh;
  background-color: var(--primaryDark);
  color: var(--primaryLight);
  text-shadow: var(--lightShadow);
`;
