import React from "react";

import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Qrcode from "../Qrcode/Qrcode";

function Body(props) {
  return (
    <>
      <Header />
      <div className="relative">
          <Qrcode />
      </div>
      <div className="min-h-screen">{props.children}</div>
      <Footer />
    </>
  );
}

export default Body;
