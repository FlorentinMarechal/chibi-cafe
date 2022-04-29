import './track-order.scss';
import dayjs from 'dayjs';
import 'dayjs/locale/fr';

export default function TrackOrder({ user, order}) {
    return (
        <div className="form__auth">
            {user && <h2 className="modal-title mx-auto">Merci {user.first_name} {user.last_name},</h2>}
            <h3>Commande n°{order.id} du {dayjs(order.order_date.slice(0,10)).locale('fr').format("DD MMMM YYYY")} - {order.total} € </h3>
            
            <ul id="progressbar">
                <li className="step0 active " id="step1">Passée</li>
                <li className="step0 text-center" id="step2">Expédiée</li>
                <li className="step0 text-muted text-right" id="step3">Livrée</li>
            </ul>
                <div> Livré par </div>
                <div> UPS </div>
                <div> à l'adresse </div>
                <div> {order.delivery_street_number} {order.delivery_name_of_the_road} {order.delivery_postal_code} {order.delivery_city} 
                </div>
        </div>
    )
}
