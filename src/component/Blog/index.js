// import Overlay from '../Overlay';
import TitleBox from '../TitleBox';
import BlogItem from './BlogItem';
import style from './blog.module.css';
import picture1 from '../../assets/images/news/news1.jpg';
import picture2 from '../../assets/images/news/news2.jpg';
import picture3 from '../../assets/images/news/news3.jpg';
function Blog() {
    return (
        <>
            <div className="container">
                <TitleBox titleName={'Tin tức mới nhất'} />
                <div className={style.list_blog}>
                    <BlogItem
                        picture={picture1}
                        time={'16-11-1999'}
                        title={'Trải nghiệm ấn tượng ẩn bên trong diện mạo thời trang'}
                        content={'Quá trình đánh giá Tecno POP 5 sẽ giúp bạn có được cái nhìn chi tiết hơn...'}
                    />
                    <BlogItem
                        picture={picture2}
                        time={'06-06-2022'}
                        title={'4 chiếc điện thoại cũ giá rẻ dưới 2 triệu siêu tốt hiện nay (2022)'}
                        content={
                            'Mẫu điện thoại cũ giá rẻ dưới 2 triệu có gì hot? Đây sẽ là cơ hội cho những ai muốn trải nghiệm máy cấu hình cao...'
                        }
                    />
                    <BlogItem
                        picture={picture3}
                        time={'11-11-2021'}
                        title={'Samsung Galaxy A04s xuất hiện trên Geekbench với chip Exynos 850'}
                        content={
                            'Samsung dường như đang chuẩn bị ra mắt mẫu máy kế nhiệm của Galaxy A03s, dự kiến sẽ tiến ra thị trường với tên gọi là Galaxy A04s'
                        }
                    />
                </div>
            </div>
            {/* <Overlay /> */}
        </>
    );
}

export default Blog;
