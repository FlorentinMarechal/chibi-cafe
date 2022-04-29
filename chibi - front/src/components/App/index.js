/* eslint-disable default-case */
/* eslint-disable react-hooks/exhaustive-deps */
import './App.scss';
import AppHeader from '../AppHeader';
import { Route, Switch, useLocation } from 'react-router-dom';
import Home from '../Home';
import Cart from '../Cart';
import Delivery from '../Delivery';
import Addresses from '../Addresses';
import Contact from '../Contact';
import Menu from '../Menu';
import Account from '../Account';
import Store from '../Store';
import Footer from '../Footer';
import Confirmation from '../Confirmation';
import Error from '../error';
import Custom from "../Store/Custom";
import ProductsPage from "../Store/ProductsPage";
import Informations from '../Account/Informations';
import Orders from '../Account/Orders';
import StripeContainer from '../StripeContainer';
import Favorites from '../Favorites';
import Team from '../Team';
import { useEffect, useState } from 'react';

function App() {
  const [classNameBackground, setClassNameBackground] = useState('accueil');
  const location = useLocation();

  useEffect(() => {
    switch (location.pathname) {
      case '/':
        setClassNameBackground('accueil');
        break;
      case '/compte/informations':
      case '/compte/favoris':
      case '/compte/commandes':
      case '/compte/adresses':
      case '/compte':
        setClassNameBackground('compte');
        break;
      case '/panier':
        setClassNameBackground('panier');
        break;
      case '/boutique':
        setClassNameBackground('boutique');
        break;
      case '/boutique/5':
        setClassNameBackground('boutique')
        break;
        case '/boutique/6':
        setClassNameBackground('boutique')
        break;
        case '/boutique/7':
        setClassNameBackground('boutique')
        break;
        case '/boutique/formulaire/custom':
        setClassNameBackground('boutique')
        break;
      case '/contact':
        setClassNameBackground('contactB')
        break;
      case '/menu':
        setClassNameBackground('menuB')
        break;
      case '/a-propos':
        setClassNameBackground('teamB')
        break;
      default:
        break;      
    }
  }, [location.pathname]);

  return (
    <div className="App">
    <div className={`background ${classNameBackground}`}></div>
      <AppHeader />
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/menu" exact>
          <Menu />
        </Route>
        <Route path="/boutique" exact>
          <Store />
        </Route>
        <Route path="/compte" exact>
          <Account />
        </Route>
        <Route path="/compte/informations" exact>
          <Informations />
        </Route>
        <Route path="/compte/favoris" exact>
          <Favorites />
        </Route>
        <Route path="/compte/commandes" exact>
          <Orders />
        </Route>
        <Route path="/compte/adresses" exact>
          <Addresses />
        </Route>
        <Route path="/panier" exact>
          <Cart />
        </Route>
        <Route path="/livraison" exact>
          <Delivery />
        </Route>
        <Route path="/paiement" exact>
          <StripeContainer />
        </Route>
        <Route path="/confirmation" exact>
          <Confirmation />
        </Route>
        <Route path="/contact" exact>
          <Contact />
        </Route>
        <Route path="/boutique/:slug" exact>
          <ProductsPage />
        </Route>
        <Route path="/boutique/formulaire/custom" exact>
          <Custom />
        </Route>
        <Route path="/a-propos" exact>
          <Team />
        </Route>
        <Route path="/" >
          <Error />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;