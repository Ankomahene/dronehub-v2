import React from 'react';
import { Container, Box, Divider, Text, Flex, Image } from '@chakra-ui/react';
import { ArrowForwardIcon } from '@chakra-ui/icons';
import Link from 'next/link';
import styles from '../Header.module.scss';
import { services, software, industrial } from '../../../data';
import { motion } from 'framer-motion';

const Services = () => {
  return (
    <Box w='full' overflowY={'auto'}>
      <Flex px={10} pt={4} justifyContent={'center'}>
        <Box
          flex={0.33}
          display={'flex'}
          w={'full'}
          alignItems={'center'}
          flexDir={'column'}
        >
          <Image
            src={
              'https://res.cloudinary.com/djp5oy3ri/image/upload/v1691282542/dronehub/services/zsdznym3ngwzrtif9xde.png'
            }
            width={190}
            alt='consumer'
          />
          <Text paddingY={1} fontSize={18} textAlign='center' fontWeight='bold'>
            Services
          </Text>
          <Box>
            <Text
              paddingY={1}
              paddingLeft={'17px'}
              color='#979797'
              fontSize='14px'
            >
              Customised and reliable support solutions
            </Text>
            <Box>
              {services.map((item) => (
                <Box key={item.id}>
                  <Link href={`${item.link}`}>
                    <Box
                      as={motion.button}
                      whileHover={{
                        color: 'rgba(6, 69, 164, 1)',
                        backgroundColor: 'rgba(216, 216, 216, 1)',
                        borderRadius: '5px',
                        transition: { duration: 0.3 },
                      }}
                      paddingTop={'8px'}
                      paddingRight={'17px'}
                      paddingBottom={'5px'}
                      paddingLeft={'17px'}
                    >
                      <Text fontSize={18}>{item.name}</Text>
                    </Box>
                  </Link>
                </Box>
              ))}
            </Box>
          </Box>
        </Box>

        <Box
          flex={0.33}
          borderLeftWidth={1}
          borderLeftColor={'#eee'}
          display={'flex'}
          w={'full'}
          alignItems={'center'}
          flexDir={'column'}
        >
          <Image
            width={120}
            src={
              'https://res.cloudinary.com/djp5oy3ri/image/upload/v1691282531/dronehub/services/f879fdq7zybvjxsc6ewu.png'
            }
            alt='software'
          />

          <Text paddingY={1} fontSize={18} textAlign='center' fontWeight='bold'>
            Software
          </Text>
          <Box>
            <Text
              paddingY={1}
              paddingLeft={'17px'}
              color='#979797'
              fontSize='14px'
            >
              Drone software solutions optimized for your project
            </Text>
            <Box>
              {software.map((item) => (
                <Box key={item.id}>
                  <Link href={`${item.link}`}>
                    <Box
                      as={motion.button}
                      whileHover={{
                        color: 'rgba(6, 69, 164, 1)',
                        backgroundColor: 'rgba(216, 216, 216, 1)',
                        borderRadius: '5px',
                        transition: { duration: 0.3 },
                      }}
                      paddingTop={'8px'}
                      paddingRight={'17px'}
                      paddingBottom={'8px'}
                      paddingLeft={'17px'}
                    >
                      <Text fontSize={18}>{item.name}</Text>
                    </Box>
                  </Link>
                </Box>
              ))}
            </Box>
          </Box>
        </Box>

        <Box
          flex={0.33}
          borderLeftWidth={1}
          borderLeftColor={'#eee'}
          display={'flex'}
          w={'full'}
          alignItems={'center'}
          flexDir={'column'}
        >
          <Image
            width={200}
            height={120}
            src={
              'https://res.cloudinary.com/djp5oy3ri/image/upload/v1691282540/dronehub/services/pwecbmji9piq5l1awfpl.png'
            }
            alt='consumer'
          />

          <Text paddingY={1} fontSize={17} textAlign='center' fontWeight='bold'>
            Industrial Solutions
          </Text>
          <Box>
            <Text
              paddingY={1}
              paddingLeft={'17px'}
              color='#979797'
              fontSize={13}
            >
              New generation drone solutions for your line of work
            </Text>
            <Box>
              {industrial.map((item) => (
                <Box key={item.id}>
                  <Link href={`${item.link}`}>
                    <Box
                      as={motion.button}
                      whileHover={{
                        color: 'rgba(6, 69, 164, 1)',
                        backgroundColor: 'rgba(216, 216, 216, 1)',
                        borderRadius: '8px',
                        transition: { duration: 0.3 },
                      }}
                      paddingTop={'8px'}
                      paddingRight={'17px'}
                      paddingBottom={'8px'}
                      paddingLeft={'17px'}
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
      <Box
        paddingY={2}
        display={'flex'}
        w={'full'}
        justifyContent={'center'}
        alignItems={'center'}
      >
        <Link href='/services'>
          <Box display='flex' gap={3} color='#0645A4' alignItems='center'>
            <Text fontSize={20}>View all services</Text>
            <ArrowForwardIcon w={8} h={5} />
          </Box>
        </Link>
      </Box>
    </Box>
  );
};

export default Services;
