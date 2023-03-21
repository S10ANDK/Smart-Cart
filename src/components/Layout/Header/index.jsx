import { Link } from 'react-router-dom';
import LogoIcon from '../../../assets/logo_icon.png';
import ShoppingCartIcon from '../../../assets/shopping-cart.png';
import HamburgerButton from './HamburgerButton/index.jsx';
import * as S from './index.styled';
import Nav from './Nav'

function Header () {
    return (
        <>
            <header>
                <S.HeaderWrapper>
                    <S.LogoAndHamburgerMenuWrapper>
                        <S.HamburgerButtonWrapper>
                            <HamburgerButton />
                        </S.HamburgerButtonWrapper>
                        <Link style={{ order: 1 }} to={"/"}>
                            <S.Logo src={LogoIcon} alt="Logo" />
                        </Link>
                    </S.LogoAndHamburgerMenuWrapper>
                    {/* <Nav /> */}
                    <S.CartWrapper>
                        <Link to={"/cart"}>
                            <S.CartIcon src={ShoppingCartIcon} />
                        </Link>
                    </S.CartWrapper>
                </S.HeaderWrapper>
            </header> 
        </>
    )
}

export default Header;