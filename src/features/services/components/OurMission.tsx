import { Box, Text } from '@chakra-ui/react';
import React from 'react';

export const OurMission = () => {
  return (
    <Box w={{ base: '90%', lg: '80%' }} mx='auto' my='4rem'>
      <Text my='1rem' fontSize='xs' fontWeight='bold'>
        OUR MISSION
      </Text>
      <Text fontWeight='bold' fontSize={{ base: 'xl', lg: '3xl' }} my='0.5rem'>
        To build a community for people and drones
      </Text>
      <Text>
        At DroneHub, we believe it’s you first. This is why we’ve designed drone
        solutions to meet your objectives. Whether you want to get a drone for
        personal use or to ease the operations of your business, we have a
        solution for you.
      </Text>
      <Text my='2rem'>Let’s help you get started.</Text>
    </Box>
  );
};
