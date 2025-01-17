import styled from "styled-components";

export const Card = styled.div`
    width: 175px;
    height: 300px;
    display: inline-block;
    cursor: pointer;
    transform: scale(0.9);
    transition: all ease 0.2s;

    &:hover{
      transform: scale(1);
    }
`;

export const CardImage = styled.img`
    width: 100%;
    height: 260px;

`;

export const Title = styled.h2` 
  font-size: 16px;
  letter-spacing: 1px;
  color: #FFF;
`;
