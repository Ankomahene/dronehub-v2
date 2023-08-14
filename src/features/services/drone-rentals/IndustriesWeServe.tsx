import {
  Box,
  Divider,
  Grid,
  GridItem,
  GridItemProps,
  Heading,
  Text,
  Image,
} from '@chakra-ui/react';
import React from 'react';

const gridItemStyles: GridItemProps = {
  py: { base: '0.5rem', lg: '1.5rem' },
  px: { base: '0.5rem', lg: '0' },
  textAlign: { base: 'left', lg: 'center' },
  my: '0.5rem',
  color: 'gray.100',
  borderBottomWidth: { base: '1px', lg: '0' },
};

export const IndustriesWeServe = () => {
  return (
    <Box bgColor='brand.darkBlue' py='3rem'>
      <Box w='80%' mx='auto'>
        <Heading color='gray.100' textAlign='center' my='2rem'>
          Industries We Serve
        </Heading>

        <Grid
          borderTopWidth='1px'
          borderBottomWidth={{ base: '0', lg: '1px' }}
          templateColumns={{ base: 'repeat(1, 1fr)', lg: 'repeat(4, 1fr)' }}
          templateRows={{ base: 'repeat(6, 1fr)', lg: 'repeat(2, 1fr)' }}
          w='80%'
          mx='auto'
        >
          <GridItem
            {...gridItemStyles}
            borderRightWidth={{ base: '0', lg: '1px' }}
            borderBottomWidth='1px'
            display={'flex'}
            alignItems={'center'}
            gap={4}
          >
            <Image
              borderRadius='full'
              boxSize={{
                base: '60px',
                lg: '80px',
              }}
              src='https://res.cloudinary.com/djp5oy3ri/image/upload/v1691836565/dronehub/rentals/xuzuwa1iqtpfyzndvr73.png'
              alt='Agric'
            />
            <Text fontWeight={'700'}>Agriculture</Text>
          </GridItem>
          <GridItem
            {...gridItemStyles}
            borderRightWidth={{ base: '0', lg: '1px' }}
            borderBottomWidth='1px'
            display={'flex'}
            alignItems={'center'}
            gap={4}
          >
            <Image
              borderRadius='full'
              boxSize={{
                base: '60px',
                lg: '80px',
              }}
              marginLeft={4}
              src='https://res.cloudinary.com/djp5oy3ri/image/upload/v1691836565/dronehub/rentals/zlrq4zgbmc35fy8p3u8g.png'
              alt='Surveying'
            />
            <Text fontWeight={'700'}>Surveying</Text>
          </GridItem>
          <GridItem
            {...gridItemStyles}
            borderRightWidth={{ base: '0', lg: '1px' }}
            borderBottomWidth='1px'
            display={'flex'}
            alignItems={'center'}
            gap={4}
          >
            <Image
              borderRadius='full'
              boxSize={{
                base: '60px',
                lg: '80px',
              }}
              marginLeft={4}
              src='https://res.cloudinary.com/djp5oy3ri/image/upload/v1691836565/dronehub/rentals/tw4t8ck2c1ku5vwijhp3.png'
              alt=''
            />
            <Text fontWeight={'700'}>Construction</Text>
          </GridItem>
          <GridItem
            {...gridItemStyles}
            borderBottomWidth='1px'
            display={'flex'}
            alignItems={'center'}
            gap={4}
          >
            <Image
              borderRadius='full'
              boxSize={{
                base: '60px',
                lg: '80px',
              }}
              marginLeft={4}
              src='https://res.cloudinary.com/djp5oy3ri/image/upload/v1691836564/dronehub/rentals/nqgjndic3m8eezjoawlh.png'
              alt=''
            />
            <Text fontWeight={'700'}>Energy</Text>
          </GridItem>
          <GridItem
            {...gridItemStyles}
            borderRightWidth={{ base: '0', lg: '1px' }}
            display={'flex'}
            alignItems={'center'}
            gap={4}
          >
            <Image
              borderRadius='full'
              boxSize={{
                base: '60px',
                lg: '80px',
              }}
              src='https://res.cloudinary.com/djp5oy3ri/image/upload/v1691836565/dronehub/rentals/hz2qfrte6phejuyaivbj.png'
              alt=''
            />
            <Text fontWeight={'700'}>Mining</Text>
          </GridItem>

          <GridItem
            {...gridItemStyles}
            borderRightWidth={{ base: '0', lg: '1px' }}
            display={'flex'}
            alignItems={'center'}
            gap={4}
          >
            <Image
              borderRadius='full'
              boxSize={{
                base: '60px',
                lg: '80px',
              }}
              marginLeft={4}
              src='https://res.cloudinary.com/djp5oy3ri/image/upload/v1691836565/dronehub/rentals/yphjxhklxsfyyijbdsuf.png'
              alt=''
            />
            <Text fontWeight={'700'}>Forestry</Text>
          </GridItem>
          <GridItem
            {...gridItemStyles}
            borderRightWidth={{ base: '0', lg: '1px' }}
            display={'flex'}
            alignItems={'center'}
            gap={4}
          >
            <Image
              borderRadius='full'
              boxSize={{
                base: '60px',
                lg: '80px',
              }}
              marginLeft={4}
              src='https://res.cloudinary.com/djp5oy3ri/image/upload/v1691836565/dronehub/rentals/jcddhnwdt7h0z947o7m2.png'
              alt=''
            />
            <Text fontWeight={'700'} marginRight={3}>
              Infrastructure
            </Text>
          </GridItem>
          <GridItem
            {...gridItemStyles}
            gap={4}
            display={'flex'}
            alignItems={'center'}
          >
            <Image
              borderRadius='full'
              boxSize={{
                base: '60px',
                lg: '80px',
              }}
              marginLeft={4}
              src='https://res.cloudinary.com/djp5oy3ri/image/upload/v1691836564/dronehub/rentals/azsrw01j9muahcnh4ua7.png'
              alt=''
            />
            <Text fontWeight={'700'}>Media</Text>
          </GridItem>
        </Grid>
      </Box>
    </Box>
  );
};
