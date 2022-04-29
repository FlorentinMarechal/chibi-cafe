import './input-radio.scss';

const InputRadio = ({ type, id, name, placeholder, value, handleChange, disabled, required, min }) => {

    return (
        <input 
            className='basic-input-radio'
            type={type} 
            id={id} 
            name={name} 
            placeholder={placeholder} 
            value={value || ''} 
            onChange={(event) => handleChange(event.target.value, name)}
            required={required}
            disabled={disabled}
            min={min}
        />
    );
};

export default InputRadio;