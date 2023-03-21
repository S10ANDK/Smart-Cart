import * as S from './index.styled';
// import { useState } from 'react';

const Nav = ({ active }) => {


    return (
        <S.NavBox active={active}>
            <S.NavList>
                <S.NavListItem>
                    <S.NavLink to="/">Home</S.NavLink>
                </S.NavListItem>
                <S.NavListItem>
                    <S.NavLink to="/contact">Contact</S.NavLink>
                </S.NavListItem>
            </S.NavList>
        </S.NavBox>
    )
}

export default Nav;