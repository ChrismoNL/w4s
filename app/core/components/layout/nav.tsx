import { useState } from "react"
import { Flex, Button, IconButton, Box, Text } from "@chakra-ui/react"
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons"
import NextLink from "next/link"
import { useTranslations } from "next-intl"

export const Nav = () => {
  const t = useTranslations("Nav")
  const [display, changeDisplay] = useState("none")
  return (
    <Flex backgroundColor="blue.500" color="white">
      <Box m={3}>
        <Text fontSize="1xl" display="inline-block" fontWeight="bold">
          Webshop
        </Text>
        <Text fontSize="2xl" display="inline-block" color="brand.500" fontWeight="bold">
          &nbsp;4&nbsp;
        </Text>
        <Text fontSize="1xl" display="inline-block" fontWeight="bold">
          Sale
        </Text>
      </Box>
      <Flex position="fixed" right="1rem" align="center">
        {/* Desktop */}
        <Flex display={["none", "none", "flex", "flex"]}>
          <NextLink href="/buy" passHref>
            <Button
              as="a"
              variant="ghost"
              aria-label="Home"
              my={2}
              w="100%"
              color="white"
              _hover={{
                color: "brand.500",
              }}
              title={t("buy-link-title") as string}
            >
              {t("buy-link-label")}
            </Button>
          </NextLink>

          <NextLink href="/sell" passHref>
            <Button
              as="a"
              variant="ghost"
              aria-label={t("sell-link-label") as string}
              my={2}
              w="100%"
              color="white"
              _hover={{
                color: "brand.500",
              }}
              title={t("sell-link-title") as string}
            >
              {t("sell-link-label")}
            </Button>
          </NextLink>
          <NextLink href="/learn" passHref>
            <Button
              as="a"
              variant="ghost"
              aria-label={t("learn-link-label") as string}
              my={2}
              w="100%"
              color="white"
              _hover={{
                color: "brand.500",
              }}
              title={t("learn-link-title") as string}
            >
              {t("learn-link-label")}
            </Button>
          </NextLink>
          <NextLink href="/contact" passHref>
            <Button
              as="a"
              variant="ghost"
              aria-label={t("contact-link-label") as string}
              my={2}
              w="100%"
              color="white"
              _hover={{
                color: "brand.500",
              }}
              title={t("contact-link-title") as string}
            >
              {t("contact-link-label")}
            </Button>
          </NextLink>
        </Flex>

        {/* Mobile */}
        <IconButton
          aria-label="Open Menu"
          size="lg"
          mr={2}
          icon={<HamburgerIcon />}
          onClick={() => changeDisplay("flex")}
          display={["flex", "flex", "none", "none"]}
        />
      </Flex>

      {/* Mobile Content */}
      <Flex
        w="100vw"
        display={display}
        bgColor="brand.500"
        zIndex={20}
        h="100vh"
        pos="fixed"
        top="0"
        left="0"
        overflowY="auto"
        flexDir="column"
      >
        <Flex justify="flex-end">
          <IconButton
            mt={2}
            mr={2}
            aria-label="Open Menu"
            size="lg"
            icon={<CloseIcon />}
            onClick={() => changeDisplay("none")}
          />
        </Flex>

        <Flex flexDir="column" align="center">
          <NextLink href="/" passHref>
            <Button as="a" variant="ghost" aria-label="Home" my={5} w="100%">
              Home
            </Button>
          </NextLink>

          <NextLink href="/about" passHref>
            <Button as="a" variant="ghost" aria-label="About" my={5} w="100%">
              About
            </Button>
          </NextLink>

          <NextLink href="/contact" passHref>
            <Button as="a" variant="ghost" aria-label="Contact" my={5} w="100%">
              Contact
            </Button>
          </NextLink>
        </Flex>
      </Flex>
    </Flex>
  )
}
