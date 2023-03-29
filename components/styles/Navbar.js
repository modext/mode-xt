import styled from 'styled-components';

export const NavBar = styled.div`
  grid-column: center-start/center-end;
  display: flex;
  justify-content: space-between;

  padding-top: 1.5rem;
  padding-bottom: 0.5rem;
  height: max-content;
  position: relative;
  z-index: 67;

  align-items: center;
  @media (max-width: 768px) {
    padding-top: 1rem;
  }
  .navbar {
    position: absolute;
    top: 100%;
    left: 0;
    width: 14%;
    height: 1.3%;
    opacity: 0;
    background-color: white;
  }

  .links {
    img {
      @media (max-width: 768px) {
        width: 12px !important;
        height: 12px !important;
      }
    }
    svg {
      @media (max-width: 768px) {
        width: 12px !important;
        height: 12px !important;
      }
    }
  }
  .links a {
    @media (max-width: 768px) {
      margin-left: 2.9rem !important;
    }
  }

  .links,
  .logo {
    opacity: 0;
    display: flex;
    align-items: flex-start;
  }
  h3 {
    font-family: Tusker;
    font-weight: 500;
    font-size: 1.79rem;
    user-select: none;
    @media (max-width: 768px) {
      font-size: 1rem;
    }
  }
`;
