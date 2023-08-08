import { Box, Flex, Heading, Text } from '@chakra-ui/react';
import Link from 'next/link';
import React from 'react';
import { Button, CustomMenuButton } from '../../../components';

export const OurFocus = () => {
  return (
    <Box bg='rgba(216, 216, 216, 0.15)'>
      <Flex
        align='center'
        h={{ base: '', lg: '650px' }}
        flexDir={{ base: 'column', lg: 'row' }}
        overflow='hidden'
      >
        <Box p={{ base: '2rem', lg: '4rem' }} w={{ base: '90%', lg: '50%' }}>
          <Text my='1rem'>FOCUS</Text>
          <Heading size={{ base: 'lg', md: 'xl', lg: '2xl', xxl: '3xl' }}>
            On creating and capturing timeless memories
          </Heading>
          <Text fontSize='1.2rem' w='90%' my='2rem'>
            See how professionals and consumers trust us for their drone
            solutions
          </Text>
          <Flex
            gap='0.5rem'
            w={{ lg: '80%' }}
            flexDir={{ base: 'column', md: 'row' }}
          >
            <Box w={{ base: '100%', lg: '50%' }}>
              <CustomMenuButton title='Talk to a Rep' />
            </Box>
            <Box w={{ base: '100%', lg: '50%' }}>
              <Link href='/products'>
                <Button
                  title='Explore Drones'
                  bg='brand.blue'
                  color='gray.100'
                  _hover={{
                    color: 'rgba(6, 69, 164, 1)',
                    backgroundColor: 'rgba(216, 216, 216, 1)',
                  }}
                />
              </Link>
            </Box>
          </Flex>
        </Box>
        <Flex
          w={{ base: '100%', lg: '50%' }}
          justify={{ base: 'center', lg: 'flex-end' }}
        >
          <Box
            className='focus-section-design'
            w={{ base: '330px', md: '400px', lg: '550px', xl: '700px' }}
            h={{ base: '330px', md: '400px', lg: '550px', xl: '700px' }}
            borderStyle='solid'
            borderColor='background: rgba(6, 69, 164, 0.05)'
            borderRadius='100%'
            mb={{ base: '1rem', lg: '0' }}
            bg='center / contain no-repeat url(https://res.cloudinary.com/djmx11b6s/image/upload/v1676050310/donehub-assets/Vector_xssrlw.png)'
          />
        </Flex>
      </Flex>
    </Box>
  );
};
