import React from "react";
import styled from "styled-components";

const SlideButton = ({ action, image }) => {
  return (
    <Button onClick={action}>
      <img src={image} />
    </Button>
  );
};

export default SlideButton;
const Button = styled.button`
  width: 34px;
  height: 36px;
  background: #1e212e;
  border: 1px solid #39424e;
  border-radius: 5px;
  display: grid;
  place-items: center;
  cursor: pointer;
`;
