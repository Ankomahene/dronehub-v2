import { useState } from 'react';
import { Box, Button, Container, Text } from '@chakra-ui/react';
import Products from './MenuItems/Products';
import Services from './MenuItems/Services';
import Extras from './MenuItems/Extras';
import Support from './MenuItems/Support';
import About from './MenuItems/About';

const Menu = ({ title }: { title: string }) => {
  const [url, setUrl] = useState(title);
  return (
    <Container as='nav' p='0px'>
      <Box display='flex' gap={3} overflowY={'auto'}>
        {/* <Box
          display='flex'
          color='#fff'
          bg='#0645A4'
          flex={0.2}
          w='full'
          flexDir='column'
          h='full'
          alignItems='center'
          paddingY={3}
        >
          <Box>
            <Box padding={3} display={'flex'} alignItems={'center'}>
              <Text fontSize='32px' lineHeight={10} textAlign='left'>
                {title === 'Products'
                  ? `Explore ${title}`
                  : title === 'Services'
                  ? `Explore ${title}`
                  : title}
              </Text>
            </Box>
          </Box>
        </Box> */}
        <Box p={8} w='full' overflowY='auto'>
          {url === 'Products' && <Products />}
          {url === 'Services' && <Services />}
          {url === 'Deals' && null}
          {url === 'Support' && <Support />}
          {/* {url === 'About us' && <About />} */}
        </Box>
      </Box>
    </Container>
  );
};

export default Menu;
