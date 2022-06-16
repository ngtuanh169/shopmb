import Home from '../pages/Home';
import CategoryProduct from '../pages/CategoryProduct';
import News from '../pages/News';
import Contact from '../pages/Contact';
import Profile from '../pages/Profile';
import Registration from '../pages/Registration';
import Login from '../pages/Login';
import Cart from '../pages/Cart';

const publicRoutes = [
    { path: '/', component: Home },
    { path: '/danh_muc', component: CategoryProduct },
    { path: '/tin_tuc', component: News },
    { path: '/lien_he', component: Contact },
    { path: '/profile', component: Profile },
    { path: '/dang_ky', component: Registration },
    { path: '/dang_nhap', component: Login },
    { path: '/gio_hang', component: Cart },
];
const privateRoutes = [];
export { publicRoutes, privateRoutes };
