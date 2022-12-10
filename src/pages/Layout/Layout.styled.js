import styled from 'styled-components';

export const Wrapper = styled.div`
  position: relative;

  a {
    color: #333;
    text-decoration: none;
  }

  img {
    border-radius: 20px;
  }

  header {
    position: fixed;
    top: 0;
    right: 0;
    width: 100%;
    background-color: #ccccff;
    padding: 15px 35px;

    z-index: 1;

    & ul {
      display: flex;
      gap: 15px;
    }
  }

  & .link {
    font-family: 'Quicksand', sans-serif;

    font-size: 20px;
    font-weight: 500;
    display: inline-block;
    width: 100px;
    text-align: center;
    border: 2px solid #005f69;
    border-radius: 5px;
    padding: 5px;

    &.active {
      background: linear-gradient(to top, lime, 20%, cyan);
    }

    &:hover:not(.active) {
      background-color: aqua;
    }
  }
`;

export const Main = styled.main`
  padding: 0 15px;
  margin-top: 75px;

  ul {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    /* grid-template-rows: repeat(auto, 1fr); */
    grid-gap: 15px;
  }

  li {
    text-align: center;
  }
  /* padding: 50px 10px 10px; */
  /* margin-top: 50px; */
`;
