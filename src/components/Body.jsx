import React from "react";

import Header from "./Header";
import Footer from "./Footer";

import { Box } from "@chakra-ui/react";

function Body(props) {
  return (
    <>
      <Header />
      <Box minHeight='100vh'>
        {props.children}
      </Box>
      <Footer />
    </>
  );
}

export default Body;
