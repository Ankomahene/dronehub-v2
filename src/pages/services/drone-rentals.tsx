import { NextPage } from 'next';
import React from 'react';
import { CustomMenuButton } from '../../components';
import { ConnectWithUs, ServiceHeroBanner } from '../../features';
import {
  Benefits,
  Details,
  HowItWorks,
  IndustriesWeServe,
  WhyWorkWithUs,
} from '../../features/services/drone-rentals';
import RentalPlatforms from '../../features/services/drone-rentals/RentalPlatforms';

const DroneRentals: NextPage = () => {
  return (
    <>
      <ServiceHeroBanner
        title='Drone Rental Services'
        description='Let’s help you get your drone flying againAccess more options to harness the potential of drones for your project.'
        imageUrl='https://res.cloudinary.com/djmx11b6s/image/upload/v1677592760/donehub-assets/services/Group_jpiw3a.png'
        cta={
          <CustomMenuButton
            title='Send a request'
            bgColor='white'
            color='brand.blue'
            w={{ base: '80%', lg: '200px' }}
          />
        }
      />

      <Details />
      <HowItWorks />
      <Benefits />
      <WhyWorkWithUs />
      <IndustriesWeServe />
      <RentalPlatforms />
      <ConnectWithUs
        my='2rem'
        heading='Request a quote'
        description='Get Instant Rental Support'
      />
    </>
  );
};

export default DroneRentals;
