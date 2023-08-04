import React from "react";
import Image from "next/image";
import { Container, Box, Divider, Text, Flex, Spacer } from "@chakra-ui/react";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import Link from "next/link";
import { v4 as uid } from "uuid";
type Props = {};

const about = [
  {
    id: uid(),
    name: "Who We Are",
    description: "We are a drone technology products and solutions provider.",
    link: "#",
  },
  {
    id: uid(),
    name: "Our Vision",
    description:
      "To be the most preferred drone products and solutions provider in Africa.",
    link: "#",
  },
  {
    id: uid(),
    name: "Careers at Dronehub",
    description: "Join our dynamic team today.",
    link: "#",
  },
];

const About = (props: Props) => {
  return (
    <Box w="full" marginBottom={8}>
      <Flex marginBottom={4}>
        <Box>
          <Image
            width={226}
            height={84}
            src={require("/public/assets/images/menus/About/Maintenance.png")}
            alt="consumer"
          />

          <Box marginTop={2}>
            <Box>
              {about.map((item) => (
                <Box key={item.id} paddingY={2}>
                  <Box>
                    <Text fontSize={17} color="#000" fontWeight="bold">
                      {item.name}
                    </Text>
                    <Text paddingY={1} fontSize={13} color={"#979797"}>
                      {item.description}
                    </Text>
                  </Box>
                </Box>
              ))}
            </Box>
          </Box>
        </Box>
      </Flex>
      <Divider />
      <Box paddingY={4} marginBottom={20}>
        <Link href="/about">
          <Box display="flex" gap={3} color="#0645A4" alignItems="center">
            <Text fontSize={20}>View about us</Text>
            <ArrowForwardIcon w={8} h={5} />
          </Box>
        </Link>
      </Box>
    </Box>
  );
};

export default About;
