import styled from 'styled-components';

export const Heading = styled.h2`
  text-align: center;
  padding: 20px;
  font-size: 50px;
`;

export const UL = styled.ul`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 15px;

  li {
    text-align: center;
    border-bottom: 2px solid white;
    padding-bottom: 5px;
  }

  h3 {
    margin-top: 15px;
    text-shadow: 5px 5px 5px black;
  }
`;
