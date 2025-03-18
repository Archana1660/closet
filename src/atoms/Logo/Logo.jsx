import { StyledLogo, StyledH1 } from "./LogoStyle";

const Logo = () => {
  return (
    <StyledH1>
      <StyledLogo href="/" aria-label="Home">
        CONNECT
      </StyledLogo>
    </StyledH1>
  );
};

export default Logo;
