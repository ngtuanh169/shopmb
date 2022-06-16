import Slider from '../../component/Slider';
import Service from '../../component/Service';
import Category from '../../component/Category';
import FeaturedProducts from '../../component/FeaturedProducts';
import Blog from '../../component/Blog';
import Partners from '../../component/Partners';
function Home() {
    return (
        <>
            <Slider />
            {/*dịch vụ*/}
            <Service />
            {/* danh mục */}
            <Category />
            {/* sản phẩm nổi bật */}
            <FeaturedProducts />
            <Blog />
            {/* đối tác */}
            <Partners />
        </>
    );
}

export default Home;
