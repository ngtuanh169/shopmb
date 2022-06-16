import { useRef, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import style from './headerTools.module.css';

function HeaderTools() {
    const [iconSearch, SeticonSearch] = useState(false);
    const ref = useRef();
    const searchToggle = () => {
        SeticonSearch(!iconSearch);
        ref.current.classList.toggle(style.active);
        if (!iconSearch) {
            ref.current.querySelector('input').focus();
        } else {
            ref.current.querySelector('input').blur();
        }
    };
    return (
        <div className={style.header_tools}>
            <ul id={style.parent}>
                <li id={style.myAccount}>
                    <span>
                        <i className="fa-regular fa-user"></i>
                    </span>
                    <div className={style.myAccount_menu}>
                        <ul>
                            <li>
                                <span>
                                    <Link to="/dang_ky">
                                        <i className="fa-solid fa-address-card"></i>Đăng ký
                                    </Link>
                                </span>
                            </li>
                            <li>
                                <Link to="/dang_nhap">
                                    <span>
                                        <i className="fa-solid fa-right-to-bracket"></i>Đăng nhập
                                    </span>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </li>
                <li id={style.search}>
                    <span onClick={searchToggle}>
                        {!iconSearch && <i className="fa-solid fa-magnifying-glass"></i>}
                        {iconSearch && <i className="fa-solid fa-xmark"></i>}
                    </span>
                    <div ref={ref} className={`${style.search_toggle}`}>
                        <div className={style.searchBox}>
                            <input type="text" placeholder="Nhập tìm kiếm..." />
                            <button>
                                <i className="fa-solid fa-magnifying-glass"></i>
                            </button>
                        </div>
                    </div>
                </li>
                <li>
                    <Link to="/gio_hang">
                        <span>
                            <i className="fa-solid fa-cart-shopping"></i>
                        </span>
                    </Link>
                </li>
            </ul>
        </div>
    );
}

export default HeaderTools;
