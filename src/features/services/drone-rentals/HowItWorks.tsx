import { Box, Flex, Heading, Text } from '@chakra-ui/react';
import React from 'react';

export const HowItWorks = () => {
  return (
    <Box w={{ base: '90%', lg: '80%' }} mx='auto' my='4rem'>
      <Heading textAlign='center'>How It Works</Heading>

      <Flex
        py='2rem'
        justify='center'
        fontWeight='bold'
        my='2rem'
        gap={3}
        flexDir={{ base: 'column', lg: 'row' }}
        textAlign='center'
        px='1rem'
        borderColor='rgba(6, 69, 164, 1)'
        borderTopWidth={{ base: '0', lg: '1px' }}
        borderBottomWidth={{ base: '0', lg: '1px' }}
      >
        <Box
          bg={'rgba(255, 95, 31, 1)'}
          borderRadius={'8px'}
          display={'flex'}
          justifyContent={'center'}
          alignItems={'center'}
          w={{
            base: '250px',
            large: '272px',
          }}
          h={{
            base: '158px',
            large: '188px',
          }}
          p={'8px'}
        >
          <Text px='2rem' py='1rem' color={'#fff'} fontSize={'30px'}>
            1. Rent
          </Text>
        </Box>
        <Box
          bg={'rgba(255, 170, 0, 1)'}
          borderRadius={'8px'}
          display={'flex'}
          justifyContent={'center'}
          alignItems={'center'}
          w={{
            base: '250px',
            large: '272px',
          }}
          h={{
            base: '158px',
            large: '188px',
          }}
          p={'8px'}
        >
          <Text px='2rem' py='1rem' color={'#fff'} fontSize={'30px'}>
            2. Pick up
          </Text>
        </Box>
        <Box
          bg={'rgba(117, 229, 0, 1)'}
          borderRadius={'8px'}
          display={'flex'}
          justifyContent={'center'}
          alignItems={'center'}
          w={{
            base: '250px',
            large: '272px',
          }}
          h={{
            base: '158px',
            large: '188px',
          }}
          p={'8px'}
        >
          <Text px='2rem' py='1rem' color={'#fff'} fontSize={'30px'}>
            3. Fly Drone
          </Text>
        </Box>
        <Box
          bg={'rgba(6, 69, 164, 1)'}
          borderRadius={'8px'}
          display={'flex'}
          justifyContent={'center'}
          alignItems={'center'}
          w={{
            base: '250px',
            large: '272px',
          }}
          h={{
            base: '158px',
            large: '188px',
          }}
          p={'8px'}
        >
          <Text px='2rem' py='1rem' color={'#fff'} fontSize={'30px'}>
            4. Return
          </Text>
        </Box>
      </Flex>
    </Box>
  );
};
