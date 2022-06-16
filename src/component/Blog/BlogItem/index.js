import { useState } from 'react';
import Overlay from '../../Overlay';
import style from './blogItem.module.css';
function BlogItem({ picture, time, title, content }) {
    const [overlay, setOverlay] = useState(false);
    const showOverlay = () => {
        setOverlay(true);
    };
    const closeOverlay = () => {
        setOverlay(false);
    };
    return (
        <>
            <div className={style.blog_item}>
                <div className={style.blog_item_img}>
                    <img src={picture} alt="" />
                    <div className={style.blog_hover}>
                        <div className={style.time}>
                            <i className="fa-solid fa-calendar-days"></i>
                            <span>{time}</span>
                        </div>
                        <div className={style.title}>
                            <span>{title}</span>
                        </div>
                        <div className={style.content}>
                            <span>{content}</span>
                        </div>
                    </div>
                    <div className={style.post_hover}>
                        <p>
                            <button onClick={showOverlay}>
                                <i className="fa-solid fa-magnifying-glass-plus"></i>
                            </button>
                            <button>
                                <i className="fa-solid fa-eye"></i>
                            </button>
                        </p>
                    </div>
                    <div className={style.fade_in}></div>
                </div>
            </div>
            {overlay && <Overlay image={picture} close={closeOverlay} />}
        </>
    );
}

export default BlogItem;
