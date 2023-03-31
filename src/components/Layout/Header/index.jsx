import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import LogoIcon from '../../../assets/logo_icon.png';
import ShoppingCartIcon from '../../../assets/shopping-cart.png';
import Nav from './Nav/index.jsx';
import * as S from './index.styled';
import { useCart } from '../../hooks/useCart';

function Header() {
  const [isSticky, setIsSticky] = useState(false);
  const [updatedNumber, setUpdatedNumber] = useState(false);
  const { cartCount } = useCart();

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.pageYOffset > 0);
    };
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    if (cartCount > 0) {
      setUpdatedNumber(true);
      setTimeout(() => {
        setUpdatedNumber(false);
      }, 300);
    }
  }, [cartCount]);

  return (
    <>
      <S.Header className={isSticky ? 'sticky' : ''}>
        <S.HeaderContentWrapper>
          <S.LogoAndNavWrapper>
            <S.NavWrapper>
              <Nav />
            </S.NavWrapper>
            <Link to={'/'}>
              <S.Logo src={LogoIcon} alt="Logo" />
            </Link>
          </S.LogoAndNavWrapper>
          <S.CartWrapper>
            <S.CartCount updated={updatedNumber}>{cartCount}</S.CartCount>
            <Link to={'/cart'}>
              <S.CartIcon src={ShoppingCartIcon} />
            </Link>
          </S.CartWrapper>
        </S.HeaderContentWrapper>
      </S.Header>
    </>
  );
}

export default Header;
