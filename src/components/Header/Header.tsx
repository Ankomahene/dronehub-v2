import { NavbarLarge } from './NavbarLarge';
import { navItems } from '../../data/nav';
import { NavbarSmall } from './NavbarSmall';
import { useMediaQuery } from '@chakra-ui/react';

export const Header = () => {
  const [isLarge] = useMediaQuery('(min-width: 1024px)');

  return (
    <>
      {isLarge ? (
        <NavbarLarge navItems={navItems} />
      ) : (
        <NavbarSmall navItems={navItems} />
      )}
    </>
  );
};
