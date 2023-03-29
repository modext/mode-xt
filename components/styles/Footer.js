import styled from 'styled-components';

export const FooterElem = styled.div`
  grid-column: center-start/center-end;
  position: relative;
  border-top: 0.7px solid white;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;

  padding: 6rem 0;
  z-index: 566;

  @media (max-width: 768px) {
    padding: 2rem 0;
    margin-top: 1rem;
  }
  .list {
    display: flex;
    font-family: 'Tusker';
    font-weight: 400;
    div {
      font-size: 1.6rem;
      display: inline-block;
      &:not(:last-child) {
        margin-right: 1.6rem;
      }
      @media (max-width: 768px) {
        font-size: 0.6rem;
        &:not(:last-child) {
          margin-right: 1rem;
        }
      }
      a {
        text-decoration: none;
        color: white;
        transition: all 0.1s ease-in-out;
        &:hover {
          color: #DDD1C7;
        }
      }
    }
  }
  div {
    font-size: 3.3rem;

    color: #DDD1C7;
    @media (max-width: 768px) {
      font-size: 1rem;
    }
  }
`;
