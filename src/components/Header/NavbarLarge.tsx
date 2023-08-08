import { Box, Flex, Image } from '@chakra-ui/react';
import Link from 'next/link';
import { Popover } from 'antd';
import NextLink from 'next/link';
import React, { useEffect, useState } from 'react';
import { useWindowScroll } from 'react-use';
import { logoDark, logoLight } from '../../consts';
import { INavItem } from '../../models/app';
import { Button } from '../Buttons/Button';
import styles from './Header.module.scss';
import { getHeaderStyles } from './_styles';
import Menu from './Menu';

interface NavbarLargeProps {
  navItems: INavItem[];
}

export const NavbarLarge = ({ navItems }: NavbarLargeProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const { x, y } = useWindowScroll();
  const [open, setOpen] = useState(false);

  const hide = () => {
    setOpen(false);
  };

  const handleOpenChange = (newOpen: boolean) => {
    setOpen(newOpen);
  };

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
        py='0.5rem'
        justify='space-between'
        className='container-fluid'
      >
        <NextLink className='navbar-brand' href='/' passHref>
          <Image src={logoUrl} alt='logo' w='80px' />
        </NextLink>

        <Box color='white'>
          {navItems.map((navItem) => (
            <Popover
              key={navItem.id}
              overlayStyle={{
                borderRadius: 0,
              }}
              arrow={false}
              overlayInnerStyle={{
                padding: 0,
              }}
              content={<Menu title={navItem?.name} />}
            >
              <NextLink
                key={navItem.id}
                className={`nav-item mx-3 ${
                  isScrolled ? 'text-dark' : 'text-light'
                }`}
                href={navItem.link}
                passHref
              >
                {navItem.name}
              </NextLink>
            </Popover>
          ))}
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
    </Box>
  );
};
