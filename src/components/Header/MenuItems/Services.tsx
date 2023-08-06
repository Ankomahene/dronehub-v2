import React from "react";
import { Container, Box, Divider, Text, Flex, Image } from "@chakra-ui/react";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import Link from "next/link";
import { v4 as uid } from "uuid";
import styles from "../Header.module.scss";

const services = [
  {
    id: uid(),
    name: "Drone Repair",
    link: "#",
  },
  {
    id: uid(),
    name: "Drone Rental",
    link: "#",
  },
  {
    id: uid(),
    name: "Drone Consulting",
    link: "#",
  },
  {
    id: uid(),
    name: "Drone Maintenance",
    link: "#",
  },
  {
    id: uid(),
    name: "Drone Detection Solution",
    link: "#",
  },
  {
    id: uid(),
    name: "Drone Applied Research",
    link: "#",
  },
  {
    id: uid(),
    name: "Drone Education",
    link: "#",
  },
  {
    id: uid(),
    name: "Custom Solutions",
    link: "#",
  },
];

const software = [
  {
    id: uid(),
    name: "DJI Terra",
    link: "#",
  },
  {
    id: uid(),
    name: "DJI Flighthub",
    link: "#",
  },
  {
    id: uid(),
    name: "DJI Flight Simulator",
    link: "#",
  },
  {
    id: uid(),
    name: "Ground Station Pro",
    link: "#",
  },
];

const industrial = [
  {
    id: uid(),
    name: "Agriculture",
    link: "#",
  },
  {
    id: uid(),
    name: "Construction",
    link: "#",
  },
  {
    id: uid(),
    name: "Energy & Infrastructure",
    link: "#",
  },
  {
    id: uid(),
    name: "Forestry",
    link: "#",
  },
  {
    id: uid(),
    name: "Media",
    link: "#",
  },
  {
    id: uid(),
    name: "Mining",
    link: "#",
  },
  {
    id: uid(),
    name: "Public Safety",
    link: "#",
  },
  {
    id: uid(),
    name: "Security",
    link: "#",
  },
  {
    id: uid(),
    name: "Surveying & Mapping",
    link: "#",
  },
];

const Services = () => {
  return (
    <Box w="full" marginBottom={8}>
      <Flex gap={24}>
        <Box>
          <Image
            src={
              "https://res.cloudinary.com/djp5oy3ri/image/upload/v1691282542/dronehub/services/zsdznym3ngwzrtif9xde.png"
            }
            width={190}
            alt="consumer"
          />
          <Text paddingY={1} fontSize={18} textAlign="center" fontWeight="bold">
            Services
          </Text>
          <Box>
            <Text
              paddingY={1}
              color="#979797"
              textAlign="center"
              fontSize="14px"
            >
              Customised and reliable support solutions
            </Text>
            <Box>
              {services.map((item) => (
                <Box key={item.id} paddingY={1}>
                  <Link href={`${item.link}`}>
                    <Box
                      _hover={{
                        color: "rgba(6, 69, 164, 1)",
                      }}
                      paddingTop={"8px"}
                      paddingRight={"17px"}
                      paddingBottom={"8px"}
                      paddingLeft={"17px"}
                      className={`${styles.linkStyle}`}
                      transition="all .3s"
                    >
                      <Text fontSize={18}>{item.name}</Text>
                    </Box>
                  </Link>
                </Box>
              ))}
            </Box>
          </Box>
        </Box>

        <Box>
          <Image
            width={120}
            src={
              "https://res.cloudinary.com/djp5oy3ri/image/upload/v1691282531/dronehub/services/f879fdq7zybvjxsc6ewu.png"
            }
            alt="software"
          />

          <Text paddingY={1} fontSize={18} textAlign="center" fontWeight="bold">
            Software
          </Text>
          <Box>
            <Text
              paddingY={1}
              color="#979797"
              textAlign="center"
              fontSize="14px"
            >
              Drone software solutions optimized for your project
            </Text>
            <Box>
              {software.map((item) => (
                <Box key={item.id} paddingY={1}>
                  <Link href={`${item.link}`}>
                    <Box
                      _hover={{
                        color: "rgba(6, 69, 164, 1)",
                      }}
                      paddingTop={"8px"}
                      paddingRight={"17px"}
                      paddingBottom={"8px"}
                      paddingLeft={"17px"}
                      className={`${styles.linkStyle}`}
                      transition="all .3s"
                    >
                      <Text fontSize={18}>{item.name}</Text>
                    </Box>
                  </Link>
                </Box>
              ))}
            </Box>
          </Box>
        </Box>

        <Box>
          <Image
            width={200}
            height={120}
            src={
              "https://res.cloudinary.com/djp5oy3ri/image/upload/v1691282540/dronehub/services/pwecbmji9piq5l1awfpl.png"
            }
            alt="consumer"
          />

          <Text paddingY={1} fontSize={17} textAlign="center" fontWeight="bold">
            Industrial Solutions
          </Text>
          <Box>
            <Text paddingY={1} color="#979797" textAlign="center" fontSize={13}>
              New generation drone solutions for your line of work
            </Text>
            <Box>
              {industrial.map((item) => (
                <Box key={item.id} paddingY={1}>
                  <Link href={`${item.link}`}>
                    <Box
                      _hover={{
                        color: "rgba(6, 69, 164, 1)",
                      }}
                      paddingTop={"8px"}
                      paddingRight={"17px"}
                      paddingBottom={"8px"}
                      paddingLeft={"17px"}
                      className={`${styles.linkStyle}`}
                      transition="all .3s"
                    >
                      <Text fontSize={17}>{item.name}</Text>
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
      <Box paddingY={4} paddingLeft={"17px"} marginBottom={20}>
        <Link href="/services">
          <Box display="flex" gap={3} color="#0645A4" alignItems="center">
            <Text fontSize={20}>View all services</Text>
            <ArrowForwardIcon w={8} h={5} />
          </Box>
        </Link>
      </Box>
    </Box>
  );
};

export default Services;
