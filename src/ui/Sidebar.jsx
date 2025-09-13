import { styled } from "styled-components";
import Logo from "./Logo";
import MainNav from "./MainNav";
import { IoClose } from "react-icons/io5";

import Uploader from "../data/Uploader";
import useOutsideClick from "../hooks/useOutsideClick";

const StyledSidebar = styled.aside`
  // We can't leave this bg-color off as we will invert it in the dark mode
  background-color: var(--color-grey-0);
  padding: 3.2rem 2.4rem;
  border-right: 1px solid var(--color-grey-100);

  grid-row: 1 / -1;
  display: flex;
  flex-direction: column;
  gap: 3.2rem;

  @media (max-width: 768px) {
    position: absolute;
    z-index: 10;
    width: max-content;
    height: 100%;
  }
`;

const CloseSideNavButton = styled.button`
  padding: 2rem;
  width: max-content;
  border-radius: 100%;
  background-color: var(--color-grey-50);
  border: none;
`;

function Sidebar({ screenWidth, onCloseSideNav, showSideNav }) {
  const ref = useOutsideClick(onCloseSideNav);
  console.log("Screen Width: ", screenWidth);

  return (
    <>
      {screenWidth > 768 ? (
        <StyledSidebar>
          {/* <Uploader /> */}
          <Logo />
          <MainNav />
        </StyledSidebar>
      ) : (
        showSideNav && (
          <StyledSidebar ref={ref}>
            {/* <Uploader /> */}
            <Logo />
            <MainNav />
          </StyledSidebar>
        )
      )}
    </>
  );
}

export default Sidebar;
