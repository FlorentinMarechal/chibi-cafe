import AsideNavbar from '../AsideNavbar';
import { GET_ORDERS } from '../../../actions/auth';
import './orders.scss';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import TrackOrder from '../../TrackOrder';

const Orders = () => {
    const dispatch = useDispatch();
    const { orders } = useSelector((state) => state.auth);

    useEffect(() => dispatch({type: GET_ORDERS}), []);
    console.log(orders);
    return (
        <AsideNavbar>
            <div className="orders">
                <h2 className="orders__title">Mes commandes</h2>
                <div className="orders__list">
                    {orders && orders.map(order => (
                        <TrackOrder order={order} />
                    ))}
                </div>
            </div>
        </AsideNavbar>
    );
};

export default Orders;