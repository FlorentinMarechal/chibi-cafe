import './signup.scss';
import PropTypes from 'prop-types'
import Form from '../Form';
import Input from '../../Input';
import Button from '../../Button';
import { useDispatch, useSelector } from 'react-redux';
import { signup } from '../../../actions/auth';
import { useState } from 'react';
import BooleanCheckbox from '../../BooleanCheckbox';

const SignUp = ({ closeSignupForm }) => {
    const dispatch = useDispatch();
    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const [mail, setMail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirm, setPasswordConfirm] = useState('');
    const [birthdayDate, setBirthdayDate] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [streetNumber, setStreetNumber] = useState('');
    const [nameOfTheRoad, setNameOfTheRoad] = useState('');
    const [postalCode, setpostalCode] = useState('');
    const [city, setCity] = useState('');
    const [gender, setGender] = useState(false);
    
    const { message } = useSelector(state => state.message);

    const verifyPasswordAndSubmit = () => {
        dispatch(signup(firstname, lastname, mail, password, passwordConfirm, birthdayDate, phoneNumber, streetNumber, nameOfTheRoad, postalCode, city, gender));
    }

    return (
        <Form handleSubmit={verifyPasswordAndSubmit}> 
            <p className="center" style={{color: "green"}}>{message}</p>
            <h2 className="signup-title center">Inscription</h2>
            <div className="gender">
                <BooleanCheckbox 
                    label={["Madame", "Monsieur"]}
                    id={["femaleGender", "maleGender"]}
                    handleChange={setGender}
                    state={gender}
                    checked={gender}
                />
            </div>
            <div className="names">
                <Input type="text" name="first_name" id="first_name" placeholder="Prénom"                 
                    value={firstname} 
                    handleChange={setFirstname}
                />
                <Input type="text" name="last_name" id="last_name" placeholder="Nom" 
                    value={lastname} 
                    handleChange={setLastname}
                />
            </div>
            <Input type="email" name="mail" id="mail" placeholder="Email"
                value={mail} 
                handleChange={setMail}
            />
            <Input type="password" name="password" id="password" placeholder="Mot de passe"
                value={password} 
                handleChange={setPassword}
            />
            <Input type="password" name="passwordConfirm" id="passwordConfirm" placeholder="Confirmer mot de passe" 
                value={passwordConfirm} 
                handleChange={setPasswordConfirm}
            />
            <div className="names">
                <Input type="date" id="birthday_date" name="birthday_date" 
                    value={birthdayDate} 
                    handleChange={setBirthdayDate}
                />
                <Input type="tel" id="phone_number" name="phone_number" placeholder="Numéro de mobile" 
                    value={phoneNumber} 
                    handleChange={setPhoneNumber}
                />
            </div>
            <div className="address">
                <Input type="number" id="street_number" name="street_number" placeholder="N° de rue"
                    value={streetNumber} 
                    handleChange={setStreetNumber}
                />
                <Input type="text" id="name_of_the_road" name="name_of_the_road" placeholder="Nom de rue"
                    value={nameOfTheRoad} 
                    handleChange={setNameOfTheRoad}
                />
            </div>
            <div className="city">
                <Input type="text" id="postal_code" name="postal_code" pattern="[0-9]{5}" placeholder="Code postal"
                    value={postalCode} 
                    handleChange={setpostalCode}
                />
                <Input type="text" id="city" name="city" placeholder="Ville" 
                    value={city} 
                    handleChange={setCity}
                />
            </div>
            <div  onClick={closeSignupForm}>
            <Button >S'inscrire</Button>
            </div>

        </Form>
    );
};

SignUp.propTypes = {
    closeSignupForm: PropTypes.func.isRequired,
}

export default SignUp;