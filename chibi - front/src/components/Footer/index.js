/* eslint-disable jsx-a11y/alt-text */
import { NavLink } from 'react-router-dom';

import logoFacebook from "../../assets/logos/facebook.png";
import logoInstagram from "../../assets/logos/instagram.png";

import "./footer.scss";

const Footer = () => (
  <div className="footer">
    <div className="footer__image">
    <div className="footer__image__facebook">
      <NavLink
        to="/facebook"
      >
        <img
          src={logoFacebook}
          className="footer__image-facebook"
          alt="Logo Facebook"
        />
      </NavLink>
      </div>
      <div className="footer__image__instagram">
      <NavLink
        to="/instagram"
      >
        <img
          src={logoInstagram}
          className="footer__image-instagram"
          alt="Logo Instagram"
        />
      </NavLink>
      </div>
    </div>
    <NavLink
        to="/a-propos"
        className="footer__team"
      >
      A propos
      </NavLink>
    <a href="/mentions-legales" className="footer__mentions">Mentions Légales</a>
  </div>
);

export default Footer;
