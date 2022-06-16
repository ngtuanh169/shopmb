import style from './cagetoryItem.module.css';
function CagetoryItem({ img, name, useref }) {
    return (
        <div ref={useref} className={style.cagetory_item}>
            <span className={style.cagetory_icon}>
                <img src={img} alt="" />
            </span>
            <span className={style.cagetory_name}>{name}</span>
        </div>
    );
}

export default CagetoryItem;
