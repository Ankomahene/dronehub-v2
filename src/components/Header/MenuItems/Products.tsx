import React, { useState } from "react";
import Image from "next/image";
import { Container, Box, Divider, Text, Flex, Spacer } from "@chakra-ui/react";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import Link from "next/link";
import { v4 as uid } from "uuid";
import styles from "../Header.module.scss";

const consumer = [
  {
    id: uid(),
    name: "Mavic Series",
    link: "#",
  },
  {
    id: uid(),
    name: "Phantom Series",
    link: "#",
  },
  {
    id: uid(),
    name: "FPV Series",
    link: "#",
  },
  {
    id: uid(),
    name: "Osmo Series",
    link: "#",
  },
];

const professional = [
  {
    id: uid(),
    name: "Inspire Series",
    link: "#",
  },
  {
    id: uid(),
    name: "Ronin Series",
    link: "#",
  },
];

const enterprise = [
  {
    id: uid(),
    name: "Matrice Series",
    link: "#",
  },
  {
    id: uid(),
    name: "Mavic Enterprise Series",
    link: "#",
  },
  {
    id: uid(),
    name: "Phantom Enterprise Series",
    link: "#",
  },
  {
    id: uid(),
    name: "Zenmuse Series",
    link: "#",
  },
  {
    id: uid(),
    name: "Agras Series",
    link: "#",
  },
];

const Products = () => {
  const [arrow, showArrow] = useState(false);
  return (
    <Box w="full" marginBottom={8}>
      <Flex justifyContent="space-evenly" alignItems="center">
        <Box>
          <Image
            src={require("/public/assets/images/menus/DJI FPV Drone_3 3.png")}
            width={147}
            height={100}
            alt="consumer"
          />
          <Text paddingY={1} fontSize={18} textAlign="center" fontWeight="bold">
            Consumer
          </Text>
          <Box>
            <Text paddingY={1} color="#979797" fontSize="14px">
              Explore your creativity
            </Text>
            <Box>
              {consumer.map((item) => (
                <Box key={item.id} paddingY={1}>
                  <Link href={`${item.link}`}>
                    <Box
                      display="flex"
                      gap={3}
                      alignItems="center"
                      className={`${styles.linkStyle}`}
                      transition="all .3s"
                    >
                      <Text fontSize={18} color="#000">
                        {item.name}
                      </Text>
                    </Box>
                  </Link>
                </Box>
              ))}
            </Box>
          </Box>
        </Box>

        <Box>
          <Image
            width={186}
            height={84}
            src={require("/public/assets/images/menus/Inspire_2_3.png")}
            alt="consumer"
          />

          <Text paddingY={1} fontSize={18} textAlign="center" fontWeight="bold">
            Professional
          </Text>
          <Box>
            <Text paddingY={1} color="#979797" fontSize="14px">
              Master at your craft
            </Text>
            <Box>
              {professional.map((item) => (
                <Box key={item.id} paddingY={1}>
                  <Link href={`${item.link}`}>
                    <Box
                      display="flex"
                      gap={3}
                      alignItems="center"
                      className={`${styles.linkStyle}`}
                      transition="all .3s"
                    >
                      <Text fontSize={18} color="#000">
                        {item.name}
                      </Text>
                    </Box>
                  </Link>
                </Box>
              ))}
            </Box>
          </Box>
        </Box>

        <Box>
          <Image
            width={226}
            height={84}
            src={require("/public/assets/images/menus/Matrice_300_RTK_2.png")}
            alt="consumer"
          />

          <Text paddingY={1} fontSize={17} textAlign="center" fontWeight="bold">
            Enterprise
          </Text>
          <Box>
            <Text paddingY={1} color="#979797" fontSize={13}>
              Drone solutions for work
            </Text>
            <Box>
              {enterprise.map((item) => (
                <Box key={item.id} paddingY={1}>
                  <Link href={`${item.link}`}>
                    <Box
                      display="flex"
                      gap={3}
                      alignItems="center"
                      className={`${styles.linkStyle}`}
                      transition="all .3s"
                    >
                      <Text fontSize={17} color="#000">
                        {item.name}
                      </Text>
                    </Box>
                  </Link>
                </Box>
              ))}
            </Box>
          </Box>
        </Box>
        {/* <Box>Professional</Box>
        <Box>Enterprise</Box> */}
      </Flex>
      <Divider />
      <Box paddingY={4} paddingLeft={20} marginBottom={20}>
        <Link href="/products">
          <Box display="flex" gap={3} color="#0645A4" alignItems="center">
            <Text fontSize={20}>View all products</Text>
            <ArrowForwardIcon w={8} h={5} />
          </Box>
        </Link>
      </Box>
    </Box>
  );
};

export default Products;
