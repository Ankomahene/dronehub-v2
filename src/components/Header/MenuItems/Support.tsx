import React from "react";
import Image from "next/image";
import { Container, Box, Divider, Text, Flex, Link } from "@chakra-ui/react";
import { FaFacebookSquare, FaInstagram, FaTwitter } from "react-icons/fa";
import { ArrowForwardIcon, PhoneIcon, EmailIcon } from "@chakra-ui/icons";
import { facebookUrl, twitterUrl, instagramUrl } from "../../../consts";

const Support = () => {
  return (
    <Box w="full" marginBottom={8}>
      <Flex marginBottom={4}>
        <Box>
          <Image
            width={226}
            height={84}
            src={require("/public/assets/images/menus/Contact_us/contact_us.png")}
            alt="consumer"
          />

          <Box marginTop={8}>
            <Text paddingY={2} fontSize={18} fontWeight="bold">
              Contact us
            </Text>
          </Box>
          <Box display={"flex"} gap={3} color={"#0645A4"}>
            <PhoneIcon w={5} h={5} />
            <Box>
              <Text fontSize={16}>+233 (0) 55 446 0012</Text>
              <Text fontSize={16} paddingY={1}>
                +233 (0) 55 446 0055
              </Text>
            </Box>
          </Box>

          <Box marginTop={8}>
            <Text paddingY={2} fontSize={18} fontWeight="bold">
              Correspond with us
            </Text>
          </Box>
          <Box display={"flex"} gap={3} color={"#0645A4"} alignItems={"center"}>
            <EmailIcon w={5} h={5} />
            <Box>
              <Text fontSize={16}>connect@dronehubgh.com</Text>
            </Box>
          </Box>

          <Box marginTop={8}>
            <Text paddingY={2} fontSize={18} fontWeight="bold">
              Interact with us
            </Text>
          </Box>
          <Flex gap="1rem" align="center" color="brand.blue">
            <Link href={facebookUrl} isExternal={true}>
              <FaFacebookSquare size={25} />
            </Link>

            <Link href={twitterUrl} isExternal={true}>
              <FaTwitter size={23} />
            </Link>

            <Link href={instagramUrl} isExternal={true}>
              <FaInstagram size={23} />
            </Link>
          </Flex>

          <Box marginTop={8}>
            <Text paddingY={2} fontSize={18} fontWeight="bold">
              Locate us
            </Text>
          </Box>
          <Box display={"flex"} gap={3} color={"#0645A4"}>
            <PhoneIcon w={5} h={5} />
            <Box w={"200px"}>
              <Text fontSize={16}>
                H/No. 60 Cooperative Building Kwame Nkwumah Avenue, Adabraka,
                Greater Accra, Ghana | GA-075-8188
              </Text>
            </Box>
          </Box>
        </Box>
      </Flex>
      <Divider />
      <Box paddingY={4} marginBottom={20}>
        <Link href="/support">
          <Box display="flex" gap={3} color="#0645A4" alignItems="center">
            <Text fontSize={20}>View our support</Text>
            <ArrowForwardIcon w={8} h={5} />
          </Box>
        </Link>
      </Box>
    </Box>
  );
};

export default Support;