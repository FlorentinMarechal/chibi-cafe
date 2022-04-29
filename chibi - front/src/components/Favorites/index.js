/* eslint-disable react-hooks/exhaustive-deps */
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from "react";
import { fetchFavorites } from "../../actions/favorites";

import AsideNavbar from '../Account/AsideNavbar';
import Content from "../Content";

import './favorites.scss';
import { Redirect } from 'react-router-dom';

const Favorites = () => {
    const dispatch = useDispatch();
    const { favorites } = useSelector((state) => state.favoritesReducer);
    console.log("favorites", favorites);

    const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
    
    useEffect(
        () => {
            console.log('Aller chercher les favoris');
            dispatch(fetchFavorites());
        },
        [],
    );

    if (!isLoggedIn) {
        return <Redirect to="/compte" />
    }
    return (
        <AsideNavbar>
            <Content
            title="Mes produits favoris"
            text="Ma sélection de produits favoris"
            products={favorites}
            />
        </AsideNavbar>
    
    );
};

export default Favorites;