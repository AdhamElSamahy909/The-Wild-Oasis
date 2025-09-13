import styled from "styled-components";
import { useDarkMode } from "../contexts/DarkModeContext";

const StyledLogo = styled.div`
  text-align: center;

  @media (max-width: 768px) {
    width: max-content;
    align-self: center;
    justify-self: center;
  }
`;

const Img = styled.img`
  height: 9.6rem;
  width: auto;

  @media (max-width: 768px) {
    height: 7rem;
  }
`;

function Logo() {
  const { isDarkMode } = useDarkMode();

  const src = isDarkMode ? "/logo-dark.png" : "/logo-light.png";

  return (
    <StyledLogo>
      <Img src={src} alt="Logo" />
    </StyledLogo>
  );
}

export default Logo;
