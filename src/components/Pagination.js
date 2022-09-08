import React from "react";
import styled from "styled-components";

const Pagination = ({ totalItems, goToItem, currentCardIndex }) => {
  return (
    <Main>
      {Array.from({ length: totalItems })?.map((paginationDot, index) => (
        <PaginationDot
          current={currentCardIndex === index ? "#7861ff" : "#c4c4c4"}
          key={index}
          onClick={() => goToItem(index)}
        ></PaginationDot>
      ))}
    </Main>
  );
};

export default Pagination;

const Main = styled.div`
  position: absolute;
  bottom: -20%;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 12px;
`;

const PaginationDot = styled.button`
  width: 61px;
  height: 17px;
  background-color: ${(props) => props.current};
  border: none;
  cursor: pointer;
`;
