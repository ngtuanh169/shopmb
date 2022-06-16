import { useEffect, useRef } from 'react';
import style from './slider.module.css';
import banner1 from '../../assets/images/banner/banner1.jpg';
import banner2 from '../../assets/images/banner/banner3.jpg';
import banner3 from '../../assets/images/banner/banner4.jpg';
function Slider() {
    const sliderRef = useRef();
    const imgRef = useRef();
    const indexRef = useRef(0);

    const pictures = [banner1, banner2, banner3];
    const handleScroll = (index) => {
        if (index < 0) {
            indexRef.current = pictures.length - 1;
        }
        if (index > pictures.length - 1) {
            indexRef.current = 0;
        }
        sliderRef.current.style.transform = `translateX(-${indexRef.current * imgRef.current.clientWidth}px)`;
    };
    const scrollLeft = () => {
        --indexRef.current;
        handleScroll(indexRef.current);
    };
    const scrollRight = () => {
        indexRef.current++;
        handleScroll(indexRef.current);
    };

    useEffect(() => {
        const timerId = setInterval(() => {
            scrollRight();
        }, 5000);
        return () => clearInterval(timerId);
    }, []);

    return (
        <div className={`${style.slider} container`}>
            <div ref={sliderRef} className={`${style.wrap_picture}`}>
                {pictures.map((banner, index) => {
                    return <img key={index} ref={imgRef} src={banner} alt="" />;
                })}
            </div>
            <div className={`${style.prev}`} onClick={scrollLeft}>
                <i className="fa-solid fa-angle-left"></i>
            </div>
            <div className={`${style.next}`} onClick={scrollRight}>
                <i className="fa-solid fa-angle-right"></i>
            </div>
        </div>
    );
}

export default Slider;
