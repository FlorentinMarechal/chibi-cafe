import { useDispatch, useSelector } from 'react-redux';
import { addProductToCart,  } from '../../../actions/shop';
import { useState } from 'react';
import { addFavorites } from "../../../actions/favorites";
import PropTypes from 'prop-types';
import { calculPrice } from '../../../pipes/calculPrice';
import Like from './Like';
import Button from '../../Button';

const ProductCard = ({ product }) => {
  
  const cart = useSelector((state) => state.shop.cart)
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  const cardToCart = cart.find((card) => card.id === product.id )

  const [modaleAnim, setModalAnim] = useState("")


  const dispatch = useDispatch()
  

  const onCart = () => {
    dispatch(addProductToCart(product));
    setTimeout(() => setModalAnim("modaleAnim"), 100);
     setModalAnim("");
    
  }

  const onFavorites = () => {
    dispatch(addFavorites(product));
  }

    return (
      <div className="storeCard">
          <h3 className="storeCard__name">{product.product_name}</h3>
          <div className="storeCard__img">
          <img src={product.product_picture} alt={product.product_name} />
          </div>
          <p className="storeCard__price">{calculPrice(Number(product.price_without_taxes), Number(product.taxe))} €</p>
          <Button
          id={product.id}
          handleClick={onCart} 
          type="button"> ajouter au panier</Button>

          {
            cardToCart ? <div className={`storeCard__modale ${modaleAnim}`}>{cardToCart.quantity}</div> : ''
          }
        { isLoggedIn &&   
          <Like
          onClick={onFavorites}
          product={product}
          type="button">
          </Like>
          }
      </div>
    );
  }

  ProductCard.propTypes = {
    product: PropTypes.shape({
      id: PropTypes.number.isRequired,
      product_name: PropTypes.string.isRequired,
      price_without_taxes: PropTypes.string.isRequired,
      taxe: PropTypes.string.isRequired,
      product_picture: PropTypes.string.isRequired,
    }).isRequired,
  }
  
export default ProductCard;