import PropTypes from 'prop-types';
import './liquidcats.scss';

const LiquidCats = ({ category_name, category_picture, id, findProducts, setMouseoverLiquid, mouseoverLiquid, newClassName }) => {



    const mystyle = {
        background: `url(${category_picture})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: '45%',
        backgroundSize: "cover"
      };

      

 const onMouseOver = () => {
   setMouseoverLiquid(category_name)
}
 
const mouseleaver = () => {
   setMouseoverLiquid('')
}

  

    
 return   (
    <div onMouseLeave={mouseleaver} onMouseEnter={onMouseOver}  onClick={(e) => findProducts(e.target.id, e.target.className)} id={`${id}`} style={mystyle} 
     className={`liquid__categories ${category_name} ${newClassName} `}>
        <h2 className={`${id}`} style={{marginTop: '2rem', textAlign: 'center'}} >{category_name}</h2>
        
    </div>
);

};



LiquidCats.propTypes = {
    findProducts: PropTypes.func.isRequired,
    category_name : PropTypes.string.isRequired,
    category_picture : PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,


}

export default LiquidCats;