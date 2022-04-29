import './categories.scss';

import { Link } from 'react-router-dom'

const Categories = ({ image, title}) => (
    <div className='categories'>
        <Link className="categories__link">
            <img
                className='categories__link__img'
                src={image}    
                alt={title}
                />
            <p className='categories__link__text'>{title}</p>
        </Link>
    </div>
);

export default Categories;