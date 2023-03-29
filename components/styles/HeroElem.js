import styled from 'styled-components';

export const HeroElem = styled.div`
  grid-column: full-start/center-end;
  margin-top: 2rem;
  position: relative;
  border-bottom-right-radius: 2rem;
  border-top-right-radius: 2rem;

  .title {
    position: absolute;
    top: 50%;
    left: 4rem;
    transform: translateY(-50%);
    z-index: 89;
    @media (max-width: 768px) {
      left: 1rem;
    }
    @media (min-width: 1770px) {
      left: 12rem;
    }
    div {
      overflow: hidden;
    }
    h1 {
      text-shadow: 0px 1px 1.2rem rgba(15, 15, 15, 0.28);
      font-weight: 800;
      transform: translateY(105%) scale(0.96);
      user-select: none;
      line-height: 1;
      opacity: 0;
      font-size: 10.4rem;
      @media (max-width: 1280px) {
        font-size: 8rem;
        line-height: 1.1;
      }
      @media (max-width: 768px) {
        font-size: 3rem;
        line-height: 1.1;
      }

      @media (min-width: 1770px) {
        font-size: 13rem;
      }
    }
  }

  .front {
    width: 2rem;
    height: 100%;
    z-index: 45;
    border-bottom-right-radius: 2rem;
    border-top-right-radius: 2rem;
    position: relative;
    box-shadow: 0 0 1.7rem 1px #DDD1C7;
    background-color: #7E8987;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    @media (max-width: 768px) {
      border-bottom-right-radius: 1rem;
      border-top-right-radius: 1rem;
      box-shadow: 0 0 1rem 1px #DDD1C7;
      /* opacity: 0; */
    }
  }
  .back {
    width: 100%;
    height: 100%;
    position: absolute;
    background-image: url('/images/FOLDED-02.jpg');
    mix-blend-mode: overlay;
    background-color: #191919;
    background-repeat: no-repeat;
    background-position: center;
    border-bottom-right-radius: 2rem;
    border-top-right-radius: 2rem;
    background-size: cover;
    z-index: 67;
    top: 0;
    left: 0;
    @media (max-width: 768px) {
      border-bottom-right-radius: 1rem;
      border-top-right-radius: 1rem;
    }
  }

  .img__container {
    position: absolute;
    transform: translate(-50%, -50%) rotateZ(8deg) rotateY(-180deg) scale(0.98);
    z-index: 45;
    opacity: 0;
    mix-blend-mode: difference;
    top: 50%;
    left: 50%;
    @media (max-width: 768px) {
      opacity: 1 !important;
    }
    img {
      @media (max-width: 768px) {
        width: 220px !important;
      }
      @media (min-width: 1770px) {
        width: 1030px !important;
      }
    }
  }
`;
