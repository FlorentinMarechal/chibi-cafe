import PropTypes from 'prop-types';

const ProductsItems = ({ product_picture, product_name }) => {


   return (
    <div className='product-card'>
    <div className="product-card__img">
        <img src={product_picture} alt={product_name} />
        </div>
        <h4>{product_name}</h4>
        
    </div>
);

};

ProductsItems.propTypes = {
    product_name: PropTypes.string.isRequired,
    product_picture: PropTypes.string
}

ProductsItems.defaultProps = {
    product_picture: "https://ae01.alicdn.com/kf/H65f5d866bfa94c328fb965b75d630e770/Mod-le-de-fausse-cr-pe-en-plastique-avec-support-fausse-cr-pe-en-forme-de.jpg_Q90.jpg_.webp"
}


export default ProductsItems;