import { Flex, Box, Text, Select, Stack, Button } from "@chakra-ui/react"
import { useTranslations } from "next-intl"
import NextLink from "next/link"
import { useRouter } from "blitz"

export const Footer = () => {
  const router = useRouter()
  const { locale } = router
  const t = useTranslations("Footer")

  const handleLocaleChange = (event) => {
    const newLocale = event?.target?.value

    if (newLocale) {
      router.push(`/${newLocale}`, `/${newLocale}`, { locale: newLocale })
    }
  }

  return (
    <Box as="footer" p={5} backgroundColor="blue.500" color="white" fontSize="sm" w="100vw">
      <Flex display={["none", "none", "flex", "flex"]}>
        <Flex flex={1} pt={2}>
          <Stack direction="row">
            <Text fontWeight="bold">&copy; Webshop 4 Sale</Text>
            <NextLink href="/privacy" passHref>
              <Button
                as="a"
                variant="link"
                aria-label={t("privacy-link-label") as string}
                pl={8}
                pr={2}
                height="20px"
                fontWeight="normal"
                color="white"
                fontSize="sm"
                _hover={{
                  color: "brand.500",
                }}
                title={t("privacy-link-title") as string}
              >
                {t("privacy-link-label")}
              </Button>
            </NextLink>
            <Text>&bull;</Text>
            <NextLink href="/terms" passHref>
              <Button
                as="a"
                variant="link"
                aria-label={t("terms-link-label") as string}
                pl={2}
                pr={2}
                height="20px"
                fontWeight="normal"
                color="white"
                fontSize="sm"
                _hover={{
                  color: "brand.500",
                }}
                title={t("terms-link-title") as string}
              >
                {t("terms-link-label")}
              </Button>
            </NextLink>
            <Text>&bull;</Text>
            <NextLink href="/sitemap" passHref>
              <Button
                as="a"
                variant="link"
                aria-label={t("sitemap-link-label") as string}
                pl={2}
                pr={2}
                height="20px"
                fontWeight="normal"
                color="white"
                fontSize="sm"
                _hover={{
                  color: "brand.500",
                }}
                title={t("sitemap-link-title") as string}
              >
                {t("sitemap-link-label")}
              </Button>
            </NextLink>
          </Stack>
        </Flex>
        <Stack direction="row">
          <Text pt={2}>{t("language")}:</Text>
          <Select
            variant="flushed"
            pl={2}
            pt={1}
            fontSize="sm"
            size="sm"
            value={locale}
            onChange={handleLocaleChange}
          >
            <option value="en">English</option>
            <option value="nl">Nederlands</option>
          </Select>
        </Stack>
      </Flex>
      <Stack
        display={["flex", "flex", "none", "none"]}
        align="center"
        alignContent="center"
        zIndex={0}
      >
        <Text fontWeight="bold">&copy; Webshop 4 Sale</Text>
        <NextLink href="/privacy" passHref>
          <Button
            as="a"
            variant="link"
            aria-label={t("privacy-link-label") as string}
            pt={8}
            pb={2}
            height="20px"
            fontWeight="normal"
            color="white"
            fontSize="sm"
            _hover={{
              color: "brand.500",
            }}
            title={t("privacy-link-title") as string}
          >
            {t("privacy-link-label")}
          </Button>
        </NextLink>
        <NextLink href="/terms" passHref>
          <Button
            as="a"
            variant="link"
            aria-label={t("terms-link-label") as string}
            pt={2}
            pb={2}
            height="20px"
            fontWeight="normal"
            color="white"
            fontSize="sm"
            _hover={{
              color: "brand.500",
            }}
            title={t("terms-link-title") as string}
          >
            {t("terms-link-label")}
          </Button>
        </NextLink>
        <NextLink href="/sitemap" passHref>
          <Button
            as="a"
            variant="link"
            aria-label={t("sitemap-link-label") as string}
            pt={2}
            pb={2}
            height="20px"
            fontWeight="normal"
            color="white"
            fontSize="sm"
            _hover={{
              color: "brand.500",
            }}
            title={t("sitemap-link-title") as string}
          >
            {t("sitemap-link-label")}
          </Button>
        </NextLink>
        <Text pt={4}>{t("language")}:</Text>
        <Select
          variant="flushed"
          fontSize="sm"
          size="sm"
          w="50vw"
          value={locale}
          onChange={handleLocaleChange}
        >
          <option value="en">English</option>
          <option value="nl">Nederlands</option>
        </Select>
      </Stack>
    </Box>
  )
}
