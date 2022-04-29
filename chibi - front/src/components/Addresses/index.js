/* eslint-disable react-hooks/exhaustive-deps */
import { useDispatch, useSelector } from 'react-redux';
import NewAddress from '../Delivery/NewAddress';
import './addresses.scss';
import useModal from "../../hooks/useModal";
import { useEffect, useState } from 'react';
import { addNewAddress, editAddress, deleteAddress } from '../../actions/auth';
import Button from '../Button';
import FormEditAddress from './FormEditAddress';
import AsideNavbar from '../Account/AsideNavbar';
import { GET_USER_ADDRESSES } from '../../actions/auth';

function Addresses() {
    const dispatch = useDispatch();
    const { userAddresses } = useSelector((state) => state.auth);
    const { isShowing, toggle } = useModal();
    const [newAddress, setNewAddress] = useState({
        first_name: '', 
        last_name: '', 
        phone_number: '', 
        street_number: '', 
        name_of_the_road: '', 
        postal_code: '', 
        city: '', 
    })

    const handleChangeNewAddress = (value, name) => {
        setNewAddress({
            ...newAddress,
            [ name ] : value
        });
    }

    const handleClickAdd = () => {
        dispatch(addNewAddress(newAddress))
    };

    const handleClickEdit = (address) => {
        dispatch(editAddress(address))
    };

    const handleClickDelete = (address) => {
        dispatch(deleteAddress(address))
    };

    useEffect(() => {
        dispatch({type: GET_USER_ADDRESSES});
    }, []);

    return (
        <AsideNavbar>
            <div className="addresses">
                <Button type="button" handleClick={toggle}>
                    Ajouter une adresse
                </Button>
                {isShowing && 
                    <div className="modal-overlay">
                    <div className="modal-wrapper">
                        <div className="modal">
                        <div className="modal-header">
                            <h4>Nouvelle Adresse</h4>
                            <button
                            type="button"
                            className="modal-close-button"
                            onClick={toggle}
                            >
                            <span style={{fontSize: "3rem"}}>&times;</span>
                            </button>
                        </div>
                        <div className="modal-flex">
                        <NewAddress newAddress={newAddress} handleChange={handleChangeNewAddress}
                            button={<Button handleClick={handleClickAdd}>Ajouter</Button>}
                        />
                        </div>
                        </div>
                    </div>
                    </div>
                }
                {userAddresses && userAddresses.map(address => (
                    <FormEditAddress key={address.id} 
                        handleClickEdit={handleClickEdit}
                        handleClickDelete={handleClickDelete}
                        userAddressStore={address}
                    />
                ))}
            </div>
        </AsideNavbar>
    );
}
  
export default Addresses;