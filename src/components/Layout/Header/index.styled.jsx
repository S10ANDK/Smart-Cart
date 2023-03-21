import styled from "styled-components";
// import { NavBox, NavList, NavListItem, NavLink } from "./Nav/index.styled";

export const HeaderWrapper = styled.div`
    position: sticky;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    max-width: 1000px;
    margin: auto;
`;

export const LogoAndHamburgerMenuWrapper = styled.div`
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
        order: 1;
    }
`;

export const HamburgerButtonWrapper = styled.div`
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
        margin-right: 0px;
    }
`;

// export { NavBox, NavList, NavListItem, NavLink };