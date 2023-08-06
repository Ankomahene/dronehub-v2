import { Box, Flex, Grid, GridItem, Heading, Text } from '@chakra-ui/react';
import { PortableText } from '@portabletext/react';
import Link from 'next/link';
import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { RichTextComponents } from '../../components/RichTextComponent';
import { policyItems } from '../../consts/consts';
import { PoliciesLayout } from '../../features/policies';

const title = 'Dronehub Terms & Conditions';
const description = 'Building a community of people & drones';

const PrivacyPage = () => {
  return (
    <PoliciesLayout title={title} description={description} name="overview">
      <Grid
        templateColumns={{ base: 'repeat(1, 1fr)', sm: 'repeat(2, 1fr)' }}
        gap="2rem"
      >
        {policyItems
          .filter((_, index) => index !== 0)
          .map((item) => {
            return (
              <GridItem key={item.name}>
                <Box
                  p="2rem"
                  minH={{ base: '200px', md: '250px', xl: '300px' }}
                  bgColor={item.color}
                  color="gray.100"
                >
                  <Heading size={{ base: 'lg', lg: 'xl' }} mb="1rem">
                    {item.title}
                  </Heading>

                  <Link href={item.link} passHref>
                    <Flex align="center" gap={1}>
                      <Text>Read more</Text>
                      <FaArrowRight size="0.6rem" />
                    </Flex>
                  </Link>
                </Box>
              </GridItem>
            );
          })}
      </Grid>
    </PoliciesLayout>
  );
};
export default PrivacyPage;
