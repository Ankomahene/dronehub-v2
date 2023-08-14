import React from 'react';
import { Container, Box, Divider, Text, Flex, Image } from '@chakra-ui/react';
import { ArrowForwardIcon } from '@chakra-ui/icons';
import Link from 'next/link';
import { about } from '../../../data';

const About = () => {
  return (
    <Box w='full'>
      <Flex marginBottom={4} gap={20} px={10} pt={4}>
        <Box>
          <Image
            width={326}
            src={
              'https://res.cloudinary.com/djp5oy3ri/image/upload/v1691282583/dronehub/about/sksi1iwdobuebzkddh5b.png'
            }
            alt='consumer'
          />
        </Box>

        <Box marginTop={2}>
          <Box>
            {about.map((item) => (
              <Box key={item.id} paddingY={2}>
                <Box>
                  <Box
                    paddingTop={'16px'}
                    paddingRight={'17px'}
                    paddingBottom={'16px'}
                    paddingLeft={'35px'}
                    borderRadius={4}
                    backgroundColor={'rgba(216, 216, 216, 1)'}
                  >
                    <Text
                      fontSize={18}
                      fontWeight='bold'
                      color={'rgba(6, 69, 164, 1)'}
                    >
                      {item.name}
                    </Text>
                  </Box>
                  <Text
                    paddingRight={'17px'}
                    paddingLeft={'35px'}
                    paddingY={3}
                    fontSize={14}
                    color={'#979797'}
                  >
                    {item.description}
                  </Text>
                </Box>
              </Box>
            ))}
          </Box>
        </Box>
      </Flex>
      <Divider />
      <Box
        paddingY={4}
        display={'flex'}
        w={'full'}
        justifyContent={'center'}
        alignItems={'center'}
      >
        <Link href='/about'>
          <Box display='flex' gap={3} color='#0645A4' alignItems='center'>
            <Text fontSize={20}>View about us</Text>
            <ArrowForwardIcon w={8} h={5} />
          </Box>
        </Link>
      </Box>
    </Box>
  );
};

export default About;
