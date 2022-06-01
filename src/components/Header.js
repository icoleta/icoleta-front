import React from "react";
import { Flex, Heading, HStack, Image } from "@chakra-ui/react";
import svg from "../assets/recycle_icon.svg";
import { Link } from "react-router-dom";

function Header() {
  return (
    <Flex p="2rem 8rem" justify="space-between">
      <Link to="/">
        <HStack>
          <Image src={svg} w="12" h="12" alt="logo" />
          <Heading>IColeta</Heading>
        </HStack>
      </Link>
      <HStack spacing="8">
        <Link to="/mapa">Mapa</Link>
        <Link to="/lista-de-pontos">Pontos de coleta</Link>
        <Link to="/entidade">Cadastrar ponto</Link>
      </HStack>
    </Flex>
  );
}

export default Header;
