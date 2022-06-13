import React from "react";
import { FaPhone } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import { FiSmartphone } from "react-icons/fi";
import { BsInstagram, BsFacebook } from "react-icons/bs";

import "./Footer.component.css";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="footer-container">
          <div>
            Alameda Rio Branco, nº 238 <br />
            Ed. Bauhaus - Sala <br />
            71 89010-300 - Centro - Blumenau / SC
          </div>
          <div>
            <AiOutlineMail /> representantes@brewbeer.com.br <br />
            <FaPhone /> (11) 2652-9401 <br />
            <FiSmartphone /> (11) 99659-0881
            <br />
          </div>
          <div>
            <BsInstagram /> Instagram <br />
            <BsFacebook /> Facebook
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
