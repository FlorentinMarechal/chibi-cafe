import { useState } from 'react';
import emailjs from 'emailjs-com';

import Input from '../../Input';
import InputRadio from '../../InputRadio';
import Button from '../../Button';
import custom3 from '../../../assets/custom/custom3.jpg';
import './custom.scss';


function Custom({ className, closeForm }) {
  const [lastname, setLastname] = useState("");
  const [firstname, setFirstname] = useState("");
  const [mail, setMail] = useState("");
  const [size, setSize] = useState("");
  const [quantity, setQuantity] = useState("");
  const [file, setFile] = useState("");
  const [message, setMessage] = useState("");
  const [sendMessage, setSendMessage] = useState("");
  
  const handleSubmit = (e) => {
    e.preventDefault();
    const templateParams = {
        lastname,
        firstname,
        mail,
        size,
        quantity,
        file,
        message,
    }
    emailjs.send(
      'my_gmail',
      'template_554bs9k',
      templateParams,
      'user_ArfWVVGSJEvGb8dc6tTwO'
      )
    .then((response) => {
    console.log('SUCCESS!', response.status, response.text);
    setSendMessage("Votre message a bien été envoyé");
    }, 
    (err) => {
    console.log('FAILED...', err);
    });
    
    setLastname("");
    setFirstname("");
    setMail("");
    setSize("");
    setQuantity("");
    setFirstname("");
    setMessage("");
  }

  return (
    <>
      <form className="custom" onSubmit={handleSubmit}>
        <h2 className="custom__title">Sablés personnalisables : Suivez les étapes !</h2>

        <div className="custom__top">
            <div className="custom__top__card">
              <div className="custom__top__card__front">
                <img
                className="custom__top__card__front__img"
                src={custom3}
                alt="Sablés Personnalisables"/>
              </div>
              <div className="custom__top__card__back">
                <h3 className="custom__top__card__back__subtitle">Envie d’épater votre famille, vos amis, vos collègues, vos salariés ?</h3>
                <p className="custom__top__card__back__description">Voici une idée de cadeau qui plaira à tous les gourmands.</p>
                <p className="custom__top__card__back__description">
                Une idée ? Un thème ? Une inspiration ?
                Vous décidez du logo, du dessin, des couleurs, de la forme… et nous créerons pour vous le sablé sur-mesure qui surprendra vos convives !</p>
              </div>
            </div>
          </div>

          <div className="custom__center">
            <div className="custom__center__one">
              <h3 className="custom__center__one__title">Etape 1 : Vos coordonnées</h3>
              <div className="custom__center__one__identity">
                <label className="custom__center__one__identity__label" htmlFor="firstname">Prénom</label>
                <Input className="custom__center__one__identity__input" value={firstname} handleChange={setFirstname} type="text" id="firstname" />

                <label className="custom__center__one__identity__label" htmlFor="lastname">Nom</label>
                <Input className="custom__center__one__identity__input" value={lastname} handleChange={setLastname} type="text" id="lastname" />

                <label className="custom__center__one__identity__label" htmlFor="mail">Email</label>
                <Input className="custom__center__one__identity__input" value={mail} handleChange={setMail} type="email" id="mail" />
              </div>
            </div>

            <div className="custom__center__two">
              <h3 className="custom__center__two__title">Etape 2 : Sélectionnez la taille de vos sablés :</h3>
              <div className="custom__center__two__radio">
                <InputRadio className="custom__center__two__radio__input" value={size} handleChange={setSize} type="radio" name="size" id="small" />
                <label className="custom__center__two__radio__label" htmlFor="small">Petit (5cm)</label>
              </div>

              <div className="custom__center__two__radio">
                <InputRadio className="custom__center__two__radio__input" value={size} handleChange={setSize} type="radio" name="size" id="medium" />
                <label className="custom__center__center__radio__label" htmlFor="medium">Moyen (10cm)</label>
              </div>

              <div className="custom__center__two__radio">
                <InputRadio className="custom__center__two__radio__input" value={size} handleChange={setSize} type="radio" name="size" id="large" />
                <label className="custom__center__two__radio__label" htmlFor="large">Grand (15cm)</label>
              </div>
            </div>

            <div className="custom__center__three">
              <h3 className="custom__center__three__title">Etape 3 : La quantité souhaitée</h3>
              <Input className="custom__center__three__input" value={quantity} handleChange={setQuantity} type="number" min="0" id="quantity" />
            </div>

            <div className="custom__center__four">
              <h3 className="custom__center__four__title">Etape 4 : Téléchargez votre image</h3>
              <Input className="custom__center__four__input" value={file} handleChange={setFile} type="file" id="lastname" />
            </div>
          </div>
          
          

          <div className="custom__bottom">

            <div className="custom__bottom__submit">
              <textarea  value={message} onChange={(e) => setMessage(e.target.value)} className="custom__bottom__submit__text" placeholder="Votre Message"></textarea>
            </div>

            <div className="custom__bottom__validate">
              <Button type="submit" className="custom__bottom__validate__button">Demander un devis</Button>
            </div>
          </div>
          
          <p className="custom__bottom__confirm">
            {sendMessage}
          </p>
      </form>
    </>
  );
}
  
export default Custom;