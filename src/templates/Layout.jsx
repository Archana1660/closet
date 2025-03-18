import styled from "styled-components";

const StyledMain = styled.main`
  background-color: #000;
  width: 100vw;
  height: 100vh;
  padding: 5rem 1rem 0 1rem;
`;

const withLayout = (WrappedComponent) => {
  return () => (
    <StyledMain>
      <WrappedComponent />
    </StyledMain>
  );
};
export default withLayout;
