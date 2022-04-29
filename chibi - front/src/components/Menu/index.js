/* eslint-disable react-hooks/exhaustive-deps */
import Solid from './Solid';
import Liquid from './Liquid';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { fetchFoodCategories } from "../../actions/menu";
import { fetchArticles } from '../../actions/shop';
import MenuProducts from './MenuProducts';
import CoffeeLoader from '../CoffeeLoader';

import './menu.scss';

function Menu() {
  const [ loading, setLoading ] = useState(true);
  const [seeProducts, setOpenProducts] = useState(false)
  const [pageProducts, setProducts] = useState([])
  const [categorieName, setNameCat] = useState([])

  const [mouseoverLiquid, setMouseoverLiquid] = useState('')
  const [mouseoverSolid, setMouseoverSolid] = useState('')

  const categories = useSelector((state) => state.shop.categories.filter(category => category.type_of_product === false))
  const products = useSelector((state) => state.shop.products)

  const findProducts = (target, target2) => {
    setProducts(products.filter((product) =>  product.category_id === Number(target) || product.category_id === Number(target2)));
    findCategorie(target, target2)
    setOpenProducts(true)
  } 


  const closeMenuProducts = () => {
    setOpenProducts(false)
  }

  const findCategorie = (id, id2) => {
    setNameCat(categories.find((categorie) => categorie.id === Number(id) || categorie.id === Number(id2)));

  }

  const solids = categories.filter(category => category.state === true);
  const liquids = categories.filter(category => category.state === false);

  const menuClassName = seeProducts ? "active" : "inactive";
  const classMenu = seeProducts ? "" : "nonvisible";
  const overlayClasseName = seeProducts ? "overOn" : "";

  const dispatch = useDispatch()

  useEffect(
    () => {
      dispatch(fetchFoodCategories())
      dispatch(fetchArticles())
      setTimeout(() => setLoading(false), 2000);
      
    },
    [],
  );

  if (loading) {
    return <CoffeeLoader />;
  }

  return (
    <>      
    <div className='menu'>
      <div className='menu__solid'>
        <Solid solids={solids} findProducts={findProducts} mouseoverSolid={mouseoverSolid}   setMouseoverSolid={setMouseoverSolid} />
      </div>
      <div  className="menu__liquid">
        <Liquid liquids={liquids} findProducts={findProducts} mouseoverLiquid={mouseoverLiquid}   setMouseoverLiquid={setMouseoverLiquid}/>
      </div>
      
      <MenuProducts products={pageProducts} closeMenuProducts={closeMenuProducts} menuClassName={menuClassName} classMenu={classMenu} {...categorieName}/>
    
    </div>
    <div onClick={() => setOpenProducts(false)} className={`menu-overlay ${overlayClasseName}`}></div>
    </>
  );
}
  
export default Menu;