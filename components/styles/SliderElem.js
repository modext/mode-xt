import styled from 'styled-components';

export const SliderElem = styled.div`
  grid-column: center-start/center-end;
  position: relative;
  z-index: 677;
  margin: 5rem 0;
  color: #DDD1C7;
  @media (max-width: 768px) {
    margin: 6rem 0;
  }
  & > div:first-child {
    font-size: 6.4rem;
    text-align: center;
  }
      .skills__title {
    font-size: 2rem;
    font-weight: 700;
    margin-bottom: 2rem;
    text-align: center;
  }

  .skills__wrapper {
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }

  .skills__category h3 {
    font-size: 2.25rem;
    font-weight: 600;
    margin-bottom: 1rem;
    color: #e0e0e0;
  }

 .skills__items {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  overflow-x: hidden;
  max-width: 100%;
}

  .skills__item {
  background-color: #f0f0f0;
  padding: 0.4rem 1rem;
  border-radius: 9999px;
  font-size: 2rem;
  font-weight: 500;
  color: #333;
  white-space: nowrap;
  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: #e0e0e0;
    transform: scale(1.05);
  }
}

  .skills {
    padding: 0 2rem;
    @media (max-width: 768px) {
      padding: 0 1.4rem;
    }
    justify-content: start;
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
