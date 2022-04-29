import { NavLink, Link, useHistory } from 'react-router-dom';
import { connect, useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import './navbar.scss';
import { logout } from '../../../actions/auth';

function NavBar({ cartCount }) {
  const history = useHistory();
  const dispatch = useDispatch();
  const [open, setMenu] = useState(false);

  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  window.addEventListener('click', (e) => {
    const overlay = document.querySelector('.menu-btn')
    const overlay2 = document.querySelector('.menu-btn__burger')
    if(open === true && e.target !== overlay && e.target !== overlay2) {
      setMenu(false)
    }
  })

  const handleClick = () => {
    dispatch(logout());
    history.push('/');
  }

  const className = open ? "menu-btn open" : "menu-btn";
  const menuClassName = open ? "menu__mobile--open" : "menu__mobile";

  const openBurger = () => {
    if(open === true){
      setMenu(false)
    } else {
      setMenu(true)
    }
  }

    return (
      <> 
      <div className="navbar">
        <div className="navbar__1">
          <NavLink className="navlink" activeClassName="isactive" exact to="/">Accueil</NavLink>
          <NavLink className="navlink"  activeClassName="isactive" exact to="/menu">Menu</NavLink>
          <NavLink className="navlink"  activeClassName="isactive" exact to="/boutique">Boutique</NavLink>
        </div>
        <div className="navbar__2">
        {isLoggedIn?
          <NavLink className="navlink"  activeClassName="isactive" exact to="/compte/informations">Compte</NavLink>
            
      
        :
          <NavLink className="navlink"  activeClassName="isactive" exact to="/compte">Se connecter</NavLink>
        }
        {isLoggedIn && <div className="disconnectBtn"><i onClick={handleClick} className="fas fa-power-off"></i></div>}
          <NavLink className="navlink"  activeClassName="isactive" exact to="/panier">Panier{cartCount ? `(${cartCount})`:''}</NavLink>
          <NavLink className="navlink"  activeClassName="isactive" exact to="/contact">Contact</NavLink>
        </div>
      </div>
      <div className="navbar__mobile">
      {isLoggedIn?
      <NavLink className="navlink"   exact to="/compte/informations">
        <div >
        <i className="fas fa-user"></i>
        </div>
        </NavLink>
        :    
      <NavLink className="navbar__mobile__accountIcon" to="/compte">
      <div >
      <i className="fas fa-user"></i>
      </div>
      </NavLink>
      }
      <div className="navbar__mobile__title">
      <h4> Chibi</h4>
      </div>
      <NavLink className="navbar__mobile__cartIcon" to="/panier">
      <div >
      <i className="fas fa-shopping-cart"></i>{cartCount ? `(${cartCount})`:''}
      </div>
      </NavLink>
        <div onClick={openBurger} className={className}>
        <div className="menu-btn__burger"></div>
        </div>
      </div>
      <div className={menuClassName}>
        <Link className="menu__mobile__link" to="/"><i className="fas fa-home"></i> Accueil</Link>
        <Link className="menu__mobile__link" to="/boutique"><i className="fas fa-store"></i> Boutique</Link>
        <Link className="menu__mobile__link" to="/menu"><i className="fas fa-utensils"></i> Menu</Link>
        <Link className="menu__mobile__link" to="/contact"><i className="fas fa-envelope-square"></i> Contact</Link>
        {isLoggedIn && <div onClick={handleClick} className="disconnectBtn__mobile"><i className="fas fa-power-off"></i> Se déconnecter</div>}
      </div>
    </>
    );
  };

  const mapStateToProps = (state) => {
    return {
        cartCount: state.shop.cart.length
    }
  };
  
  export default connect(mapStateToProps, null)(NavBar);