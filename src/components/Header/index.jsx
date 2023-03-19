import { Link } from 'react-router-dom';
import LogoIcon from '../../assets/logo_icon.png';
import { Logo } from './index.styled';

function Header () {
    return (
        <>
            <header>
                <Logo src={LogoIcon} alt="Logo"/>
                <nav>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/cart">Cart</Link>
                        </li>
                        <li>
                            <Link to="/products">Products</Link>
                        </li>
                        <li>
                            <Link to="/contact">Contact</Link>
                        </li>
                    </ul>
                </nav>
            </header> 
        </>
    )
}

export default Header;