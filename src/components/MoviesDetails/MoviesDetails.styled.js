import styled from 'styled-components';

export const Div = styled.div`
  /* background-color: black; */
  display: grid;
  gap: 5px;
  grid-template-columns: 25% 25% 50%;
  position: relative;
  display: flex;
  flex-direction: column;

  a {
    display: inline-block;
    border: 2px solid black;
    border-radius: 5px;
    width: 200px;
    padding: 10px;
    /* margin: 5px; */
    text-align: center;
  }

  img {
    /* position: absolute;
    top: 5px;
    right: 5px; */
    max-width: 350px;
  }

  .main-details {
    display: flex;
  }
`;
