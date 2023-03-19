import styled from "styled-components";
import {Link} from "react-router-dom"

export const HeaderWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`;

export const LogoAndHamburgerMenuWrapper = styled.div`
    display: flex;
    flex-direction: row;
`;

export const Nav = styled.nav`
    background: var(--color-accent-one);
    color: white;
    position: absolute;
    width: 100%;
    height: auto;
    margin-top: 76px;
`;

export const NavList = styled.ul`
    list-style: none;
`;

export const NavListItem = styled.li`
    margin: 25px 10px;
    text-decoration: none;
`;

export const NavLink = styled(Link)`
    text-decoration: none;
    color: white;
    padding: 15px 10px;

    :hover {
        text-decoration: underline;
        text-underline-offset: 5px;
    }
`;

export const HamburgerIcon = styled.div`
    cursor: pointer;

    @media (min-width: 768px) {
        display: none;
    }
`;

export const Logo = styled.img`
    margin: 10px 20px;
    width: 200px;
    cursor: pointer;
`;

export const CartIcon = styled.img`
    margin: 10px;
    width: 30px;
    cursor: pointer;
`;