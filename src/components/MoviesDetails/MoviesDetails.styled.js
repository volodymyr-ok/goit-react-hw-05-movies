import styled from 'styled-components';

export const Div = styled.div`
  display: grid;
  grid-gap: 15px;
  position: relative;

  a {
    &.active {
      background-color: aqua;
    }
  }

  .backLink {
    font-weight: 500;
    position: sticky;
    display: block;
    border-bottom: 1px solid brown;
    text-align: end;
    &::before {
      content: '<<<';
      margin-right: 50px;
    }
  }

  img {
    max-width: 350px;
  }

  .movie-details {
    display: flex;
    justify-content: space-between;
    gap: 15px;

    & img {
      align-self: center;
    }

    h2 {
      text-align: end;
      font-size: 36px;
    }

    ul {
      grid-column: 2/3;
      grid-row: 2/3;
    }
  }

  .details-wrapper {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .links {
    display: flex;
    justify-content: space-around;

    & a {
      border: 1px solid black;
      padding: 10px;
      border-radius: 10px;
    }
  }
`;
