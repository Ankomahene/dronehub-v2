import { Box, Flex, Heading, Text } from '@chakra-ui/react';
import { IMainBannerData } from '../../../models/app';
import { BannerSlider } from './BannerSlider';

interface MainBannerProps {
  bannerData: IMainBannerData;
}

export const MainBanner = ({ bannerData }: MainBannerProps) => {
  return (
    <Box h="100vh" bg="brand.darkBlue" pos="relative">
      <Flex
        flexDir="column"
        justify="center"
        align="center"
        w="30%"
        backgroundColor="transparent"
        h="100%"
        pos="absolute"
        zIndex={2}
        color="gray.100"
        px="3rem"
        display={{ base: 'none', xl: 'flex' }}
      >
        <Heading size="2xl" textAlign="center" mx="2rem" my="2rem">
          {bannerData.heading}
        </Heading>
        <Text>{bannerData.tagline}</Text>
      </Flex>
      <BannerSlider featuredProducts={bannerData.featuredProducts || []} />
    </Box>
  );
};
