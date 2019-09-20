import React from "react";
import "./Footer.scss";
import { ReactComponent as LogoF } from "../../utils/facebook-logo-button.svg";
import { ReactComponent as LogoI } from "../../utils/instagram-logo.svg";
import { ReactComponent as LogoL } from "../../utils/linkedin.svg";
import { ReactComponent as LogoT } from "../../utils/twitter-logo-button.svg";

const Footer = () => {
  return (
    <div className="Footer">
      <div className="Footer-left">
        <ul>
          <li><h2>About us</h2></li>
          <li> Sponsorship and Donations</li>
          <li>Media</li>
          <li>Careers</li>
          <li>Careers</li>
          <li> Privacy and Cookies</li>
        </ul>
      </div>
      <div className="Footer-med">
          <h2 className="Footer-med__title">Connect with us</h2>
          <p>SOCIAL MEDIA CHANNELS</p>
          <div className="Footer-med__logos">
              <LogoF fill="white" height="25px" width="25px"/>
              <LogoI fill="white" height="25px" width="25px"/>
              <LogoL fill="white" height="25px" width="25px"/>
              <LogoT fill="white" height="25px" width="25px"/>
          </div>
      </div>
      <div className="Footer-right">
      <h2 className="Footer-right__title">Newsletter sign up</h2>
      <p>SIGN UP FOR SPECIAL OFFERS</p>
      <form className="Footer-right__form">
      <button disabled type="submit" name="input-form" >></button>
          <input type="email" name="email" placeholder="Enter your email"></input>
      </form>
      <div className="Footer-right__privacy">
      By submitting this form, I agree to having my personal and contact information processed and used for the purpose of marketing communications. More details about our Privacy policy can be found at the following link: Privacy Policy.
You can unsubscribe from these at any time – just click on the "Unsubscribe" link included in each newsletter.
      </div>
      </div>
    </div>
  );
};

export default Footer;
