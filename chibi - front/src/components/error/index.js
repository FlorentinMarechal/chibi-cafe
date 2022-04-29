import './error.scss';
import CoffeeMachineLoader from '../CoffeeMachineLoader';

function Error() {
    return (
      <div className="error">
          <h2>Erreur 404</h2>
          <p>Page introuvable</p>
          <CoffeeMachineLoader />
          <p>Retour à <a className="error__button" href="/">l'accueil</a></p>
      </div>
    );
  }
  
  export default Error;