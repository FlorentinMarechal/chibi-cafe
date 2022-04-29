
import LiquidCats from '../LiquidCats';
import PropTypes from 'prop-types'
import './liquid.scss';

const Liquid = ({ liquids, findProducts, mouseoverLiquid, setMouseoverLiquid }) => { 


    

return (

    <div  className='liquid'>
    { liquids.map((liquid) => (
        <LiquidCats  key={liquid.id}  {...liquid} findProducts={findProducts}  mouseoverLiquid={mouseoverLiquid} setMouseoverLiquid={setMouseoverLiquid} 
        newClassName={mouseoverLiquid === "" ? "" : mouseoverLiquid === liquid.category_name ? "active" : "inactive"}/>
    ))}
        
    </div>
);
};

Liquid.propTypes = {
    liquids: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
        })
    ).isRequired,
     
    findProducts: PropTypes.func.isRequired,

}

export default Liquid;