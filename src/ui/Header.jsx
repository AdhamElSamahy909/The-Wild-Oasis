import { styled } from "styled-components";
import { IoIosMenu } from "react-icons/io";
import Headermenu from "./Headermenu";
import UserAvatar from "../features/authentication/UserAvatar";

const StyledHeader = styled.header`
  background-color: var(--color-grey-0);
  padding: 1.2rem 4.8rem;
  border-bottom: 1px solid var(--color-grey-100);
  display: flex;
  gap: 2.4rem;
  align-items: center;
  justify-content: flex-end;

  @media (max-width: 768px) {
    padding: 1.2rem 1.5rem;
    gap: 1.7rem;
  }
`;

const MenuButton = styled.button`
  margin-right: auto;
  background-color: transparent;
  border: none;
  border-radius: var(--border-radius-sm);
  padding: 0.6rem;

  &:hover {
    background-color: var(--color-grey-100);
  }

  & svg {
    fill: var(--color-brand-600);
    width: 2.2rem;
    height: 2.2rem;
  }
`;

function Header({ screenWidth, onToggleSideNav }) {
  return (
    <StyledHeader>
      {screenWidth < 768 && (
        <MenuButton onClick={onToggleSideNav}>
          <IoIosMenu color="red" fill="red" fillRule="red" />
        </MenuButton>
      )}
      <UserAvatar />
      <Headermenu />
    </StyledHeader>
  );
}

export default Header;
