import style from './backtotop.module.css';
function BackToTop() {
    return (
        <button className={`${style.back_to_top} ${style.show}`}>
            <i className="fa-solid fa-arrow-up"></i>
        </button>
    );
}

export default BackToTop;
