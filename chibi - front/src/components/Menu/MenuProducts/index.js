import PropTypes from 'prop-types';
import ProductsItems from './ProductsItems';

import './menuproducts.scss';

const MenuProducts = ({ products, closeMenuProducts, menuClassName, classMenu, category_name, category_picture }) => {



   return (
    <div className={`products-menu ${classMenu}`}>
      <i onClick={closeMenuProducts} className="fas fa-times-circle"></i>
      <div className="products-menu__contain">            
    { products.map((product) => (
        <ProductsItems key={product.id} {...product} />
          
    ))}
    </div> 
    <div className={`products-menu__cover ${menuClassName}`}>
        
        <figure className="products-menu__cover__front">
        <h1 className="products-menu__cover__front__title">Chibi Café</h1>
        </figure>
        <figure  className="products-menu__cover__back">
            <h2 className="products-menu__cover__back__title">Nos {category_name}</h2>
            <div className="menu-img">
            <img className="products-menu__cover__back__img" src={category_picture} alt={category_name}/>
            </div>
        </figure>
    </div>
    <div className="coverDiv"></div>
    </div>
);

};

MenuProducts.propTypes = {
    products: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number
        })
    ),
    closeMenuProducts: PropTypes.func.isRequired,
    menuClassName: PropTypes.string.isRequired,
    classMenu: PropTypes.string.isRequired,
    category_name: PropTypes.string,
    category_picture: PropTypes.string,
}

MenuProducts.defaultProps = {
    Products: [],
    category_name: "",
    category_picture: "",
}

export default MenuProducts;