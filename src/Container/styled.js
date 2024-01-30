import styled from "styled-components";
import background from "../background.jpg";

export const Main = styled.main`
  min-height: 100vh;
  background-image: url("${background}");
  background-position: center;
  background-size: cover;
  margin: auto;
  display: grid;
  align-content: center;
  justify-content: center;
  grid-template-columns: minmax(680px, auto);

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    grid-template-columns: auto;
  }
`;
