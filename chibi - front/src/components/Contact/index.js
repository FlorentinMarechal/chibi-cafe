import Adresse from './Adresse';
import Form from './Form';
import { useState } from 'react';
import Button from '../Button';

import "./contact.scss";

function Contact() {

  const [openForm, setOpenForm] = useState(false)
  const overlayClass = openForm ? 'overlay-open' : 'overlay'

  const className = openForm ? 'form-open' : 'form';

  const closeForm = () => {
    setOpenForm(false)
  }

  
  
  

  console.log(overlayClass)

  const openFormContact = () => {
    if(openForm === true){
      setOpenForm(false)
    } else {
      setOpenForm(true)
    }
  }


    return (
      <div className="contact" >
        <div className="contact__container">
          <div className="contact__container-left">
            <Adresse />
          </div>
        
          <div className="contact__container-right">
            <Form className={className} closeForm={closeForm}/>
          </div>
          <div className="mobile-contact">
            <p>Pour nous contacter :</p>
            <Button
            handleClick={openFormContact}
            type="button">
              cliquez ici
            </Button>
          </div>
        </div>
        <div onClick={closeForm} className={overlayClass}></div>
      </div>
    );
  }
  
export default Contact;