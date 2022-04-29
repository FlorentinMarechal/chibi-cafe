import SignUp from './SignUp';
import Login from './Login';
import { useState } from 'react';
import Button from '../Button';
import './account.scss';

function Account() {
  const [openSignForm, setOpenSignForm] = useState(false)
  const [inscription, setInscription] = useState(false)
  const signUpclassName = openSignForm ? "auth-container-signup--open" : "auth-container-signup"
  const loginClassName = openSignForm ? "auth-container-login--close" : "auth-container-login"
  const modConnectClasse = inscription ? "isClient--close" : "isClient";

  const openSignupForm = () => {
    setOpenSignForm(true)
  }

  const closeSignupForm = () => {
    setTimeout(function(){ setOpenSignForm(false); }, 2000);
    setInscription(true)
  }

  return (
      <div className="auth">
        <div className={signUpclassName}>
          <SignUp closeSignupForm={closeSignupForm}/>
        </div>
        <div className={loginClassName}>
          <Login to="/" />
          <div className={modConnectClasse}>
            <h2 className="center">Nouveau Client ?</h2>
            <Button handleClick={openSignupForm}>Créer un Compte</Button>
        </div> 
        </div>
      </div>
  );
}
  
export default Account;