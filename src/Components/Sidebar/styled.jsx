import styled from "styled-components";

export const SidebarStyled = styled.div`
  position:fixed;
  width: 16.3rem;
  height: 100vh;
  background-color: #3a0000;//var(--sidebar-dark-color);
  overflow: hidden;
  transition: all 0.4s ease-in-out;
  @media screen and (max-width: 1200px) {
    transform: translateX(-100%);
    z-index: 20;
  }
`;
