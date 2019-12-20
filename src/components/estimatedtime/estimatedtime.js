import React from "react";
import moment from "moment";
import styled from "styled-components";
import Container from "../container/container";

export const EstimatedTime = ({ className, eta, mean, count }) => {
  return (
    <Container>
      <div className={className}>
        <div className="EstimatedTime__subtle">Estimated Time of Arrival</div>
        <div className="EstimatedTime__eta">
          {eta ? moment(eta).format("HH:mm:ss") : ""}
        </div>
        <div className="EstimatedTime__subtle">
          {moment(mean).format("mm:ss:SS")} average x {count}={" "}
          {moment(mean * count).format("mm:ss:SS")} wait.
        </div>
      </div>
    </Container>
  );
};

export default styled(EstimatedTime)`
  flex: 2;
  color: var(--secondaryDark);
  box-shadow: 0 0 2px 0 rgba(0, 0, 0, 0.2);
  border-radius: 4px;
  margin-top: 5px;
  width: 80%;
  max-width: 600px;
  margin: 0 auto;

  .EstimatedTime__eta {
    font-size: 4em;
    font-weight: bold;
  }

  .EstimatedTime__subtle {
    font-size: 0.8em;
    opacity: 0.8;
  }
`;
