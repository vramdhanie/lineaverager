import React from "react";
import styled from "styled-components";

export const Container = ({ children, className }) => {
  return <div className={className}>{children}</div>;
};

export default styled(Container)`
  padding: 10px;
  width: 95vw;
  margin: 0 auto;
`;
