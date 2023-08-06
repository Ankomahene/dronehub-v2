import React from "react";
import { Container, Box, Divider, Text, Flex, Image } from "@chakra-ui/react";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import Link from "next/link";
import { v4 as uid } from "uuid";
import styles from "../Header.module.scss";

const blog = [
  {
    id: uid(),
    name: "Blog",
    description:
      "Get the latest news, tips, and guides for the best drone experience",
    link: "#",
  },
  {
    id: uid(),
    name: "Customer & Industry Stories",
    description:
      "Listen to stories of customers who trust us for all their drone needs",
    link: "#",
  },
  {
    id: uid(),
    name: "Safety & Regulations",
    description: "Vital information to fly your drones safely",
    link: "#",
  },
];

const feedback = [
  {
    id: uid(),
    name: "Feedback",
    description: "Let us know what you think, we’d like to hear from you!",
    link: "#",
  },
  {
    id: uid(),
    name: "Events",
    description: "Find out what’s happening at DroneHub",
    link: "#",
  },
  {
    id: uid(),
    name: "Strategic Partnerships",
    description:
      "Collaboration and cooperation are essential for achieving sustainable value and innovation. Let us work together.",
    link: "#",
  },
];

const Extras = () => {
  return (
    <Box w="full" marginBottom={8}>
      <Flex gap={24}>
        <Box flex={0.5}>
          <Image
            src={
              "https://res.cloudinary.com/djp5oy3ri/image/upload/v1691282458/dronehub/blog/jvalvcpellxncaip0sk3.png"
            }
            width={240}
            alt="blog"
          />

          <Box marginTop={2}>
            <Box>
              {blog.map((item) => (
                <Box key={item.id} paddingY={2}>
                  <Link href={`${item.link}`}>
                    <Box>
                      <Text fontSize={17} color="#000" fontWeight="bold">
                        {item.name}
                      </Text>
                      <Text paddingY={1} fontSize={13} color={"#979797"}>
                        {item.description}
                      </Text>
                    </Box>
                  </Link>
                </Box>
              ))}
            </Box>
          </Box>
        </Box>

        <Box flex={0.5}>
          <Image
            width={240}
            src={
              "https://res.cloudinary.com/djp5oy3ri/image/upload/v1691282458/dronehub/blog/jvalvcpellxncaip0sk3.png"
            }
            alt="feedback"
          />

          <Box marginTop={2}>
            <Box>
              {feedback.map((item) => (
                <Box key={item.id} paddingY={2}>
                  <Link href={`${item.link}`}>
                    <Box>
                      <Text fontSize={17} color="#000" fontWeight="bold">
                        {item.name}
                      </Text>
                      <Text paddingY={1} fontSize={13} color={"#979797"}>
                        {item.description}
                      </Text>
                    </Box>
                  </Link>
                </Box>
              ))}
            </Box>
          </Box>
        </Box>
      </Flex>
    </Box>
  );
};

export default Extras;
