import { Box, Flex, Heading, Text } from '@chakra-ui/react';
import { CSSProperties } from '@emotion/serialize';
import Link from 'next/link';
import { A11y, Autoplay, Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { SwiperOptions } from 'swiper/types/swiper-options';
import { Button, CustomMenuButton } from '../../../components';

const style: any = {
  position: 'relative',
  minHeight: '500px',
};

export const Testimonials = () => {
  const pagination = {
    clickable: true,
    renderBullet: (_index: number, className: string) => {
      return `<span class="${className} swiper-loader"></span>`;
    },
  };

  const sliderSettings: SwiperOptions = {
    modules: [Navigation, Pagination, A11y, Autoplay],
    pagination,
    spaceBetween: 0,
    slidesPerView: 1,
    loop: true,
    speed: 5000,
    centeredSlides: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
  };

  return (
    <Box w="100%" h="100%" my="4rem">
      <Box minH="800px" bg="brand.linear">
        <Box
          w="100%"
          minH="800px"
          bg="center / cover no-repeat url('https://res.cloudinary.com/djmx11b6s/image/upload/v1676051690/donehub-assets/Union_1_xgswfi.png')"
        >
          <Box p={{ base: '2rem', lg: '8rem' }} color="gray.100">
            <Text my="1rem">FOCUS</Text>
            <Heading size={{ base: 'lg', md: 'xl', lg: '2xl', xxl: '3xl' }}>
              On what you can do best, <br /> leave anything drone to us
            </Heading>
            <Text fontSize="1.2rem" w="90%" my="2rem">
              See how businesses trust us for their drone solutions
            </Text>
            <Flex
              gap="0.5rem"
              w={{ base: '90%', lg: '30rem' }}
              flexDir={{ base: 'column', md: 'row' }}
              mb="2rem"
            >
              <Box w={{ base: '100%', lg: '50%' }}>
                <CustomMenuButton title="Talk to a Rep" />
              </Box>
              <Box w={{ base: '100%', lg: '50%' }}>
                <Link href="/products">
                  <Button
                    title="Explore Drones"
                    bg="brand.blue"
                    color="gray.100"
                  />
                </Link>
              </Box>
            </Flex>
            <Swiper
              {...sliderSettings}
              style={{ width: '100%', height: '100%' }}
            >
              <SwiperSlide style={style}>
                <TestimonyCard
                  testimony="The Dronehub team is always ready to listen to you and offer timely
        solutions to your specific needs."
                  name="Mr. Adabaka"
                  position="TECHNICAL MANAGER"
                  company="SIENNA SERVICES LIMITED"
                />
              </SwiperSlide>
              <SwiperSlide style={style}>
                <TestimonyCard
                  testimony="Their customer support is timely and prompt. Business relation is great and I  recommend Dronehub to businesses"
                  name="Mr. Larbi"
                  position="MANAGING DIRECTOR"
                  company="BEACON SURVEY LIMITED"
                />
              </SwiperSlide>
              <SwiperSlide style={style}>
                <TestimonyCard
                  testimony="The expertise of your technical team and their willingness to help us in the field made the integration process smooth for our technical personnel."
                  name="Irene Avornyo"
                  position="PROJECT COORDINATOR"
                  company="PREFOS GHANA LIMITED"
                />
              </SwiperSlide>
            </Swiper>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

interface ITestimonyCardProps {
  testimony: string;
  name: string;
  position: string;
  company: string;
}

export const TestimonyCard = ({
  testimony,
  name,
  position,
  company,
}: ITestimonyCardProps) => (
  <Flex
    justify="flex-end"
    align={{ base: 'flex-end', lg: 'center' }}
    w={{ base: '100%', lg: '90%' }}
    minH={{ base: '300px', lg: '700px' }}
    borderRightRadius="20px"
    p={{ base: '1rem', lg: '4rem' }}
    bg="center / cover no-repeat url(https://res.cloudinary.com/djmx11b6s/image/upload/v1676054037/donehub-assets/bridge_1_smtor5.png)"
    pos={{ base: 'relative' }}
  >
    <Box
      bg="gray.100"
      color="gray.900"
      p={{ base: '1rem', lg: '3rem' }}
      w="400px"
      mb={{ base: '-8rem', lg: '0' }}
      pos="relative"
      borderRadius={5}
    >
      <Text
        fontSize={{ base: '0.8rem', md: '1rem', lg: '1.2rem' }}
        w="90%"
        my="2rem"
        color="brand.blue"
      >
        “{testimony}”
      </Text>
      <Text fontWeight="bold" fontSize={{ base: 'lg', lg: '2xl' }}>
        {name}
      </Text>
      <Text fontSize={{ base: '0.8rem', lg: '1rem' }}>
        {position}, <br /> {company}
      </Text>
    </Box>
  </Flex>
);
