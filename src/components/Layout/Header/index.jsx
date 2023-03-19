import { Link } from 'react-router-dom';
import LogoIcon from '../../../assets/logo_icon.png';
import ShoppingCartIcon from '../../../assets/shopping-cart.png';
import * as S from './index.styled';

function Header () {
    return (
        <>
            <header>
                <S.HeaderWrapper>
                    <S.LogoAndHamburgerMenuWrapper>
                        <S.HamburgerIcon>
                            HamburgerIcon
                        </S.HamburgerIcon>
                        <Link to={"/"}>
                            <S.Logo src={LogoIcon} alt="Logo" />
                        </Link>
                    </S.LogoAndHamburgerMenuWrapper>
                    <Link to={"/cart"}>
                        <S.CartIcon src={ShoppingCartIcon} />
                    </Link>
                    <S.Nav>
                        <S.NavList>
                            <S.NavListItem>
                                <S.NavLink to="/">Home</S.NavLink>
                            </S.NavListItem>
                            <S.NavListItem>
                                <S.NavLink to="/products">Products</S.NavLink>
                            </S.NavListItem>
                            <S.NavListItem>
                                <S.NavLink to="/contact">Contact</S.NavLink>
                            </S.NavListItem>
                        </S.NavList>
                    </S.Nav>
                </S.HeaderWrapper>
            </header> 
        </>
    )
}

export default Header;