import styled from 'styled-components';

export const Div = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  form {
    position: relative;
  }

  input {
    width: 300px;
    border-radius: 10px;
    border: 2px solid black;
    padding: 5px;
  }

  button {
    position: absolute;
    top: 0;
    right: 0;
    border-radius: 10px;
    border: 2px solid black;
    padding: 5px;
    background-color: transparent;
    &:hover {
      background-color: #fff;
    }
  }
`;
