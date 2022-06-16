import style from './DropDownMenu.module.css';
import product from '../../../../assets/images/product/iPhone_XR_128GB .jpg';

function DropdownMenu() {
    return (
        <>
            <div className={style.dropdown_menu_left}>
                <ul>
                    <h3>Danh mục sản phẩm</h3>
                    <li>Laptop</li>
                    <li>Điện thoại</li>
                    <li>Tablet</li>
                    <li>PC - LINH KIỆN</li>
                    <li>Loa - Tai nghe</li>
                    <li>SIM THẺ</li>
                </ul>
            </div>
            <div className={style.dropdown_menu_right}>
                <h3>Bán chạy nhất</h3>
                <div className={style.item}>
                    <div className={style.imageProduct}>
                        <img src={product} />
                    </div>
                    <div className={style.content}>
                        <div className={style.nameProduct}>Samsung Galaxy A22 5G</div>
                        <div className={style.priceProduct}>5.690.000 đ</div>
                    </div>
                </div>
                <div className={style.item}>
                    <div className={style.imageProduct}>
                        <img src={product} />
                    </div>
                    <div className={style.content}>
                        <div className={style.nameProduct}>Samsung Galaxy A22 5G</div>
                        <div className={style.priceProduct}>5.690.000 đ</div>
                    </div>
                </div>
                <div className={style.item}>
                    <div className={style.imageProduct}>
                        <img src={product} />
                    </div>
                    <div className={style.content}>
                        <div className={style.nameProduct}>Samsung Galaxy A22 5G</div>
                        <div className={style.priceProduct}>5.690.000 đ</div>
                    </div>
                </div>
                <div className={style.item}>
                    <div className={style.imageProduct}>
                        <img src={product} />
                    </div>
                    <div className={style.content}>
                        <div className={style.nameProduct}>Samsung Galaxy A22 5G</div>
                        <div className={style.priceProduct}>5.690.000 đ</div>
                    </div>
                </div>
                <div className={style.item}>
                    <div className={style.imageProduct}>
                        <img src={product} />
                    </div>
                    <div className={style.content}>
                        <div className={style.nameProduct}>Samsung Galaxy A22 5G</div>
                        <div className={style.priceProduct}>5.690.000 đ</div>
                    </div>
                </div>
                <div className={style.item}>
                    <div className={style.imageProduct}>
                        <img src={product} />
                    </div>
                    <div className={style.content}>
                        <div className={style.nameProduct}>Samsung Galaxy A22 5G</div>
                        <div className={style.priceProduct}>5.690.000 đ</div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default DropdownMenu;
