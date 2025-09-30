import styled from "styled-components";
import {useDarkMode} from "../context/DarkModeContext.jsx";

const StyledLogo = styled.div`
  text-align: center;
`;

const Img = styled.img`
  height: 9.6rem;
  width: auto;
`;

function Logo() {
    const {isDarkMode} = useDarkMode()

    const src =isDarkMode ? "/logo-light.png" : "/logo-dark.png"

  return (
    <StyledLogo>
        <Img src={src} alt="logo" />
    </StyledLogo>
  );
}

export default Logo;
