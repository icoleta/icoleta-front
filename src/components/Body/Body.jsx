import React from "react";
import { useAuth } from "../../contexts/auth";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Qrcode from "../Qrcode/Qrcode";

function Body(props) {
  const { signed } = useAuth();
  return (
    <>
      <Header />
      {signed && (
        <div className="relative">
          <Qrcode />
        </div>
      )}
      <div className="min-h-screen">{props.children}</div>
      <Footer />
    </>
  );
}

export default Body;
