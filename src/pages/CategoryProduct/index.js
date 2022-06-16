import Path from '../../component/Path';
import TitleBox from '../../component/TitleBox';
import Filter from '../../component/Filter';
import ListProduct from '../../component/ListProduct';
import Pagination from '../../component/Pagination';
import WarrantyPolicy from '../../component/WarrantyPolicy';
import BackToTop from '../../component/BackToTop';
function CategoryProduct() {
    return (
        <>
            <Path list={[{ _name: 'Điện thoại', path: '/danh_muc' }]} />
            <TitleBox titleName={'Điện thoại'} />
            {/*Bộ lọc*/}
            <Filter />
            <ListProduct />
            {/*Phân trang*/}
            <Pagination />
            {/* chính sách bảo hành */}
            <WarrantyPolicy />
            <BackToTop />
        </>
    );
}

export default CategoryProduct;
