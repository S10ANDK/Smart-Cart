import { Link } from 'react-router-dom';
import LogoIcon from '../../../assets/logo_icon.png';
import ShoppingCartIcon from '../../../assets/shopping-cart.png';
import Nav from './Nav/index.jsx';
import * as S from './index.styled';

function Header () {
    return (
        <>
            <header>
                <S.HeaderWrapper>
                    <S.LogoAndNavWrapper>
                        <S.NavWrapper>
                            <Nav />
                        </S.NavWrapper>
                        <Link to={"/"}>
                            <S.Logo src={LogoIcon} alt="Logo" />
                        </Link>
                    </S.LogoAndNavWrapper>
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