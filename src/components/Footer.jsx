import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="bg-almost-white px-32 py-8">
      <div className="flex child:ml-8">
        <Link to="#">Ajuda</Link>
        <Link to="#">Enviar sugestão</Link>
        <Link to="#">Privacidade</Link>
        <Link to="#">Termos</Link>
      </div>
    </div>
  );
}

export default Footer;
