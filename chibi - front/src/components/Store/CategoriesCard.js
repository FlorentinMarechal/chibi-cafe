import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

const CategoriesCard = ({category, id, category_name, category_picture }) => {

    const className = id === 5 ? "container__right" : "container__left";

return(
<Link className={`${className}__categories__decores`} to={`/boutique/${id}`}>
              <img
                src={category_picture}
                className={`${className}__categories__image`}
                alt={category_name}
              />
              <p className={`${className}__categories__text`}>{category_name}</p>
            </Link>
    )
}

CategoriesCard.propTypes = {
    category: PropTypes.shape({ 
    id: PropTypes.number.isRequired,
    category_name: PropTypes.string.isRequired,
    category_picture: PropTypes.string.isRequired,
    }) 
}



export default CategoriesCard;