import { FlexProps, HeadingProps, TextProps } from '@chakra-ui/react';

export const cardStyles: FlexProps = {
  pos: 'relative',
  overflow: 'hidden',
  flexDir: 'column',
  bg: 'white',
  h: '389px',
  w: '542px',

  boxSizing: 'border-box',
  shadow: 'md',
  my: '0.5rem',
  mx: 'auto',
};

export const headingStyles: HeadingProps = {
  size: 'xl',
  fontWeight: 'bold',
};

export const textStyles: TextProps = {
  color: 'gray.400',
  fontWeight: 400,
};

export const imageBoxStyles: FlexProps = {
  h: '300px',
  overflow: 'hidden',
  justifyContent: 'center',
  alignItems: 'center',
};
