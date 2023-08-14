import { Box, Flex, Heading, Text } from '@chakra-ui/react';
import { IMainBannerData } from '../../../models/app';
import { BannerSlider } from './BannerSlider';

interface MainBannerProps {
  bannerData: IMainBannerData;
}

export const MainBanner = ({ bannerData }: MainBannerProps) => {
  return (
    <Box h='100vh' bg='brand.darkBlue' pos='relative'>
      <Flex
        flexDir='column'
        justify='center'
        align='center'
        w='40%'
        backgroundColor='transparent'
        h='100%'
        pos='absolute'
        zIndex={2}
        color='gray.100'
        px='3rem'
        display={{ base: 'none', xl: 'flex' }}
      >
        <Box display={'flex'} w='100%' flexDir='column'>
          <Heading size='3xl' textAlign='left' mx='2rem' my='2rem'>
            {bannerData.heading}
          </Heading>
          <Text mx='2rem' textAlign='left'>
            {bannerData.tagline}
          </Text>
        </Box>
      </Flex>
      <BannerSlider featuredProducts={bannerData.featuredProducts || []} />
    </Box>
  );
};
