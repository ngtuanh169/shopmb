import { Link } from 'react-router-dom';

import DropdownMenu from './DropdownMenu';
import HeaderTools from './HeaderTools';
import style from './header.module.css';
import Logo from '../../../assets/images/icon/logo.png';
// import banner1 from '../../../assets/images/banner/banner1.png';

function Header() {
    return (
        <header>
            <div className={`${style.row} container`}>
                <div className={style.header_logo}>
                    <Link to="/">
                        <img src={Logo} />
                    </Link>
                </div>
                <div className={style.header_menu}>
                    <ul>
                        <li>
                            <span>
                                <Link to="/">Trang chủ</Link>
                            </span>
                        </li>
                        <li className={style.dropdown}>
                            <span>
                                Sản phẩm<i className="fa-solid fa-sort-down"></i>
                            </span>
                            <div className={`${style.dropdown_menu} container`}>
                                <DropdownMenu />
                            </div>
                        </li>
                        <li>
                            <span>
                                <Link to="/tin_tuc">Tin tức</Link>
                            </span>
                        </li>
                        <li>
                            <span>
                                <Link to="/lien_he">Liên hệ</Link>
                            </span>
                        </li>
                    </ul>
                </div>
                <HeaderTools />
            </div>
        </header>
    );
}

export default Header;
