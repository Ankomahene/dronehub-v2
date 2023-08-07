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
    <Container as='nav' p='0px' minW='100vw' minH='90vh'>
      <Box display='flex' h='full' gap={3} overflow='auto'>
        <Box
          display='flex'
          color='#fff'
          bg='#0645A4'
          flex={0.2}
          w='full'
          flexDir='column'
          minHeight='100vh'
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
        </Box>
        <Box
          p={8}
          w='full'
          flex={0.8}
          overflowY='auto'
          h={'100vh'}
          marginBottom={10}
        >
          {url === 'Products' && <Products />}
          {url === 'Services' && <Services />}
          {url === 'Extras' && <Extras />}
          {url === 'Support' && <Support />}
          {url === 'About us' && <About />}
        </Box>
      </Box>
    </Container>
  );
};

export default Menu;
