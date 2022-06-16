import style from './overlay.module.css';
function Overlay({ image, close }) {
    return (
        <div className={style.overlay}>
            <div className={style.box_img}>
                <img src={image} alt="" />
                <button onClick={close}>
                    <i className="fa-solid fa-xmark"></i>
                </button>
            </div>
        </div>
    );
}

export default Overlay;
