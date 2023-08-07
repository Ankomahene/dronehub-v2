import React, { useState } from 'react';
import {
  Container,
  Box,
  Divider,
  Text,
  Flex,
  Spacer,
  Image,
} from '@chakra-ui/react';
import { ArrowForwardIcon } from '@chakra-ui/icons';
import Link from 'next/link';
import styles from '../Header.module.scss';
import { professional, enterprise } from '../../../data';

const Products = () => {
  return (
    <Box w='full' marginBottom={8}>
      <Flex gap={24}>
        <Box>
          <Image
            width={226}
            src={
              'https://res.cloudinary.com/djp5oy3ri/image/upload/v1691282420/dronehub/lbvxdrqwpouypf80boau.png'
            }
            alt='consumer'
          />

          <Text paddingY={1} fontSize={18} textAlign='center' fontWeight='bold'>
            Professional
          </Text>
          <Box>
            <Text
              paddingY={1}
              textAlign='center'
              color='#979797'
              fontSize='14px'
            >
              Master at your craft
            </Text>
            <Box>
              {professional.map((item) => (
                <Box key={item.id} paddingY={1}>
                  <Link href={`${item.link}`}>
                    <Box
                      _hover={{
                        color: 'rgba(6, 69, 164, 1)',
                      }}
                      paddingTop={'8px'}
                      paddingRight={'17px'}
                      paddingBottom={'8px'}
                      paddingLeft={'17px'}
                      className={`${styles.linkStyle}`}
                      transition='all .3s'
                    >
                      <Text fontSize={18}>{item.name}</Text>
                    </Box>
                  </Link>
                </Box>
              ))}
            </Box>
          </Box>
        </Box>

        <Box>
          <Image
            width={226}
            src={
              'https://res.cloudinary.com/djp5oy3ri/image/upload/v1691282420/dronehub/seklv8eqqtemjec5dcua.png'
            }
            alt='consumer'
          />

          <Text paddingY={1} fontSize={17} textAlign='center' fontWeight='bold'>
            Enterprise
          </Text>
          <Box>
            <Text paddingY={1} textAlign='center' color='#979797' fontSize={13}>
              Drone solutions for work
            </Text>
            <Box>
              {enterprise.map((item) => (
                <Box key={item.id} paddingY={1}>
                  <Link href={`${item.link}`}>
                    <Box
                      _hover={{
                        color: 'rgba(6, 69, 164, 1)',
                      }}
                      paddingTop={'8px'}
                      paddingRight={'17px'}
                      paddingBottom={'8px'}
                      paddingLeft={'17px'}
                      className={`${styles.linkStyle}`}
                      transition='all .3s'
                    >
                      <Text fontSize={17}>{item.name}</Text>
                    </Box>
                  </Link>
                </Box>
              ))}
            </Box>
          </Box>
        </Box>
      </Flex>
      <Divider />
      <Box paddingY={4} marginLeft={'17px'} marginBottom={20}>
        <Link href='/products'>
          <Box display='flex' gap={3} color='#0645A4' alignItems='center'>
            <Text fontSize={20}>View all products</Text>
            <ArrowForwardIcon w={8} h={5} />
          </Box>
        </Link>
      </Box>
    </Box>
  );
};

export default Products;
