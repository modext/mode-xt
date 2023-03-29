import styled from 'styled-components';

export const SliderElem = styled.div`
  grid-column: center-start/center-end;
  position: relative;
  z-index: 677;
  margin: 10rem 0;
  color: #DDD1C7;
  @media (max-width: 768px) {
    margin: 6rem 0;
  }
  & > div:first-child {
    font-size: 4.4rem;
    text-align: center;
  }
  .skills {
    padding: 0 2rem;
    @media (max-width: 768px) {
      padding: 0 1.4rem;
    }
    justify-content: center;
    display: flex;
    flex-wrap: wrap;
    margin-top: 1rem;
    font-size: 2.3rem;
    @media (max-width: 768px) {
      font-size: 1.6rem;
    }
    line-height: 1.7;
    font-family: 'Tusker';
    color: #949494;
    font-weight: 400;
    user-select: none;
    div {
      width: max-content;
      margin-right: 2rem;
    }
  }
`;
