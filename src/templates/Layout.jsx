import styled from "styled-components";
import Logo from "../atoms/Logo/Logo";

const StyledMain = styled.main`
  background-color: #000;
  width: 100vw;
  height: 100vh;
`;

const StyledHeader = styled.header`
  padding: 1rem;
`;
const StyledSection = styled.section`
  background-color: #252424;
  padding: 1rem;
`;

const withLayout = (WrappedComponent) => {
  return () => (
    <StyledMain>
      <StyledHeader>
        <Logo />
      </StyledHeader>
      <StyledSection>
        <WrappedComponent />
      </StyledSection>
    </StyledMain>
  );
};
export default withLayout;
