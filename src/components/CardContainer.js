import React from "react";
import styled from "styled-components";
import Card from "./Card";
import infoCards from "./infocards/infoCards";
const Cards = ({ sliderContainer }) => {
  return (
    <CardsMain ref={sliderContainer}>
      {infoCards.map((info) => (
        <CardContainer key={info.id}>
          <Card
            name={info.name}
            testimonio={info.testimonio}
            image={info.image}
          />
        </CardContainer>
      ))}
    </CardsMain>
  );
};

export default Cards;

const CardsMain = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
`;
const CardContainer = styled.section`
  min-width: 100%;
  height: 258.58px;
  background: #252835;
  border: 2px solid #2e353f;
  box-shadow: 10px 10px 50px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
`;
