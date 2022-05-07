import React from "react";
import { Box, HStack } from "@chakra-ui/react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <Box bg='gray.100' p='2rem 8rem'>
      <HStack spacing='8'>
        <Link to='#'>Ajuda</Link>
        <Link to='#'>Enviar sugestão</Link>
        <Link to='#'>Privacidade</Link>
        <Link to='#'>Termos</Link>
      </HStack>
    </Box>
  );
}

export default Footer;
