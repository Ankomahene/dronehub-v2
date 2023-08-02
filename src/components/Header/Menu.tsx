import { Box } from "@chakra-ui/react";

const Menu = ({ title }: { title: string }) => {
  return (
    <Box w="100%" p={4}>
      <div>{title}</div>
    </Box>
  );
};

export default Menu;
