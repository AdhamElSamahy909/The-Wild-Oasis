import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Header from "./Header";
import { styled } from "styled-components";
import { useScreenWidth } from "../hooks/useScreenWidth";
import { useState } from "react";

const StyledAppLayout = styled.div`
  display: grid;
  grid-template-columns: 26rem 1fr;
  grid-template-rows: auto 1fr;
  height: 100vh;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const Main = styled.main`
  background-color: var(--color-grey-50);
  padding: 4rem 4.8rem 6.4rem;
  overflow: scroll;

  @media (max-width: 768px) {
    padding: 4rem 1.9rem 6.4rem;
  }
`;

const Container = styled.div`
  max-width: 120rem;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 3.2rem;

  @media (max-width: 768px) {
    position: relative;
  }
`;

function AppLayout() {
  const [showSideNav, setShowSideNav] = useState(false);
  const screenWidth = useScreenWidth();

  function handleToggleSideNav() {
    setShowSideNav((is) => !is);
  }

  function handleCloseSideNav() {
    setShowSideNav((is) => false);
  }

  return (
    <StyledAppLayout>
      <Header screenWidth={screenWidth} onToggleSideNav={handleToggleSideNav} />
      <Sidebar
        screenWidth={screenWidth}
        onCloseSideNav={handleCloseSideNav}
        showSideNav={showSideNav}
      />

      <Main>
        <Container>
          <Outlet />
        </Container>
      </Main>
    </StyledAppLayout>
  );
}

export default AppLayout;
