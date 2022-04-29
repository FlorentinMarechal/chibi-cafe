import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';

import AsideNavbar from '../AsideNavbar';
import Form from '../Form';
import Input from '../../Input';
import InputRadio from '../../InputRadio';
import Button from '../../Button';

import './informations.scss';
import { setUserField, updateUser, updatePassword } from '../../../actions/auth';

const Informations = () => {
    const dispatch = useDispatch();

    const { user: {
        first_name,
        last_name,
        mail,
        gender,
        birthday_date,
        phone_number,
        principal_street_number,
        principal_name_of_the_road,
        principal_postal_code,
        principal_city
    } } = useSelector((state) => state.auth);

    const [message, setMessage] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirm, setPasswordConfirm] = useState("");
    const [actualPassword, setActualPassword] = useState("");

    const handleSubmitForm = () => {
        dispatch(updateUser());
        if (password || passwordConfirm || actualPassword) {
            dispatch(updatePassword(password, passwordConfirm, actualPassword));
        }
    }

    const handleChange = (value, name) => {
        dispatch(setUserField(value, name));
    }

    return (
        <AsideNavbar>
            <div className="informations" style={{width: '80%', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                <Form handleSubmit={handleSubmitForm}> 
                    <h2>Mes informations personnelles</h2>
                    <div className="gender">
                        <div>
                            <InputRadio type="radio" name="gender" id="genderFemale"
                                value="false"
                                handleChange={handleChange}
                                checked={gender === false}
                            />
                            <label htmlFor="genderFemale">Madame</label>
                        </div>
                        <div>
                            <InputRadio type="radio" name="gender" id="genderMale"  
                                value="true"
                                handleChange={handleChange}
                                checked={gender === true}
                            />
                            <label htmlFor="genderMale">Monsieur</label>
                        </div>
                    </div>
                    <div className="names">
                        <Input type="text" name="first_name" id="first_name" placeholder="Prénom"                 
                            value={first_name}
                            handleChange={handleChange}
                        />
                        <Input type="text" name="last_name" id="last_name" placeholder="Nom" 
                            value={last_name} 
                            handleChange={handleChange}
                        />
                    </div>
                    <Input type="email" name="mail" id="mail" placeholder="Email"
                        value={mail} 
                        handleChange={handleChange}
                    />
                    <Input type="password" name="actualPassword" id="actualPassword" placeholder="Mot de passe actuel"
                        value={actualPassword} 
                        handleChange={setActualPassword}
                    />
                    <Input type="password" name="password" id="password" placeholder="Nouveau mot de passe"
                        value={password} 
                        handleChange={setPassword}
                    />
                    <Input type="password" name="passwordConfirm" id="passwordConfirm" placeholder="Confirmer le mot de passe" 
                        value={passwordConfirm} 
                        handleChange={setPasswordConfirm}
                    />
                    <div className="names">
                        <Input type="date" id="birthday_date" name="birthday_date" 
                            value={birthday_date} 
                            handleChange={handleChange}
                        />
                        <Input type="tel" id="phone_number" name="phone_number" placeholder="Numéro de mobile" 
                            value={phone_number} 
                            handleChange={handleChange}
                        />
                    </div>
                    <div className="address">
                        <Input type="text" id="principal_street_number" name="principal_street_number" placeholder="N° de rue"
                            value={principal_street_number} 
                            handleChange={handleChange}
                        />
                        <Input type="text" id="principal_name_of_the_road" name="principal_name_of_the_road" placeholder="Nom de rue"
                            value={principal_name_of_the_road} 
                            handleChange={handleChange}
                        />
                    </div>
                    <div className="city">
                        <Input type="text" id="principal_postal_code" name="principal_postal_code" pattern="[0-9]{5}" placeholder="Code postal"
                            value={principal_postal_code} 
                            handleChange={handleChange}
                        />
                        <Input type="text" id="principal_city" name="principal_city" placeholder="Ville" 
                            value={principal_city} 
                            handleChange={handleChange}
                        />
                    </div>

                    <Button>Modifier</Button>
                    <p style={{color: "green"}}>{message}</p>
                </Form>
            </div>
        </AsideNavbar>
    );
}


export default Informations;