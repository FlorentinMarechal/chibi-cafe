import localisation from "../../../assets/localisation.png";
import Map from '../../Map';
import './adresse.scss';

const Adresse = () => (
    <>
    <div className='adresse'>
        <div className="adresse__infos">
        <h3 className="adresse__title">Adresse</h3>
        <p className="adresse__p">1 rue de Chibi - 75001 Paris</p>
        </div>
        <div className="adresse__infos">
        <h3 className="adresse__hours adresse__title">Horaires</h3>
        <p className="adresse__p">Lundi au samedi - De 11h30 à 19h00</p>
        </div>
        <div className="adresse__infos">
        <h3 className="adresse__phone-number adresse__title">Téléphone</h3>
        <p className="adresse__p">0123456789</p>
        </div>
        <div className="adresse__infos">
        <h3 className="adresse__email adresse__title">Email</h3>
        <p className="adresse__p">chibi.cafe.13@gmail.com</p>
        </div>
    </div>
    <div className="adresse__img">
        <Map />
    </div>
    </>
);

export default Adresse;