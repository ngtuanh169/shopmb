import { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import CagetoryItem from './CagetoryItem';
import TitleBox from '../TitleBox';
import laptop from '../../assets/images/product/laptop.png';
import phone from '../../assets/images/product/phone.png';
import tablet from '../../assets/images/product/tablet.png';
import pc from '../../assets/images/product/pc.png';
import sim from '../../assets/images/product/sim.png';
import headphone from '../../assets/images/product/tainghe.png';
import prev from '../../assets/images/product/prev.png';

import style from './category.module.css';
function Category() {
    const containerCagetory = useRef();
    const ListCagetory = useRef();
    const cagetoryItem = useRef();
    const scrollLeft = () => {
        ListCagetory.current.style.transform = `translateX(-${cagetoryItem.current.offsetWidth * 0}px)`;
    };
    const scrollRight = () => {
        ListCagetory.current.style.transform = `translateX(-${cagetoryItem.current.offsetWidth}px)`;
    };
    useEffect(() => {
        // console.log(ListCagetory.current);
        // console.log(cagetoryItem.current);
    }, []);
    return (
        <div className="container">
            <TitleBox titleName={'Danh mục sản phẩm'} />
            <div ref={containerCagetory} className={style.container_list_cagetory}>
                <button className={`${style.prev}`} onClick={scrollLeft}>
                    <i className="fa-solid fa-angle-left"></i>
                </button>
                <button className={`${style.next}`} onClick={scrollRight}>
                    <i className="fa-solid fa-angle-right"></i>
                </button>
                <div ref={ListCagetory} className={style.list_cagetory}>
                    <Link to="/danh_muc">
                        <CagetoryItem useref={cagetoryItem} img={laptop} name={'Laptop'} />
                    </Link>
                    <Link to="/danh_muc">
                        <CagetoryItem img={phone} name={'Điện thoại'} />
                    </Link>
                    <Link to="/danh_muc">
                        <CagetoryItem img={tablet} name={'Tablet'} />
                    </Link>
                    <Link to="/danh_muc">
                        <CagetoryItem img={pc} name={'Máy tính để bàn'} />
                    </Link>
                    <Link to="/danh_muc">
                        <CagetoryItem img={sim} name={'Sim thẻ'} />
                    </Link>
                    <Link to="/danh_muc">
                        <CagetoryItem img={headphone} name={'Tai nghe'} />
                    </Link>
                    <Link to="/danh_muc">
                        <CagetoryItem img={prev} name={'Máy cũ giá rẻ'} />
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Category;
