import { Box, Text } from '@chakra-ui/react';
import React from 'react';

export const VisionAndMission = () => {
  return (
    <Box bg='brand.darkBlue' my='4rem' py='4rem'>
      <Box
        w={{ base: '70%', lg: '60%' }}
        mx='auto'
        color='gray.100'
        textAlign='center'
      >
        <Text fontSize='14px' fontWeight='light'>
          OUR VISION
        </Text>
        <Text fontSize='3xl' fontWeight={'700'}>
          To be the most preferred drone products and solutions company in
          Africa
        </Text>

        <Text fontSize='14px' fontWeight='light' mt='2rem'>
          OUR MISSION
        </Text>
        <Text fontWeight={'700'} fontSize='3xl'>
          Is to build a community for Humans and Drones
        </Text>
      </Box>
    </Box>
  );
};
