/* eslint-disable react-hooks/exhaustive-deps */
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { fetchCategories } from "../../actions/shop";

import presImage from "../../assets/presentation-sables/presentation-sables.png";
import custom from "../../assets/presentation-sables/custom1.jpg";
import CategoriesCard from './CategoriesCard';
import './store.scss';
import CoffeeLoader from '../CoffeeLoader';

const Store = () => {
  const [ loading, setLoading ] = useState(false);
  const categories = useSelector((state) => state.shop.categories)

  const dispatch = useDispatch();
  useEffect(
    () => {
      dispatch(fetchCategories());
      //setTimeout(() => setLoading(false), 1000);
    },
    [],
  );

  if (loading) {
    return <CoffeeLoader />;
  }

    return (
      <div className="container">

        <div className="container__left">
  
          <div className="container__left__categories">
          { categories.slice(0,2).map((categorie) => (
            <CategoriesCard key={categorie.id} {...categorie}/>
             ))}
          </div>  

        </div>

          <div className="container__center">
            <img
              src={presImage}
              className="container__center__title"
              alt="Présentation Sablés"
            />
            <p className="container__center__description">Tous nos sablés à la vanille sont réalisés par notre artisan avec de la glace royale onctueuse, à base de sucre glace, de blanc d'œuf et de couleurs naturelles.</p>
          </div>

        <div className="container__right">
          <div className="container__right__categories">
          
          
            <CategoriesCard key={categories[2]} {...categories[2]} />
      

            <Link className="container__right__categories__custom" to="/boutique/formulaire/custom">
              <img
                src={custom}
                className="container__right__categories__image"
                alt="Sablés Personnalisables"
              />
              <p className="container__right__categories__text">Sablés personnalisés</p>
            </Link>
          </div>

        </div>
        
      </div>
    );
  }
  
export default Store;
