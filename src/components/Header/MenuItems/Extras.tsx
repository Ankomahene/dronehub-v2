import React from 'react';
import { Container, Box, Divider, Text, Flex, Image } from '@chakra-ui/react';
import Link from 'next/link';
import { feedback, blog } from '../../../data';

const Extras = () => {
  return (
    <Box w='full' marginBottom={8}>
      <Flex gap={24}>
        <Box flex={0.5}>
          <Image
            src={
              'https://res.cloudinary.com/djp5oy3ri/image/upload/v1691282458/dronehub/blog/jvalvcpellxncaip0sk3.png'
            }
            width={240}
            alt='blog'
          />

          <Box marginTop={2}>
            <Box>
              {blog.map((item) => (
                <Box key={item.id} paddingY={2}>
                  <Link href={`${item.link}`}>
                    <Box>
                      <Text fontSize={17} color='#000' fontWeight='bold'>
                        {item.name}
                      </Text>
                      <Text paddingY={1} fontSize={13} color={'#979797'}>
                        {item.description}
                      </Text>
                    </Box>
                  </Link>
                </Box>
              ))}
            </Box>
          </Box>
        </Box>

        <Box flex={0.5}>
          <Image
            width={240}
            src={
              'https://res.cloudinary.com/djp5oy3ri/image/upload/v1691282458/dronehub/blog/jvalvcpellxncaip0sk3.png'
            }
            alt='feedback'
          />

          <Box marginTop={2}>
            <Box>
              {feedback.map((item) => (
                <Box key={item.id} paddingY={2}>
                  <Link href={`${item.link}`}>
                    <Box>
                      <Text fontSize={17} color='#000' fontWeight='bold'>
                        {item.name}
                      </Text>
                      <Text paddingY={1} fontSize={13} color={'#979797'}>
                        {item.description}
                      </Text>
                    </Box>
                  </Link>
                </Box>
              ))}
            </Box>
          </Box>
        </Box>
      </Flex>
    </Box>
  );
};

export default Extras;
