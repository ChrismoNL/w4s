import { useState } from "react"
import { Flex, Button, IconButton, Box, Text, Divider } from "@chakra-ui/react"
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons"
import NextLink from "next/link"
import { useTranslations } from "next-intl"
import { useRouter } from "blitz"

export const Nav = () => {
  const router = useRouter()
  const t = useTranslations("Nav")
  const [display, changeDisplay] = useState("none")

  return (
    <>
      <Flex position="fixed" backgroundColor="blue.500" color="white" w="100%" height="60px">
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
                variant="link"
                aria-label={t("buy-link-label") as string}
                my={2}
                mx={2}
                color="link"
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
                variant="link"
                aria-label={t("sell-link-label") as string}
                my={2}
                mx={2}
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
                variant="link"
                aria-label={t("learn-link-label") as string}
                my={2}
                mx={2}
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
                variant="link"
                aria-label={t("contact-link-label") as string}
                my={2}
                mx={2}
                color="white"
                _hover={{
                  color: "brand.500",
                }}
                title={t("contact-link-title") as string}
              >
                {t("contact-link-label")}
              </Button>
            </NextLink>
            <NextLink href="/account" passHref>
              <Button
                as="a"
                variant="outline"
                aria-label={t("account-link-label") as string}
                my={2}
                mx={2}
                color="white"
                _hover={{
                  color: "brand.500",
                }}
                title={t("account-link-title") as string}
              >
                {t("account-link-label")}
              </Button>
            </NextLink>
          </Flex>

          {/* Mobile */}

          <Flex justify="flex-end" display={["flex", "flex", "none", "none"]}>
            <IconButton
              mt={2}
              mr={0}
              aria-label="Open Menu"
              size="md"
              icon={<HamburgerIcon />}
              onClick={() => changeDisplay("flex")}
              backgroundColor="transparent"
            />
          </Flex>
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
              aria-label="Close Menu"
              size="md"
              icon={<CloseIcon />}
              onClick={() => changeDisplay("none")}
              backgroundColor="transparent"
            />
          </Flex>

          <Flex flexDir="column" align="center">
            <NextLink href="/buy" passHref>
              <Button
                as="a"
                variant="link"
                aria-label="Home"
                my={2}
                w="100%"
                color="white"
                _hover={{
                  color: "blue.500",
                }}
                title={t("buy-link-title") as string}
              >
                {t("buy-link-label")}
              </Button>
            </NextLink>

            <NextLink href="/sell" passHref>
              <Button
                as="a"
                variant="link"
                aria-label={t("sell-link-label") as string}
                my={2}
                w="100%"
                color="white"
                _hover={{
                  color: "blue.500",
                }}
                title={t("sell-link-title") as string}
              >
                {t("sell-link-label")}
              </Button>
            </NextLink>
            <NextLink href="/learn" passHref>
              <Button
                as="a"
                variant="link"
                aria-label={t("learn-link-label") as string}
                my={2}
                w="100%"
                color="white"
                _hover={{
                  color: "blue.500",
                }}
                title={t("learn-link-title") as string}
              >
                {t("learn-link-label")}
              </Button>
            </NextLink>
            <NextLink href="/contact" passHref>
              <Button
                as="a"
                variant="link"
                aria-label={t("contact-link-label") as string}
                my={2}
                w="100%"
                color="white"
                _hover={{
                  color: "blue.500",
                }}
                title={t("contact-link-title") as string}
              >
                {t("contact-link-label")}
              </Button>
            </NextLink>
            <Divider my={2} />
            <NextLink href="/account" passHref>
              <Button
                as="a"
                variant="link"
                aria-label={t("account-link-label") as string}
                my={2}
                w="100%"
                color="white"
                _hover={{
                  color: "blue.500",
                }}
                title={t("account-link-title") as string}
              >
                {t("account-link-label")}
              </Button>
            </NextLink>
          </Flex>
        </Flex>
      </Flex>
    </>
  )
}
