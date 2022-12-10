import styled from 'styled-components';

export const Heading = styled.h2`
  text-align: center;
  padding: 20px;
  font-size: 40px;
`;

export const UL = styled.ul`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 15px;

  li {
    text-align: center;
  }
`;
