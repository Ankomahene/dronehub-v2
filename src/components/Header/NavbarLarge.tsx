import { Box, Flex, Image } from '@chakra-ui/react';
import Link from 'next/link';
import NextLink from 'next/link';
import React, { useEffect, useState } from 'react';
import { useWindowScroll } from 'react-use';
import { logoDark, logoLight } from '../../consts';
import { INavItem } from '../../models/app';
import { Button } from '../Buttons/Button';
import styles from './Header.module.scss';
import { getHeaderStyles } from './_styles';
import Products from './MenuItems/Products';
import Services from './MenuItems/Services';
import About from './MenuItems/About';
import Support from './MenuItems/Support';
import { motion, useMotionValue, animate } from 'framer-motion';
interface NavbarLargeProps {
  navItems: INavItem[];
}

export const NavbarLarge = ({ navItems }: NavbarLargeProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [subMenu, setSubMenu] = useState('none');
  const [title, setTitle] = useState('');
  const { x, y } = useWindowScroll();

  const animate_x = useMotionValue(0);

  useEffect(() => {
    if (y > 100) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  }, [y]);

  const logoUrl = isScrolled ? logoDark : logoLight;

  return (
    <Box
      as='nav'
      {...getHeaderStyles(isScrolled)}
      className={`navbar fixed-top ${styles.navigationBar}`}
      transition='all .3s'
    >
      <Flex
        px='1rem'
        w={{ base: '100%', lg: '95%', xl: '90%' }}
        m='auto'
        justify='space-between'
        className='container-fluid'
      >
        <NextLink className='navbar-brand' href='/' passHref>
          <Image src={logoUrl} alt='logo' w='80px' />
        </NextLink>

        <Box color='white'>
          <motion.button
            whileHover={{
              scale: 1.1,
              transition: { duration: 1 },
            }}
          >
            <NextLink
              className={`nav-item mx-3 ${
                isScrolled ? 'text-dark' : 'text-light'
              }`}
              href='/products'
              passHref
              onMouseEnter={() => {
                setSubMenu('block');
                setTitle('Products');
              }}
              onMouseLeave={() => {
                setSubMenu('none');
              }}
            >
              Products
            </NextLink>
          </motion.button>
          <motion.button
            whileHover={{
              scale: 1.1,
              transition: { duration: 1 },
            }}
          >
            <NextLink
              className={`nav-item mx-3 ${
                isScrolled ? 'text-dark' : 'text-light'
              }`}
              href='/services'
              passHref
              onMouseEnter={() => {
                setSubMenu('block');
                setTitle('Services');
              }}
              onMouseLeave={() => {
                setSubMenu('none');
              }}
            >
              Services
            </NextLink>
          </motion.button>

          <motion.button
            whileHover={{
              scale: 1.1,
              transition: { duration: 1 },
            }}
          >
            <NextLink
              className={`nav-item mx-3 ${
                isScrolled ? 'text-dark' : 'text-light'
              }`}
              href='/deals'
              passHref
            >
              Deals
            </NextLink>
          </motion.button>
          <motion.button
            whileHover={{
              scale: 1.1,
              transition: { duration: 1 },
            }}
          >
            <NextLink
              className={`nav-item mx-3 ${
                isScrolled ? 'text-dark' : 'text-light'
              }`}
              href='/support'
              passHref
              onMouseEnter={() => {
                setSubMenu('block');
                setTitle('Support');
              }}
              onMouseLeave={() => {
                setSubMenu('none');
              }}
            >
              Support
            </NextLink>
          </motion.button>

          <motion.button
            whileHover={{
              scale: 1.1,
              transition: { duration: 1 },
            }}
          >
            <NextLink
              className={`nav-item mx-3 ${
                isScrolled ? 'text-dark' : 'text-light'
              }`}
              href='/about'
              passHref
              onMouseEnter={() => {
                setSubMenu('block');
                setTitle('About us');
              }}
              onMouseLeave={() => {
                setSubMenu('none');
              }}
            >
              About us
            </NextLink>
          </motion.button>
        </Box>
        <Flex gap='10px'>
          <Link href='/consumer'>
            <Button
              title='Consumer Solutions'
              borderWidth={2}
              bg='transparent'
              color={isScrolled ? 'brand.blue' : 'gray.100'}
              _hover={{
                borderColor: 'rgba(216, 216, 216, 1)',
                color: 'rgba(6, 69, 164, 1)',
              }}
            />
          </Link>
          <Link href='/business'>
            <Button
              title='Enterprise Solutions'
              bg={isScrolled ? 'brand.blue' : 'white'}
              color={isScrolled ? 'gray.100' : 'brand.blue'}
              _hover={{
                color: 'rgba(6, 69, 164, 1)',
                backgroundColor: 'rgba(216, 216, 216, 1)',
              }}
            />
          </Link>
        </Flex>
      </Flex>

      <Box
        as={motion.div}
        style={{
          y: animate_x,
          transition: subMenu === 'block' ? 'all .5 ease' : '',
        }}
        px='1rem'
        w={{ base: '100%', lg: '95%', xl: '90%' }}
        m='auto'
        className={`container-fluid ${styles.popover}`}
        onMouseEnter={() => {
          setSubMenu('block');
          animate(animate_x, 20);
        }}
        onMouseLeave={() => {
          setSubMenu('none');
          animate(animate_x, 0);
        }}
        zIndex={10}
        left={'0%'}
        top={'60%'}
        right={'0%'}
        color={'#000'}
        position={'absolute'}
      >
        <Box
          className='menuItem'
          w={'100vw'}
          bg={'#fff'}
          display={`${subMenu}`}
          boxShadow={'lg'}
        >
          {title === 'Products' && <Products />}
          {title === 'Services' && <Services />}
          {title === 'About us' && <About />}
          {title === 'Support' && <Support />}
        </Box>
      </Box>
    </Box>
  );
};
