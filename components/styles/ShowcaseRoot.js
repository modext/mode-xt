import styled from 'styled-components';

export const ShowcaseRoot = styled.div`
  margin-top: 15rem;
  @media (max-width: 768px) {
    margin-top: 6rem;
  }
  color: #DDD1C7;

  .root {
    &__play {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      z-index: 1400;
      img {
        width: 90px;
        height: 90px;
        @media (max-width: 768px) {
          width: 50px;
          height: 50px;
        }
      }
    }
    &__vid-cont {
      position: relative;
      margin: 3rem 0;
      opacity: 0;
      overflow: hidden;
      margin-bottom: 5rem;
      border: 0rem solid #DDD1C7;
      border-radius: 9px;
      transform: scale(0.76);
      @media (max-width: 768px) {
        margin: 1.5rem 0;
        border: 2px solid #DDD1C7 !important;
        border-radius: 5px;
      }
      &--mobile {
        margin-left: auto;
        margin-right: auto;
        width: 352px;
        @media (max-width: 768px) {
          width: 252px;
        }
      }
    }

    &__cred {
      font-family: 'Tusker';
      font-weight: 400;
      margin-top: 1.3rem;
      font-size: 1.7rem;
      @media (max-width: 768px) {
        font-size: 0.6rem;
        margin-top: 1.4rem;
      }
      span {
        color: white;
      }
    }
    &__wrapper {
      opacity: 0;
    }
    &__text {
      opacity: 0;
      @media (max-width: 768px) {
        font-size: 0.5rem;
      }
    }
    &__keys {
      transform: translateY(105%);
      display: inline-block;
      &--modifier {
        &:not(:last-child) {
          margin-right: 0.7rem;
        }
        @media (max-width: 768px) {
          &:not(:last-child) {
            margin-right: 0.3rem;
          }
        }
      }
    }
    &__hidden {
      overflow: hidden;
    }
    &__num {
      font-family: 'Tusker';
      font-weight: 400;
      font-size: 4.3rem;
      color: #909090;
      margin-bottom: 3rem;
      opacity: 0;
      @media (max-width: 768px) {
        font-size: 2.3rem;
        margin-bottom: 2rem;
      }
    }
    &__bottom {
      display: grid;
      grid-template-columns: 1.5fr 1fr 1.2fr;
      grid-column-gap: 5rem;
      justify-content: center;
      @media (max-width: 768px) {
        grid-column-gap: 2rem;
      }
    }
    &__elements {
      display: flex;
      flex-wrap: wrap;
      &--dev {
        text-transform: capitalize;
      }

      &--1 {
        flex-direction: column;
      }
    }
    &__heading {
      font-family: 'Tusker';
      font-weight: 400;
      font-size: 1.56rem;
      margin-bottom: 0.3rem;
      &--1 {
        font-size: 3rem;

        color: white;
        margin-bottom: 1rem;
        @media (max-width: 768px) {
          font-size: 0.9rem;
          margin-bottom: 0.7rem;
        }
      }
      &--2 {
        font-size: 2.004rem;
        @media (max-width: 768px) {
          font-size: 0.5rem;
        }
        display: flex;
        align-items: center;
        line-height: 1.54;
        a {
          color: #DDD1C7;
          text-decoration: none;
          transition: all 0.3s ease-in;
          &:hover {
            color: white;
          }
        }
        img {
          margin-right: 0.7rem;
          width: 18.7px;
          height: 18.7px;
          @media (max-width: 768px) {
            width: 8px;
            height: 8px;
            margin-right: 0.4rem;
          }
        }
      }
    }

    &__vid {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  .title-head {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    @media (max-width: 768px) {
      align-items: center;
    }
    a {
      color: #DDD1C7;
      text-decoration: none;
    }
    &__outer {
      font-weight: 800;
      user-select: none;
      line-height: 1;
      font-size: 8rem;
      @media (max-width: 768px) {
        font-size: 2.6rem;
      }

      cursor: pointer;
    }
    &__inner {
      user-select: none;
      cursor: pointer;
      font-size: 4rem;
      @media (max-width: 768px) {
        font-size: 1.1rem;
      }
      color: white;
    }
  }
`;
