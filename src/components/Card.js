import React from "react";
import styled from "styled-components";

const Card = ({ name, testimonio, image}) => {
  return (
    <>
      <Profile>
        <ProfileImg src={image} alt="foto de perfil" />
        <h1>{name}</h1>
      </Profile>
      <CommentContainer>
        <p>
          {testimonio}
        </p>
      </CommentContainer>
    </>
  );
};

export default Card;

const Profile = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 1rem;
  color: #fff;
`;

const CommentContainer = styled.div`
  padding: 1rem;
  color: #fff;
`;

const ProfileImg = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50px;
`;
