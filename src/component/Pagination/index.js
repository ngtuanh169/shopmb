import style from './pagination.module.css';
function Pagination() {
    return (
        <div className={style.pagination}>
            <div className="container">
                <div className={style.pagination_waper}>
                    <ul>
                        {/* <li>
                            <span>
                                <i className="fa-solid fa-angles-left"></i>
                            </span>
                        </li> */}
                        <li>
                            <span>
                                <i className="fa-solid fa-angle-left"></i>
                            </span>
                        </li>
                        <li className={style.active}>
                            <span>1</span>
                        </li>
                        <li>
                            <span>2</span>
                        </li>
                        <li>
                            <span>
                                <i className="fa-solid fa-angle-right"></i>
                            </span>
                        </li>
                        {/* <li>
                            <span>
                                <i className="fa-solid fa-angles-right"></i>
                            </span>
                        </li> */}
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Pagination;
