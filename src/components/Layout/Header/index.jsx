import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import LogoIcon from "../../../assets/logo_icon.png";
import ShoppingCartIcon from "../../../assets/shopping-cart.png";
import Nav from "./Nav/index.jsx";
import * as S from "./index.styled";

function Header() {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.pageYOffset > 0);
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <S.Header className={isSticky ? "sticky" : ""}>
        <S.HeaderContentWrapper>
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
        </S.HeaderContentWrapper>
      </S.Header>
    </>
  );
}

export default Header;
