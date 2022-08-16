import React from "react";

import Header from "./Header";
import Footer from "./Footer";

function Body(props) {
  return (
    <>
      <Header />
      <div className="min-h-screen">{props.children}</div>
      <Footer />
    </>
  );
}

export default Body;
