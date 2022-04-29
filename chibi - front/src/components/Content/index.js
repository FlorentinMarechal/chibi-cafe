import PropTypes from "prop-types";

import CardFavorite from '../Favorites/CardFavorite';

import './content.scss';

const Content = ({ title, text, products }) => {
console.log(products);
    
    return (
        <div className='content'>
            <h2 className="content__title">{title}</h2>
            <p className="content__text">{text}</p>
            {products && (
                <div className="content__list">
                    {products.map((product) => (
                        <CardFavorite key={product.product_id} {...product} />
                    ))}
                </div>
            )}
        </div>
    );
}


Content.propTypes = {
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    favorites: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
        }),
    ),
};

export default Content;