import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns:
    [full-start] 4rem [center-start] repeat(12, [col-start] 1fr [col-end])
    [center-end] 4rem [full-end];
  scrollbar-width: none;
  grid-template-rows: max-content 91vh;
  -ms-overflow-style: none;
  scrollbar-width: none;
  position: relative;

  @media (max-width: 768px) {
    grid-template-columns:
      [full-start] 1rem [center-start] repeat(12, [col-start] 1fr [col-end])
      [center-end] 1rem [full-end];
    grid-template-rows: max-content 35vh;
  }
  @media (min-width: 1770px) {
    grid-template-columns:
      [full-start] 12rem [center-start] repeat(12, [col-start] 1fr [col-end])
      [center-end] 12rem [full-end];
  }
  .root-container {
    position: relative;
    z-index: 788;
    grid-column: center-start/center-end;
  }

  &::after {
    content: '';
    width: 100%;
    height: 100%;
    position: absolute;
    background-image: url('/images/FOLDED-02.jpg');
    transform: translate3d(0, 0, 0);

    background-blend-mode: overlay;
    background-color: #4B4A67;
    opacity: 1;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    top: 0;
    left: 0;
  }
  &::-webkit-scrollbar {
    display: none;
  }
`;
