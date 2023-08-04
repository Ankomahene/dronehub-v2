import {
  Box,
  Divider,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  IconButton,
  Image,
  useDisclosure,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Text,
} from "@chakra-ui/react";
import Link from "next/link";
import NextLink from "next/link";
import { useEffect, useRef, useState } from "react";
import { MdShortText } from "react-icons/md";
import { useWindowScroll } from "react-use";
import { logoDark, logoLight } from "../../consts";
import { INavItem } from "../../models/app";
import { Button } from "../Buttons/Button";
import styles from "./Header.module.scss";
import { getHeaderStyles } from "./_styles";

interface NavbarLargeProps {
  navItems: INavItem[];
}

export const NavbarSmall = ({ navItems }: NavbarLargeProps) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef<any>();
  const [isScrolled, setIsScrolled] = useState(false);
  const { x, y } = useWindowScroll();

  useEffect(() => {
    if (y > 50) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  }, [y]);

  const logoUrl = isScrolled ? logoDark : logoLight;

  return (
    <Box
      as="nav"
      {...getHeaderStyles(isScrolled)}
      className={`navbar fixed-top ${styles.navigationBar}`}
      transition="all .3s"
    >
      <Flex
        px="1rem"
        w="90%"
        m="auto"
        py="0.5rem"
        justify="space-between"
        className="container-fluid"
      >
        <NextLink className="navbar-brand" href="/" passHref>
          <Image src={logoUrl} alt="logo" w="80px" />
        </NextLink>

        <>
          <IconButton
            aria-label="Hamburger"
            ref={btnRef}
            fontSize="3xl"
            variant="ghost"
            _hover={{ fontSize: "4xl" }}
            transition="all .3s"
            onClick={onOpen}
            icon={<MdShortText />}
          />

          <Drawer
            isOpen={isOpen}
            placement="left"
            onClose={onClose}
            finalFocusRef={btnRef}
          >
            <DrawerOverlay />
            <DrawerContent>
              <DrawerCloseButton />
              <DrawerHeader>
                <NextLink className="navbar-brand" href="/" passHref>
                  <Image
                    src="assets/images/logo/logo-dark.png"
                    alt="logo"
                    w="70px"
                  />
                </NextLink>
              </DrawerHeader>
              <Divider />

              <DrawerBody>
                {/* <Flex flexDir="column">
                  {navItems.map((navItem) => (
                    <NextLink
                      key={navItem.id}
                      className={`nav-item my-2 text-dark`}
                      href={navItem.link}
                      passHref
                    >
                      {navItem.name}
                    </NextLink>
                  ))}
                </Flex> */}
                <Accordion allowMultiple marginTop={10}>
                  {navItems.map((navItem) => (
                    <AccordionItem key={navItem.id} paddingY={4}>
                      <h2>
                        <AccordionButton
                          _expanded={{
                            color: "#0645A4",
                          }}
                        >
                          <Box as="span" flex="1" textAlign="left">
                            <Text fontWeight="bold" fontSize={18}>
                              {navItem.name}
                            </Text>
                          </Box>
                          <AccordionIcon />
                        </AccordionButton>
                      </h2>
                      <AccordionPanel pb={3}>
                        {navItem?.content?.map((item) => (
                          <Box key={item.id}>
                            {item?.subContent ? (
                              <Accordion allowMultiple key={item.id}>
                                {item?.subContent?.map((sub) => (
                                  <AccordionItem key={sub.id} paddingY={2}>
                                    <h2>
                                      <AccordionButton
                                        _expanded={{
                                          color: "#0645A4",
                                        }}
                                      >
                                        <Box
                                          as="span"
                                          flex="1"
                                          textAlign="left"
                                        >
                                          <Text fontWeight="bold" fontSize={18}>
                                            {sub.name}
                                          </Text>
                                        </Box>
                                        <AccordionIcon />
                                      </AccordionButton>
                                    </h2>
                                    <AccordionPanel pb={2}>sub</AccordionPanel>
                                  </AccordionItem>
                                ))}
                              </Accordion>
                            ) : (
                              <Link href={`${item.link}`}>
                                <Text fontSize={12} color="#000" paddingY={2}>
                                  {item.name}
                                </Text>
                              </Link>
                            )}
                          </Box>
                        ))}
                      </AccordionPanel>
                    </AccordionItem>
                  ))}
                </Accordion>
              </DrawerBody>

              <DrawerFooter>
                <Box>
                  <Link href="/consumer">
                    <Button
                      title="Consumer Solutions"
                      bg="brand.blue"
                      color="gray.100"
                      w="90%"
                      mx="auto"
                    />
                  </Link>
                  <Link href="/enterprise?type=integration-program">
                    <Button title="Enterprise Solutions" w="90%" mx="auto" />
                  </Link>
                </Box>
              </DrawerFooter>
            </DrawerContent>
          </Drawer>
        </>
      </Flex>
    </Box>
  );
};
function MutableRefObject<T>() {
  throw new Error("Function not implemented.");
}
