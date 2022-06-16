import style from './product.module.css';
import iphone from '../../../assets/images/product/iPhone_XR_128GB.png';

function Product() {
    return (
        <div className={style.product}>
            <div className={style.product_img}>
                <img src={iphone} alt="" />
            </div>
            <div className={style.product_rating}>
                <ul>
                    <li className={style.rating}>
                        <i className="fa-solid fa-star"></i>
                    </li>
                    <li className={style.rating}>
                        <i className="fa-solid fa-star"></i>
                    </li>
                    <li className={style.rating}>
                        <i className="fa-solid fa-star"></i>
                    </li>
                    <li>
                        <i className="fa-solid fa-star"></i>
                    </li>
                    <li>
                        <i className="fa-solid fa-star"></i>
                    </li>
                </ul>
            </div>
            <div className={style.product_name}>
                <span>iPhone XR 128GB</span>
            </div>
            <div className={style.product_price}>
                <span>13.000.000₫</span>
            </div>
            <div className={style.post_hover}>
                <p>
                    <button>
                        <i className="fa-solid fa-heart"></i>
                    </button>
                    <button>
                        <i className="fa-solid fa-eye"></i>
                    </button>
                    <button>
                        <i className="fa-solid fa-cart-plus"></i>
                    </button>
                </p>
            </div>
        </div>
    );
}

export default Product;
