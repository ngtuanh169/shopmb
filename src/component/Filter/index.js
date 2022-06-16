import { useRef, useState } from 'react';
import Fiters from './Filters';
import FadeIn from '../FadeIn';
import style from './filter.module.css';
function Filter() {
    const [showFiters, setShowFiters] = useState(false);
    const openFiters = () => {
        setShowFiters(true);
    };
    return (
        <div className={style.filter}>
            <Fiters
                show={showFiters}
                closeFiters={() => {
                    setShowFiters(false);
                }}
            />
            {showFiters && (
                <FadeIn
                    onClick={() => {
                        setShowFiters(false);
                    }}
                />
            )}
            <div className="container">
                <div className={style.filters}>
                    <button onClick={openFiters}>
                        <i className="fa-solid fa-filter"></i>Bộ lọc
                    </button>
                </div>
                <div className={style.sort}>
                    <span>
                        <i className="fa-solid fa-sort"></i>Sắp xếp
                    </span>
                    <select name="" id="">
                        <option value="">Bán chạy nhất</option>
                        <option value="">Giá thấp</option>
                        <option value="">Giá cao</option>
                    </select>
                </div>
            </div>
        </div>
    );
}

export default Filter;
