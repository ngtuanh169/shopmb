import Product from './Product';
import style from './listProduct.module.css';
function ListProduct() {
    return (
        <div className="container">
            <div className={style.box}>
                <div className={style.list_product}>
                    <Product />
                    <Product />
                    <Product />
                    <Product />
                    <Product />
                    <Product />
                    <Product />
                    <Product />
                </div>
            </div>
        </div>
    );
}

export default ListProduct;
