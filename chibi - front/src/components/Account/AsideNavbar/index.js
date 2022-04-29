import { NavLink } from 'react-router-dom';

import './aside-navbar.scss';

const AsideNavbar = ({ children }) => (
    <div className='aside-navbar-container'>
        <div className='aside-navbar'>
            <NavLink className="aside-navbar__link" activeClassName="aside-navbar__link--active" exact to="/compte/informations">
            <ion-icon name="alert-circle-sharp"></ion-icon>
            </NavLink>

            <NavLink className="aside-navbar__link" activeClassName="aside-navbar__link--active" exact to="/compte/favoris">
            <ion-icon name="bookmarks"></ion-icon>
            </NavLink>
            
            <NavLink className="aside-navbar__link" activeClassName="aside-navbar__link--active" exact to="/compte/commandes">
            <ion-icon name="cart-sharp"></ion-icon>
            </NavLink>

            <NavLink className="aside-navbar__link" activeClassName="aside-navbar__link--active" exact to="/compte/adresses">
            <ion-icon name="map"></ion-icon>
            </NavLink>
        </div>
        { children }
    </div>
);

export default AsideNavbar;