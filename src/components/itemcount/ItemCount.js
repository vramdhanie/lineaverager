import React, { Component } from "react";
import Container from "../container/container";
import { FaChevronUp, FaChevronDown } from "react-icons/fa";
import styled from "styled-components";

export const ItemCount = ({ className, count = 0, label, up, down }) => {
  const disabled = { disabled: count === 0 };

  return (
    <Container>
      <div className={className}>
        <button onClick={up} className="btn">
          <FaChevronUp />
        </button>

        <div className="count_box">
          <div className="count">{count}</div>
          <div className="subtle">{label}</div>
        </div>

        <button onClick={down} {...disabled} className="btn">
          <FaChevronDown />
        </button>
      </div>
    </Container>
  );
};

export default styled(ItemCount)`
  display: flex;
  width: 180px;
  margin: 0 auto;
  border-radius: 4px;
  box-shadow: var(--lightBorder);
  padding: 5px;

  .btn {
    flex: 1;
  }

  .count_box {
    flex: 1;
  }

  .subtle {
    font-weight: 300;
    font-size: 0.8rem;
  }

  .count {
    font-weight: bold;
    font-size: 2rem;
  }
`;
