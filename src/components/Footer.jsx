import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="bg-almost-white px-32 py-8">
      <div className="flex flex-col tablet:child:ml-8 justify-center tablet:flex-row">
        <Link to="#" className="text-center" >Ajuda</Link>
        <Link to="#" className="text-center">Enviar sugestão</Link>
        <Link to="#" className="text-center">Privacidade</Link>
        <Link to="#" className="text-center">Termos</Link>
      </div>
    </div>
  );
}

export default Footer;
