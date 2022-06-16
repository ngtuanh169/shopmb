import style from './FeaturedProducts.module.css';
import ListProduct from '../ListProduct';
import TitleBox from '../TitleBox';
function FeaturedProducts() {
    return (
        <div className="container">
            <TitleBox titleName={'Sản phẩm nổi bật'} />
            <div className={style.category_tabs}>
                <ul>
                    <li className={style.select}>Điện thoại</li>
                    <li>Laptop</li>
                    <li>Tablet</li>
                </ul>
            </div>
            <ListProduct />
        </div>
    );
}

export default FeaturedProducts;
