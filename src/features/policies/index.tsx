import { Box, Flex, Heading, Text } from '@chakra-ui/react';
import Link from 'next/link';
import React, { ReactNode } from 'react';
import { policyItems } from '../../consts/consts';

interface Props {
  children: ReactNode;
  title: string;
  description: string;
  name: string;
}
export const PoliciesLayout = ({
  children,
  title,
  description,
  name,
}: Props) => {
  return (
    <>
      <Flex
        bg="brand.blue"
        minH="400px"
        bgImage="/assets/images/bg-overlay.svg"
        align="center"
        justify="center"
        px="1rem"
      >
        <Box color="white" textAlign="center">
          <Heading fontWeight="bold" py="1rem">
            {title}
          </Heading>
          <Text>{description}</Text>
        </Box>
      </Flex>

      <Flex
        direction={{ base: 'column', md: 'row' }}
        w={{ base: '100%', md: '85%' }}
        mx="auto"
        px="1rem"
        my="4rem"
      >
        <Flex
          direction={{ base: 'row', md: 'column' }}
          w={{ base: '100%', md: '200px' }}
          gap={{ base: '1rem', md: '0.5rem' }}
          borderBottomWidth={{ base: '1px', md: '0' }}
        >
          {policyItems.map((item) => (
            <Box
              key={item.link}
              fontSize={{ base: 'xs', md: 'sm', lg: 'md' }}
              color={name === item.name ? 'blue' : 'gray.500'}
              borderBottomWidth="1px"
              borderColor={name === item.name ? 'blue' : 'transparent'}
              pb="4px"
              w="fit-content"
            >
              <Link href={item.link}>{item.title}</Link>
            </Box>
          ))}
        </Flex>
        <Box
          py={{ base: '3rem', md: '0' }}
          w={{ base: '100%', md: 'calc(100% - 200px)' }}
        >
          {children}
        </Box>
      </Flex>
    </>
  );
};
