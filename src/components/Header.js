import React from "react";
import { Flex, Heading, HStack, Image } from "@chakra-ui/react";
import svg from "../assets/recycle_icon.svg";
import { Link } from "react-router-dom";

function Header() {
  return (
    <Flex p='2rem 8rem' justify='space-between'>
      <Link to='/'>
        <HStack>
          <Image src={svg} w='12' h='12' alt='logo' />
          <Heading>IColeta</Heading>
        </HStack>
      </Link>
      <HStack spacing='8'>
        <Link to='/map'>Mapa</Link>
        <Link to='/list-points'>Pontos de coleta</Link>
      </HStack>
    </Flex>
  );
}

export default Header;
