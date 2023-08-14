import { Link, List, ListItem, Text } from '@chakra-ui/react';
import NextLink from 'next/link';

const Products = () => {
  return (
    <>
      <Text fontWeight={500} mt={{ base: 10 }} mb={3}>
        Products
      </Text>

      <List color='gray.500'>
        <ListItem
          borderBottomWidth={{ base: 1, lg: 0, md: 0 }}
          borderColor='gray.500'
          py={{ base: 2, lg: 2 }}
        >
          <NextLink href='/product' passHref>
            <Text _hover={{ textDecor: 'none' }}>Mavic Series</Text>
          </NextLink>
        </ListItem>

        <ListItem
          borderBottomWidth={{ base: 1, lg: 0, md: 0 }}
          borderColor='gray.500'
          py={{ base: 2, lg: 2 }}
        >
          <NextLink href='/product' passHref>
            <Text _hover={{ textDecor: 'none' }}>Phantom Series</Text>
          </NextLink>
        </ListItem>

        <ListItem
          borderBottomWidth={{ base: 1, lg: 0, md: 0 }}
          borderColor='gray.500'
          py={{ base: 2, lg: 2 }}
        >
          <NextLink href='/product' passHref>
            <Text _hover={{ textDecor: 'none' }}>Inspire Series</Text>
          </NextLink>
        </ListItem>

        <ListItem
          borderBottomWidth={{ base: 1, lg: 0, md: 0 }}
          borderColor='gray.500'
          py={{ base: 2, lg: 2 }}
        >
          <NextLink href='/product' passHref>
            <Text _hover={{ textDecor: 'none' }}>Matrice Serieis</Text>
          </NextLink>
        </ListItem>

        <ListItem
          borderBottomWidth={{ base: 1, lg: 0, md: 0 }}
          borderColor='gray.500'
          py={{ base: 2, lg: 2 }}
        >
          <NextLink href='/product' passHref>
            <Text _hover={{ textDecor: 'none' }}>Agras Series </Text>
          </NextLink>
        </ListItem>
      </List>
    </>
  );
};

export default Products;
