import React from 'react';
import { Box, Text, Flex, Link } from '@chakra-ui/react';
import { FaFacebookSquare, FaInstagram, FaTwitter } from 'react-icons/fa';
import { PhoneIcon, EmailIcon } from '@chakra-ui/icons';
import { facebookUrl, twitterUrl, instagramUrl } from '../../../consts';

const SupportMobile = () => {
  return (
    <Box w='full' marginBottom={8}>
      <Flex marginBottom={4}>
        <Box>
          <Box marginTop={8}>
            <Text paddingY={2} fontSize={17} fontWeight='bold'>
              Contact us
            </Text>
          </Box>
          <Box display={'flex'} gap={3} color={'#0645A4'}>
            <PhoneIcon w={5} h={5} />
            <Box color={'#969696'}>
              <Text fontSize={15}>+233 (0) 55 446 0012</Text>
              <Text fontSize={15} paddingY={1}>
                +233 (0) 55 446 0055
              </Text>
            </Box>
          </Box>

          <Box marginTop={8}>
            <Text paddingY={2} fontSize={15} fontWeight='bold'>
              Connect with us
            </Text>
          </Box>
          <Box display={'flex'} gap={3} color={'#0645A4'} alignItems={'center'}>
            <EmailIcon w={6} h={6} />
            <Box color={'#969696'}>
              <Text fontSize={15}>connect@dronehubgh.com</Text>
            </Box>
          </Box>

          <Box marginTop={8}>
            <Text paddingY={2} fontSize={17} fontWeight='bold'>
              Interact with us
            </Text>
          </Box>
          <Flex gap='1rem' align='center' color='brand.blue'>
            <Link href={facebookUrl} isExternal={true}>
              <FaFacebookSquare size={20} />
            </Link>

            <Link href={twitterUrl} isExternal={true}>
              <FaTwitter size={20} />
            </Link>

            <Link href={instagramUrl} isExternal={true}>
              <FaInstagram size={20} />
            </Link>
          </Flex>

          <Box marginTop={8}>
            <Text paddingY={2} fontSize={17} fontWeight='bold'>
              Locate us
            </Text>
          </Box>
          <Box display={'flex'} gap={3} color={'#0645A4'}>
            <PhoneIcon w={5} h={5} />
            <Box w={'200px'} color={'#969696'}>
              <Text fontSize={15}>
                H/No. 60 Cooperative Building Kwame Nkwumah Avenue, Adabraka,
                Greater Accra, Ghana | GA-075-8188
              </Text>
            </Box>
          </Box>
        </Box>
      </Flex>
    </Box>
  );
};

export default SupportMobile;
