import styled from "styled-components";
import { Link } from "react-router-dom"

export const HamburgerIcon = styled.div`
    display: flex;
    justify-content: space-around;
    flex-flow: column nowrap;
    top: 15px;
    left: 20px;
    width: 2rem;
    height: 2rem;
    cursor: pointer;

    div {
        background-color: #333;
        border-radius: 10px;
        width: 2rem;
        height: 0.24rem;
        transform-origin: 1px;
        transition: all 0.2s linear;

        &:nth-child(1) {
            transform: ${({ active }) => active ? 'rotate(45deg)' : 'rotate(0)'};
        }

        &:nth-child(2) {
            transform: ${({ active }) => active ? 'translateX(-100%)' : 'translateX(0)'};
            opacity: ${({ active }) => active ? 0 : 1 }
        }

        &:nth-child(3) {
            transform: ${({ active }) => active ? 'rotate(-45deg)' : 'rotate(0)'};
        }
    }

    @media (min-width: 1000px) {
        display: none;
    }
`;

export const NavBox = styled.nav`
    background: var(--color-accent-one);
    color: white;
    /* text-align: center; */
    position: fixed;
    top: 0;
    left: 0;
    width: 90%;
    /* max-width: 250px; */
    height: auto;
    margin-top: 75px;
    padding: 25px 0px;
    transform: ${({ active }) => active ? 'translateX(0)' : 'translateX(-102%)' };
    /* transform: ${({ closeOnClick }) => closeOnClick = 'translateX(-102%)' }; */
    transition: 0.2s ease-in-out;
    border-radius: 0px 15px 15px 0px;
    box-shadow: 4px 4px 4px 2px rgba(0, 0, 0, 0.2);

    @media (min-width: 1000px) {
        width: 100%;
        box-shadow: none;
        padding: 0;
        transition: none;
        transform: ${({ active }) => active ? 'translateX(0)' : 'translateX(0)' };
        background-color: var(--color-primary);
        margin-top: 0;
        position: relative;
    }
`;

export const NavList = styled.ul`
    list-style: none;
    padding: 0px 0px 0px 40px;

    @media (min-width: 1000px) {
        padding: 0;
        display: flex;
        flex-direction: row;
        justify-content: right;
        margin-right: 50px;
    }
`;

export const NavListItem = styled.li`
    margin: 30px 10px;
    text-decoration: none;

    @media (min-width: 1000px) {
        color: var(--color-black);
        margin: 10px;
    }
`;

export const NavLink = styled(Link)`
    text-decoration: none;
    color: white;
    padding: 15px 10px;

    :hover {
        text-decoration: underline;
        text-underline-offset: 5px;
    }

    @media (min-width: 1000px) {
        color: var(--color-black);
        padding: 0;
    }
`;