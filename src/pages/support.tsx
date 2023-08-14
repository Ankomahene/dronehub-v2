import { Box, Text } from '@chakra-ui/react';
import { NextPage } from 'next';
import React from 'react';
import { Contact } from '../components';
import {
  AllFrequentlyAskedQuestions,
  QuickResponse,
  SupportBanner,
} from '../features';
import { client } from '../lib';
import { IFAQ } from '../models/app';
import { faqQuery } from '../queries';

interface Props {
  faq: IFAQ[];
}
const SupportPage = ({ faq }: Props) => {
  return (
    <>
      <SupportBanner />
      <Box w={{ base: '90%', lg: '80%' }} mx='auto' textAlign='center'>
        <Text fontSize='14px' fontWeight='light' mt='2rem'>
          OUR MISSION
        </Text>
        <Text fontSize='48px' fontWeight='700'>
          To build a community for people and drones
        </Text>
        <Text my='2rem'>
          Drone and technology solutions provider in Africa.
        </Text>
      </Box>

      <QuickResponse />
      <AllFrequentlyAskedQuestions faq={faq} />
      <Contact hideHeading={true} />
    </>
  );
};

export const getServerSideProps = async () => {
  const faq: IFAQ[] = await client.fetch(faqQuery);

  return {
    props: { faq },
  };
};

export default SupportPage;
