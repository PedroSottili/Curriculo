import styled from "styled-components";

export const HomeStyled = styled.header`
  width: 100%;
  height: 100vh;
  position: relative;

  .typography {
    position: absolute;
    top: 45%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    width: 80%;

    .icons {
      display: flex;
      justify-content: center;
      margin-top: 1rem;
      .icon {
        border: 2px solid var(--border-color);
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 25%;
        transition: all 0.4s ease-in-out;
        cursor: pointer;
        &:hover {
          border: 2px solid #db4040;
          color: blue;
        }
        &:not(:last-child) {
          margin-right: 1rem;
        }
        svg {
          margin: 0.5rem;
        }
      }

      .i-whatsapp {
        bottom:-211px;
        right: -106px;
        position:absolute;
        &:hover {
          border: 2px solid #db4040;
          color: green;
        }
      }
      .i-github {
        bottom:-160px;
        right: -124px;
        position:absolute;
        &:hover {
          border: 2px solid #db4040;
          color: #5f4687;
        }
      }
      .i-linkedin{
        bottom:-109px;
        right: -124px;
        position:absolute;
      }
    }
  }
`;
