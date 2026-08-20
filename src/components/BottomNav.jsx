import { NavLink } from 'react-router-dom';
function BottomNav() {
    return (
        <div className='bottom-nav'>
            <NavLink className='nav-item' to="/">Ana Sayfa</NavLink>
            <NavLink className='nav-item' to="/add-listing">İlan Ekle</NavLink>
            <NavLink className='nav-item' to="/donations">Bağış Yap</NavLink>
            <NavLink className='nav-item' to="/register">Kayıt ol</NavLink>

        </div>
    );
}
export default BottomNav;