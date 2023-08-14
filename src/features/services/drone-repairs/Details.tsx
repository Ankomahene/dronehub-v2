import { Box, Image, Text } from '@chakra-ui/react';
import React from 'react';

export const Details = () => {
  return (
    <>
      <Text
        w={{ base: '90%', lg: '80%' }}
        mx='auto'
        my={{ base: '3rem', lg: '6rem' }}
        color={'rgba(1, 17, 39, 1)'}
      >
        One of the safety goals of flying a drone is to minimize the risk of
        fault or accident. But we understand that no matter how careful you may
        be, it’s possible for your drone to develop issues. Whether for business
        or personal use, we know how frustrating it can be when your drone
        becomes faulty.
      </Text>
      <Text
        fontWeight={'700'}
        color='rgba(6, 69, 164, 1)'
        className='my-4 d-block '
        w={{ base: '90%', lg: '80%' }}
        mx='auto'
      >
        That’s why we’re here to help.
      </Text>
      <Text
        color={'rgba(1, 17, 39, 1)'}
        w={{ base: '90%', lg: '80%' }}
        mx='auto'
      >
        Our drone technicians have been trained to provide only the best of
        repair services, use high-quality spare parts and come up with
        innovative solutions. So you can be assured that your drones are in the
        best hands.
      </Text>
      <Box
        w={{ base: '90%', lg: '80%' }}
        mx='auto'
        my={{ base: '3rem', lg: '6rem' }}
      >
        <Image
          src='https://res.cloudinary.com/djp5oy3ri/image/upload/v1691828179/dronehub/drone-repair/u3wvbddjudicvbdilnap.png'
          alt=''
        />
      </Box>
    </>
  );
};
