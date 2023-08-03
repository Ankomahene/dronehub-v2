import { Box, Container, Text } from "@chakra-ui/react";
import { v4 as uid } from "uuid";

const links = [
  {
    id: uid(),
    title: "Explore Products",
    name: "Products",
  },
  {
    id: uid(),
    title: "Explore Services",
    name: "Services",
  },
  {
    id: uid(),
    title: "Extras",
    name: "Extras",
  },
  {
    id: uid(),
    title: "Support",
    name: "Support",
  },
  {
    id: uid(),
    title: "About us",
    name: "About us",
  },
];

const Menu = ({ title }: { title: string }) => {
  return (
    <Container as="nav" p="0px" minW="100vw" minH="90vh">
      <Box display="flex" h="full" gap={3}>
        <Box
          display="flex"
          color="#fff"
          bg="#0645A4"
          flex={0.3}
          w="full"
          flexDir="column"
          minHeight="100vh"
          alignItems="center"
          paddingY={20}
        >
          <Box>
            {links.map((item) => (
              <Box key={item.id}>
                <Text
                  fontSize="22px"
                  fontWeight={`${title === item.name ? "700" : "400"}`}
                  lineHeight={12}
                  style={{
                    borderBottom: `${
                      title === item.name ? "1px solid white" : ""
                    }`,
                  }}
                  paddingY={2}
                  cursor="pointer"
                  textAlign="left"
                >
                  {item.title}
                </Text>
              </Box>
            ))}
          </Box>
        </Box>
        <Box p={8} w="full" flex={0.7}>
          {title}
        </Box>
      </Box>
    </Container>
  );
};

export default Menu;
