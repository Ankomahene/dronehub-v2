import { useState } from "react";
import { Box, Button, Container, Text } from "@chakra-ui/react";
import { v4 as uid } from "uuid";
import Products from "./MenuItems/Products";
import { CloseIcon } from "@chakra-ui/icons";
import Services from "./MenuItems/Services";
import Extras from "./MenuItems/Extras";
import Support from "./MenuItems/Support";
import About from "./MenuItems/About";

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

const Menu = ({
  title,
  handleClose,
}: {
  title: string;
  handleClose: () => void;
}) => {
  const [url, setUrl] = useState(title);
  return (
    <Container as="nav" p="0px" minW="100vw" minH="90vh">
      <Box display="flex" h="full" gap={3} overflow="auto">
        <Box
          display="flex"
          color="#fff"
          bg="#0645A4"
          flex={0.2}
          w="full"
          flexDir="column"
          minHeight="100vh"
          alignItems="center"
          paddingY={3}
        >
          <Box>
            {/* {links.map((item) => (
              <Box key={item.id}>
                <button onClick={() => setUrl(item.name)}>
                  <Text
                    fontSize="22px"
                    fontWeight={`${url === item.name ? "700" : "400"}`}
                    lineHeight={10}
                    style={{
                      borderBottom: `${
                        url === item.name ? "2px solid white" : ""
                      }`,
                    }}
                    paddingY={2}
                    textAlign="left"
                  >
                    {item.title}
                  </Text>
                </button>
              </Box>
            ))} */}
            <Box padding={3} display={"flex"} alignItems={"center"}>
              <Text fontSize="32px" lineHeight={10} textAlign="left">
                {title === "Products"
                  ? `Explore ${title}`
                  : title === "Services"
                  ? `Explore ${title}`
                  : title}
              </Text>
            </Box>
          </Box>
        </Box>
        <Box
          p={8}
          w="full"
          flex={0.8}
          overflowY="auto"
          h={"100vh"}
          marginBottom={10}
        >
          {/* <Box
            w="full"
            display="flex"
            justifyContent="flex-end"
            alignItems="flex-end"
          >
            <Button variant="unstyled" onClick={handleClose}>
              <CloseIcon w={6} h={6} color="#0645A4" />
            </Button>
          </Box> */}
          {url === "Products" && <Products />}
          {url === "Services" && <Services />}
          {url === "Extras" && <Extras />}
          {url === "Support" && <Support />}
          {url === "About us" && <About />}
        </Box>
      </Box>
    </Container>
  );
};

export default Menu;
