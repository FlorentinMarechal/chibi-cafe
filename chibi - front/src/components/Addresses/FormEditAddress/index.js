import Input from '../../Input';
import Button from '../../Button';
import { useState } from 'react';
import './form-edit-address.scss';

const FormEditAddress = ({ userAddressStore, handleClickEdit, handleClickDelete }) => {
    const [userAddress, setUserAddress] = useState({
        first_name: userAddressStore.first_name, 
        last_name: userAddressStore.last_name, 
        phone_number: userAddressStore.phone_number,
        street_number: userAddressStore.street_number,
        name_of_the_road: userAddressStore.name_of_the_road,
        postal_code: userAddressStore.postal_code,
        city: userAddressStore.city,
        id: userAddressStore.id
    });

    const handleChangeAddress = (value, name) => {
        setUserAddress({
            ...userAddress,
            [ name ] : value
        });
    }

    return (
        <div className="form-edit-address"> 
            <Input type="text" name="first_name" id="first_name" placeholder="Prénom"                 
                value={userAddress.first_name} 
                handleChange={handleChangeAddress}
                required={false}
            />
            <Input type="text" name="last_name" id="last_name" placeholder="Nom" 
                value={userAddress.last_name} 
                handleChange={handleChangeAddress}
                required={false}
            />
            <Input type="tel" id="phone_number" name="phone_number" placeholder="Numéro de mobile" 
                value={userAddress.phone_number} 
                handleChange={handleChangeAddress}
                required={false}
            />
            <div className="address">
                <Input type="number" id="street_number" name="street_number" placeholder="N° de rue"
                    value={userAddress.street_number} 
                    handleChange={handleChangeAddress}
                    required={false}
                />
                <Input type="text" id="name_of_the_road" name="name_of_the_road" placeholder="Nom de rue"
                    value={userAddress.name_of_the_road} 
                    handleChange={handleChangeAddress}
                    required={false}
                />
            </div>
            <div className="city">
                <Input type="text" id="postal_code" name="postal_code" pattern="[0-9]{5}" placeholder="Code postal"
                    value={userAddress.postal_code} 
                    handleChange={handleChangeAddress}
                    required={false}
                />
                <Input type="text" id="city" name="city" placeholder="Ville" 
                    value={userAddress.city} 
                    handleChange={handleChangeAddress}
                    required={false}
                />
            </div>
            <div className="names">
                <Button handleClick={() => handleClickEdit(userAddress)}>Modifier</Button>
                <Button handleClick={() => handleClickDelete(userAddress)}>Supprimer</Button>
            </div>
        </div>
    );
};

export default FormEditAddress;