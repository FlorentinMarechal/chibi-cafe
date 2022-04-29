/* eslint-disable react-hooks/exhaustive-deps */
import "./cart.scss";
import CartItem from "./cartItem";
import { calculPrice } from "../../pipes/calculPrice";
import { connect, useSelector } from "react-redux";
import Button from "../Button";
import { useDispatch } from "react-redux";
import { checkPrice } from "../../actions/shop";
import { setMessage } from "../../actions/message";
import { useHistory } from 'react-router-dom';
import useModal from "../../hooks/useModal";
import Login from '../Account/Login';
import { useEffect } from "react";

const Cart = (props) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const { isShowing, toggle } = useModal();
  const { message } = useSelector((state) => state.message);
  const { isLoggedIn } = useSelector((state) => state.auth);

  localStorage.setItem('cart', JSON.stringify(props.cartItems))

  const orderNext = () => {
    dispatch(checkPrice());
    verifyLogged();
  }

  const verifyLogged = () => {
    if (message === "Prix vérifié") {
      if(isLoggedIn) {
        history.push('/livraison');
      } else {
        toggle();
      }
    }
    dispatch(setMessage(""));
  }

  useEffect(verifyLogged, [message]);

  return (
    <div className="cart-container" >
      <div className="cart">
          <div className="cart__header">
              Votre Panier :
          </div>
          <div className="cart__content">
          <div className="cart__body">
          { props.cartItems.length !== 0 &&
          <div className="cart__body__legend">
                <div className="cart__body__designation">
                  Désignation
                </div>
                <div className="cart__body__unitPrice">
                    Prix unitaire
                </div>
                <div className="cart__body__quantity">
                    Quantité
                </div>
                <div className="cart__body__underPricer">
                  Sous total
                </div>
              </div>
            }                 
              {props.cartItemCount ? props.cartItems.map(cart => (
                  <CartItem {...cart} key={cart.id} />
              )) : <h2 className="cart__body__none">Votre Panier est vide</h2> }
          </div>
          { props.cartItems.length !== 0 &&
        <div className="cart__ender">
          <div className="cart__ender__header">
              Total TTC
          </div>
          <div className="cart__ender__price">
              <b>{`${props.totalPrice.toFixed(2)} €`}</b>
          </div>
          <div className="cart__ender__footer">
            <Button handleClick={() => orderNext()}>
              Poursuivre la commande
            </Button>
          </div>
        </div>
        }
        </div>
      </div>
      {isShowing && 
        <div className="modal-overlay">
          <div className="modal-wrapper">
              <div className="modal">
                <div className="modal-header">
                    <h4>Veuillez vous connecter pour poursuivre la commande.</h4>
                    <button
                    type="button"
                    className="modal-close-button"
                    onClick={toggle}
                    >
                    <span style={{fontSize: "3rem"}}>&times;</span>
                    </button>
                </div>
                <div className="modal-flex">
                  <Login to="/livraison"/>
                </div>
              </div>
          </div>
        </div>
      }
    </div>
  );
};

  const mapStateToProps = (state) => {

    console.log(state, 'state has changed');

    return {
        cartItems: state.shop.cart,
        cartItemCount: state.shop.cart.reduce((count, curItem) => {
            return count + curItem.quantity;
        }, 0),
        totalPrice: state.shop.cart.reduce((count, curItem) => {
            return count + (calculPrice(curItem.price_without_taxes, curItem.taxe) * curItem.quantity);
        }, 0),
    }
}
  
export default connect(mapStateToProps, null) (Cart);