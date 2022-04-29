import SolidCats from '../SolidCats';
import PropTypes from 'prop-types'
import './solid.scss';

const Solid = ({ solids, findProducts, mouseleave, mouseoverSolid, setMouseoverSolid }) => { 


return (

    <div className='solid'>
    { solids.map((solid) => (
        <SolidCats  key={solid.id}  {...solid} findProducts={findProducts} mouseoverSolid={mouseoverSolid} setMouseoverSolid={setMouseoverSolid}
           newClassName={mouseoverSolid === "" ? "" : mouseoverSolid === solid.category_name ? "active" : "inactive"} 
        />
    ))}
        
    </div>
);
};

Solid.propTypes = {
    solids: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
        })
    ).isRequired,
     
    findProducts: PropTypes.func.isRequired,

}

export default Solid;