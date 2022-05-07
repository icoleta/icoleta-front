import React from "react";
import { Box, Flex, Heading, Text, Image } from "@chakra-ui/react";

import points from "../data/points.json";
import point from "../assets/point.png";

function ListPoints() {
  return (
    <Flex align='center' justify='center'>
      {
        points.map((item) => {
          return (
            <Box boxShadow='md' p='6' m='6' w='48rem' rounded='md' bg='white' key={item.id}>
              <Flex>
              <Image src={point} alt='Ponto de coleta' height='12rem' width='18rem'/>
              <Box marginLeft='4'>
                <Heading size='md'>{item.title}</Heading>
                <Text color='gray.500'>
                {
                  item.materials.map((material, id) => 
                    {
                      return (
                        <span key={id}>{(id !== 0) ? (<span style={{margin: '0 0.25rem'}}>&bull;</span>) : ''}{material}</span>
                      )
                    }
                  )
                }
                </Text>
                <Box marginTop='4'>
                  <Text>
                    {item.address.neighborhood}, {item.address.street}
                  </Text>
                  <Text>
                    Aberto<span style={{margin: '0 0.25rem'}}>&bull;</span>Fecha 16:00
                  </Text>
                </Box>
              </Box>
              </Flex>
            </Box>
          )
        })
      }
    </Flex>
  );
}

export default ListPoints;
