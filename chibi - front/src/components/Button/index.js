import './button.scss';
import bread from '../../assets/icons/bread2.png';
import { useState } from 'react';

const Button = ({ children, handleClick, type, disabled }) => {
    const [animation, setAnimation] = useState('');
    return (
        <button 
            type={type} 
            className='basic-button' 
            onClick={handleClick}
            onMouseEnter={() => {
                setAnimation('animation');
            }}
            onMouseLeave={() => {
                setAnimation('');
            }}
            disabled={disabled}
        >
            {children}
            <img className={`basic-button__animation ${animation}`} src={bread} alt="button-chibi" />
        </button>
    );
};

export default Button;