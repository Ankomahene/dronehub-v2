import {
  Box,
  Card,
  CardBody,
  Divider,
  Grid,
  GridItem,
  Heading,
  Stack,
  Text,
} from '@chakra-ui/react';

export const QuickResponse = () => {
  return (
    <Box w={{ base: '90%', lg: '80%' }} mx='auto'>
      <Text fontSize='2xl' fontWeight='bold' mt='2rem'>
        Quick response to all your needs
      </Text>
      <Text mb='1rem'>
        Reach out to us for support in any of the categories below.
      </Text>

      <Grid
        gap='20px'
        templateColumns={{ base: 'repeat(1, 1fr)', lg: 'repeat(3, 1fr)' }}
      >
        <GridItem>
          <ResponseCard
            title='Drones & Accessories'
            description='Learn how to use your drone products the best way.'
            imageUrl='https://res.cloudinary.com/djmx11b6s/image/upload/v1677925787/donehub-assets/svg-icons/drones_accesories_daqlqk.svg'
          />
        </GridItem>
        <GridItem>
          <ResponseCard
            title='Drone Services'
            description='Don’t want to buy a drone? No problem. We have other options for you.'
            imageUrl='https://res.cloudinary.com/djmx11b6s/image/upload/v1677543417/donehub-assets/services/illus-13_df8bxd.png'
          />
        </GridItem>
        <GridItem>
          <ResponseCard
            title='Partnerships'
            description='Let’s work together.'
            imageUrl='https://res.cloudinary.com/djmx11b6s/image/upload/v1677925892/donehub-assets/svg-icons/Partnerships_ytvy6t.svg'
          />
        </GridItem>
      </Grid>

      <Grid
        gap='20px'
        templateColumns={{ base: 'repeat(1, 1fr)', lg: 'repeat(2, 1fr)' }}
        my='1rem'
      >
        <GridItem>
          <ResponseCard
            title='Deals Store'
            description='Get authentic drone products and the latest promotional offers from our deals store.'
            imageUrl='https://res.cloudinary.com/djmx11b6s/image/upload/v1677925871/donehub-assets/svg-icons/deals-store_iunz1e.svg'
          />
        </GridItem>
        <GridItem>
          <ResponseCard
            title='Community'
            description='Be a part of our ever-growing community of drone users, manufacturers, and experts today.'
            imageUrl='https://res.cloudinary.com/djmx11b6s/image/upload/v1677879551/donehub-assets/svg-icons/Network_of_experts_qpu18s.svg'
          />
        </GridItem>
      </Grid>
    </Box>
  );
};

interface IResponseCardProps {
  title: string;
  description: string;
  imageUrl: string;
}
const ResponseCard = ({ title, description, imageUrl }: IResponseCardProps) => (
  <Card minW='xs'>
    <CardBody p='0'>
      <Box
        w={{ base: '200px', '2xl': '300px' }}
        h={{ base: '200px', '2xl': '300px' }}
        bg={`center / contain no-repeat url(${imageUrl})`}
        mx='auto'
        my={{ base: '1rem', '2xl': '3rem' }}
      />

      <Stack spacing='3' p='1rem' bg='brand.darkBlue' color='white' h={'105px'}>
        <Heading size='sm'>{title}</Heading>
        <Text color='gray.300' fontSize='0.9rem'>
          {description}
        </Text>
      </Stack>
    </CardBody>
    <Divider />
  </Card>
);
