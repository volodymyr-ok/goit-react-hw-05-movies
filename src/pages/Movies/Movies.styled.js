import styled from 'styled-components';

export const Div = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #fff;

  form {
    position: relative;
  }

  input {
    width: 600px;
    border-radius: 10px;
    border: 2px solid black;
    padding: 15px;
    background-color: #b6baff14;
    color: #7f86ff;
    text-align: center;
    font-family: inherit;
    font-size: 17px;

    &:hover,
    &:focus {
      background-color: #d3d5ff40;
      outline: none;
    }
  }

  button {
    font-size: 20px;

    display: flex;
    justify-content: center;
    position: absolute;
    top: 2px;
    right: 2px;
    border-radius: 10px;
    border: 0px solid black;
    padding: 15px;
    background-color: transparent;
    &:hover {
      cursor: pointer;
      background-color: rgb(98, 91, 112);
    }
  }

  ul {
    padding: 15px;
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
  }
`;
