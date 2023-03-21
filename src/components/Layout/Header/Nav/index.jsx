import React, { useState } from "react";
import * as S from './index.styled';


const Nav = () => {
    const [active, setActive] = useState(false)

    return (
        <>
        <S.HamburgerIcon active={active} onClick={() => setActive(!active)}>
            <div />
            <div />
            <div />
        </S.HamburgerIcon>
        <S.NavBox active={active}>
            <S.NavList>
                <S.NavListItem>
                    <S.NavLink onClick={() => setActive(!active)} to="/">Home</S.NavLink>
                </S.NavListItem>
                <S.NavListItem>
                    <S.NavLink onClick={() => setActive(!active)} to="/contact">Contact</S.NavLink>
                </S.NavListItem>
            </S.NavList>
        </S.NavBox>
        </>
    )
}

export default Nav;