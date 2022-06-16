import style from './filters.module.css';
function Fiters({ show, closeFiters }) {
    return (
        <div className={`${style.filters} ${show && style.show}`}>
            <div className={style.filters_title}>
                <h4>
                    <i className="fa-solid fa-filter"></i>Bộ lọc
                </h4>
                <button className={style.close} onClick={closeFiters}>
                    <i className="fa-solid fa-xmark"></i>
                </button>
            </div>
            <div className={style.filters_item}>
                <label htmlFor="">Nhãn hàng:</label>
                <select name="" id="">
                    <option value="">Tất cả</option>
                    <option value="">Apple</option>
                    <option value="">Oppo</option>
                    <option value="">Samsung</option>
                </select>
            </div>
            <div className={style.filters_item}>
                <label htmlFor="">Chọn giá:</label>
                <select name="" id="">
                    <option value="">Tất cả</option>
                    <option value="">Dưới 5 triệu</option>
                    <option value="">Từ 5 - 10 triệu</option>
                    <option value="">Từ 10 - 15 triệu</option>
                    <option value="">Từ 15 - 20 triệu</option>
                    <option value="">Trên 25 triệu</option>
                </select>
            </div>
            <div className={style.filters_item}>
                <label htmlFor="">Trạng thái:</label>
                <select name="" id="">
                    <option value="">Tất cả</option>
                    <option value="">Mới nhất</option>
                    <option value="">Nổi bật</option>
                </select>
            </div>
            <button className={style.btn_submit}>Lọc ngay</button>
        </div>
    );
}

export default Fiters;
