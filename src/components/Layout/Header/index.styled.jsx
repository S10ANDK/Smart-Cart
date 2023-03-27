import styled from "styled-components";

export const Header = styled.header`
  background: ${(props) => props.theme.color.primary};
  top: 0;
  z-index: 10;

  &.sticky {
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
    position: sticky;
    top: 0;
    left: 0;
    right: 0;
  }

  @media (min-width: 1000px) {
    border-bottom: 4px solid ${(props) => props.theme.color.accentOne};
  }
`;

export const HeaderContentWrapper = styled.div`
  position: sticky;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  max-width: 1000px;
  margin: auto;

  @media (min-width: 1400px) {
    max-width: 1200px;
  }
`;

export const LogoAndNavWrapper = styled.div`
  display: flex;
  flex-direction: row;

  @media (min-width: 1000px) {
    flex-direction: row-reverse;
    justify-content: space-between;
    flex: 1;
  }
`;

export const Logo = styled.img`
  margin: 10px 20px;
  width: 200px;
  cursor: pointer;

  @media (min-width: 1000px) {
    margin: 10px 0px;
  }
`;

export const NavWrapper = styled.div`
  display: flex;
  align-items: center;
  margin: 0px 0px 0px 15px;

  @media (min-width: 400px) {
    margin: 0px 10px 0px 20px;
  }

  @media (min-width: 600px) {
    margin: 0px 15px 0px 25px;
  }
`;

export const CartWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const CartIcon = styled.img`
  margin: 10px;
  width: 35px;
  cursor: pointer;

  @media (min-width: 400px) {
    margin-right: 18px;
  }

  @media (min-width: 1000px) {
    margin-right: 10px;
    transition: 0.3s ease-in-out;

    :hover {
      transform: rotate(-10deg);
    }
  }
`;
