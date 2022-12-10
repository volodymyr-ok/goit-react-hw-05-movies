import styled from 'styled-components';

export const Div = styled.div`
  h3 {
    text-align: center;
    padding: 30px;
    font-size: 26px;
  }

  ul {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-gap: 15px;
  }
`;
