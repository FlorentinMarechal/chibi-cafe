import './form-input-disabled.scss';
import Input from '../../../Input';
import Button from '../../../Button';

const FormInputDisabled = ({ data, button, handleClick }) => {

    return (
        <div className="form-input-disabled">
            <Input type="text" name="first_name" id="first_name" placeholder="Prénom"                 
                value={data.first_name}
                disabled={true}
            />
            <Input type="text" name="last_name" id="last_name" placeholder="Nom" 
                value={data.last_name}
                disabled={true}
            />
            <Input type="tel" id="phone_number" name="phone_number" placeholder="Numéro de mobile" 
                value={data.phone_number}
                disabled={true}
            />
            <div className="address">
                <Input type="text" id="street_number" name="street_number" placeholder="N° de rue"
                    value={data.principal_street_number || data.street_number}
                    disabled={true}
                />
                <Input type="text" id="name_of_the_road" name="name_of_the_road" placeholder="Nom de rue"
                    value={data.principal_name_of_the_road || data.name_of_the_road}
                    disabled={true}
                />
            </div>
            <div className="city">
                <Input type="text" id="postal_code" name="postal_code" pattern="[0-9]{5}" placeholder="Code postal"
                    value={data.principal_postal_code || data.postal_code}
                    disabled={true}
                />
                <Input type="text" id="city" name="city" placeholder="Ville" 
                    value={data.principal_city || data.city}
                    disabled={true}
                />
            </div>
            {button && <Button type="button" handleClick={() => handleClick(data)}>Livrer à cette adresse</Button>}
        </div>
    );
};

export default FormInputDisabled;