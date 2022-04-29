import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { addFavorites, deleteFavorites } from '../../../../actions/favorites';

import './like.scss';

const Like = ({ product }) => {
    const favorites = useSelector((state) => state.favoritesReducer.favorites);
    console.log("favorites:", favorites);
    console.log("product de Like:", product);
    const [classNameLike, setClassNameLike] = useState("left");
    const [classNameAnim, setClassNameAnim] = useState("like__icon");
    const [count, setCount] = useState(0);
    const dispatch = useDispatch();

    const onClick= () => {
        if(count === 0) {
            setClassNameAnim('like__icon--anim');
            dispatch(addFavorites(product))
            setClassNameLike('right');
            setCount(1);
        } else {
            dispatch(deleteFavorites(product.id));
            setClassNameLike('left');
            setCount(0);
        }
    }

    useEffect(
        () => {
            if (favorites) {
                if (favorites.find((favorite) => favorite.product_id === product.id)) {
                    setClassNameLike('right');
                    setCount(1);
                } else {
                    setClassNameLike('left');
                    setCount(0);
                }
            }
        },
        [favorites, product.id],
    )



    return (
        <div className='like'>
            <div
            onClick={onClick}
            onAnimationEnd={() => setClassNameAnim('like__icon')}
            className={`like__icon ${classNameAnim}`}
            style={{backgroundPosition: `${classNameLike}`}}></div>
        </div>
    );
}

export default Like;