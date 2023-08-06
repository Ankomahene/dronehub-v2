import { Box, Flex, Image, Text } from '@chakra-ui/react';
import { useMedia } from 'react-use';
import { A11y, Autoplay, Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { SwiperOptions } from 'swiper/types/swiper-options';
import { v4 as uid } from 'uuid';
import { ProductCTAButtons } from '../../../components';
import { IMainBannerFeaturedProducts } from '../../../models/app';

interface BannerSlider {
  featuredProducts: IMainBannerFeaturedProducts[];
}

export const BannerSlider = ({ featuredProducts }: BannerSlider) => {
  const sliderSettings: SwiperOptions = {
    modules: [Navigation, A11y, Autoplay],
    spaceBetween: 50,
    slidesPerView: 'auto',
    centeredSlides: true,
    loop: true,
    speed: 3000,
    autoplay: {
      delay: 2000,
      disableOnInteraction: true,
    },
  };

  return (
    <Box w="100%" h="100%">
      <Swiper
        {...sliderSettings}
        style={{ width: '100%', height: '100%' }}
        className="main-dh-swiper"
      >
        {featuredProducts.map((product) => (
          <SwiperSlide
            key={uid()}
            style={{
              padding: '0.5rem',
              minWidth: '300px',
              maxWidth: '700px',
              boxSizing: 'border-box',
            }}
          >
            <Flex
              w="100%"
              h="100%"
              justify="center"
              align="center"
              flexDir="column"
            >
              <Image
                boxSize={{ base: '250px', lg: '300px' }}
                src={product.imageUrl}
                alt={product.name}
              />

              <Text
                fontSize={{ base: '1.5rem', lg: '2rem' }}
                fontWeight="bold"
                color="gray.100"
              >
                {product.name}
              </Text>
              <Text color="gray.300" pb="1rem" textAlign="center">
                {product.tagline}
              </Text>
              <Box w="90%" mx="auto">
                <ProductCTAButtons
                  btn1Link={`/products/${product.slug}`}
                  containerStyles={{ justify: 'center' }}
                  btn1Styles={{
                    borderColor: 'gray.100',
                    color: 'gray.100',
                  }}
                  btn2Styles={{
                    _hover: { bg: 'brand.blue', color: 'gray.100' },
                    _active: { bg: 'brand.blue', color: 'gray.100' },
                  }}
                />
                \
              </Box>
            </Flex>
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
};
