import styled from "styled-components";
import { Link } from "react-router-dom"

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
    transition: 0.2s ease-in-out;
    border-radius: 0px 15px 15px 0px;
    box-shadow: 4px 4px 4px 2px rgba(0, 0, 0, 0.2);

    @media (min-width: 1000px) {
        box-shadow: none;
        padding: 0;
        transition: none;
        transform: none;
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