import { Box, Flex, Heading, Image, Text } from '@chakra-ui/react';
import { CustomMenuButton } from '../../../components';
import { IDeal } from '../../../models/app';

import { headerBoxStyles, headingStyles, slideStyles } from './_styles';

export const Slide = ({ product }: { product: IDeal }) => {
  return (
    <Flex {...slideStyles}>
      <Box {...headerBoxStyles}>
        <Heading {...headingStyles}>{product.description}</Heading>
        <Text my='1rem' fontSize={{ base: 'md', lg: '2xl' }}>
          {product.name}
        </Text>
        <Flex
          gap='3rem'
          justify={{ base: 'center', lg: 'flex-start' }}
          align='center'
        >
          <Text fontSize='xl'>US$ {product.salePrice}</Text>
          <Text textDecoration='line-through' fontSize='sm'>
            US$ {product.cutOutPrice}
          </Text>
        </Flex>

        <Box maxW='250px' mt='2rem' mb='6rem' mx={{ base: 'auto', lg: '0' }}>
          <CustomMenuButton
            title='Buy now'
            color='brand.blue'
            bgColor='white'
          />
        </Box>
      </Box>
      <Box
        w='100%'
        bgColor='green'
        h={{ base: 'xs', md: 'sm', lg: 'md' }}
        p='1rem'
        bg={`center / contain no-repeat url(${product.imageUrl})`}
      />
    </Flex>
  );
};
