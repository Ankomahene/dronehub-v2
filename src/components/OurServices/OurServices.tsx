import { Box, Button, Flex, SimpleGrid, Text } from '@chakra-ui/react';
import React, { ReactNode } from 'react';
import { useMedia } from 'react-use';
import { ServiceCard } from './ServiceCard';
import { v4 as uid } from 'uuid';
import { OurServicesData } from '../../data';
import Link from 'next/link';
import { CSSProperties } from 'react';

export const OurServices = () => {
  const xxl = useMedia('(min-width: 1492px)', false);
  const xl = useMedia('(min-width: 1190px)', false);
  const lg = useMedia('(min-width: 1024px)', false);
  const md = useMedia('(min-width: 600px)', false);

  const getSize = () => {
    if (xxl) return { w: '800px', h: '650px' };
    if (xl) return { w: '600px', h: '450px' };
    if (lg) return { w: '500px', h: '400px' };
    if (md) return { w: '400px', h: '250px' };
    return { w: '100%', h: 'auto' };
  };

  const servicesStyles: CSSProperties = {
    maxWidth: getSize().w,
    minWidth: '200px',
    height: getSize().h,
  };
  return (
    <Box
      bg='brand.blueGradientThree'
      p={{ base: '2rem', lg: '3rem 0 2rem 2rem' }}
      my='2rem'
    >
      <Flex justify='space-between' align='center'>
        <Box mx='1rem' textAlign={'left'} color='gray.100'>
          <Text fontSize='2rem' fontWeight='bold'>
            Our Services
          </Text>
          <Text mb='1rem'>Customised solutions. Reliable support.</Text>
        </Box>
        <Box mx='1rem'>
          <Link href='/services'>
            <Button
              px='2rem'
              variant='outline'
              color='gray.100'
              bgColor='transparent'
              _hover={{ bgColor: 'gray.100', color: 'brand.blue' }}
            >
              View all services
            </Button>
          </Link>
        </Box>
      </Flex>

      <SimpleGrid columns={[1, 2]} spacingY='20px'>
        {OurServicesData.map((data) => (
          <ServiceCard
            style={servicesStyles}
            key={uid()}
            title={data.title}
            description={data.description}
            imageUrl={data.imageUrl}
            btn1Link={data.link}
          />
        ))}
      </SimpleGrid>
    </Box>
  );
};
