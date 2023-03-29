import styled from 'styled-components';

export const CursorEl = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
  contain: layout style size;
  pointer-events: none;
  .cursor {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 10;
    contain: layout style size;
    pointer-events: none;
  }
  &::before {
    content: '';
    position: absolute;
    top: -24px;
    left: -24px;
    display: block;
    width: 150px;
    height: 48px;
    transform: scale(0.2);
    background: red;
    border-radius: 50%;
  }
  .cursor-media {
    display: block;
    height: 350px;
    width: 350px;
    overflow: hidden;

    border-radius: 100%;
    transform: scale(2);
    position: relative;
    margin: -175px 0 0 -175px;
    img {
      width: 24px;
      height: 24px;
      position: absolute;
      top: 0;
      left: 0;
      z-index: 77777777;
    }
  }
`;
