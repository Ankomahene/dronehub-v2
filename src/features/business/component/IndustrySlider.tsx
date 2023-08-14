import { Box, Flex, Text } from '@chakra-ui/react';
import Link from 'next/link';
import { CSSProperties } from 'react';
import { FaChevronRight } from 'react-icons/fa';
import { A11y, Autoplay, Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { SwiperOptions } from 'swiper/types/swiper-options';
import { v4 as uid } from 'uuid';
import { IconButton, SwiperNavButtons } from '../../../components';
import { IndustryOverView } from '../../../data/industry';

const slideStyles: CSSProperties = {
  maxWidth: '100%',
  minWidth: '100%',
  boxSizing: 'border-box',
};
export const IndustrySlider = () => {
  const sliderSettings: SwiperOptions = {
    modules: [Navigation, A11y, Autoplay],
    spaceBetween: 0,
    slidesPerView: 'auto',
    speed: 3000,
    loop: true,
    autoplay: {
      delay: 10000,
      disableOnInteraction: false,
    },
  };

  return (
    <Box w='100%' h='100%'>
      <Swiper {...sliderSettings} style={{ width: '100%', height: '100%' }}>
        {IndustryOverView.map((industry) => (
          <SwiperSlide key={uid()} style={slideStyles}>
            <Flex
              h='100%'
              flexDir={{ base: 'column', lg: 'row' }}
              px={{ base: '2rem', lg: '0' }}
              my={{ base: '2rem', lg: '0' }}
            >
              <Box
                w={{ base: '100%', lg: '70%' }}
                bg={`center / cover no-repeat url(${industry.image})`}
                minH={{ base: '300px', lg: '550px' }}
              />
              <Flex
                flexDir='column'
                justify='center'
                w={{ base: '100%', lg: '30%' }}
                px='2rem'
                bg='rgba(216, 216, 216, 1)'
                py='2rem'
                minH='300px'
              >
                <Text fontWeight='bold'>{industry.name}</Text>
                <Text my='1rem' maxW='350px'>
                  {industry.description}
                </Text>
                <Link href={industry.link}>
                  <IconButton
                    fontSize='14px'
                    color='gray.800'
                    title='Learn more'
                    maxW='150px'
                    borderColor='gray.600'
                    bg='rgba(216, 216, 216, 1)'
                    icon={<FaChevronRight size='12px' />}
                  />
                </Link>
              </Flex>
            </Flex>
          </SwiperSlide>
        ))}
        <SwiperNavButtons
          bgColor='white'
          color='brand.blue'
          borderWidth='1px'
          borderColor='brand.blue'
          _hover={{ bgColor: 'brand.blue', color: 'gray.100' }}
          _active={{ bgColor: 'brand.blue', color: 'gray.100' }}
        />
      </Swiper>
    </Box>
  );
};
