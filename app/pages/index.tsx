import React from "react"
import { AppProps, BlitzPage } from "blitz"
import Layout from "app/core/layouts/Layout"
import { useTranslations } from "next-intl"
import { Box, Container } from "@chakra-ui/react"
import { NextSeo } from "next-seo"
import * as Contentful from "../../integrations/contentful"
import { IPageFields } from "../../integrations/generated/contentful"
import { OptimizedFullSizePicture } from "app/core/components/optimizedFullSizePicture"

/*
 * This file is just for a pleasant getting started page for your new app.
 * You can delete everything in here and start from scratch if you like.
 */

interface HomePageProps {
  page: IPageFields
}

const Home = ({ page }: HomePageProps) => {
  const t = useTranslations("Home")

  return (
    <>
      <NextSeo title={page.seoTitle} description={page.seoDescription} />
      <Box h="calc(100vh - 60px)" width="100%" overflow="hidden">
        <OptimizedFullSizePicture image={page?.heroImage} />
      </Box>
      <Container maxW="container.lg">
        <h1>{t("hello")}</h1>
      </Container>
    </>
  )
}

Home.suppressFirstRenderFlicker = true
Home.getLayout = (page) => <Layout title="Home">{page}</Layout>

export async function getStaticProps({ locale }) {
  const currentPage = await Contentful.getPage(process.env.PAGE_HOME_ID, locale)
  return {
    props: {
      messages: require(`../locales/${locale}.json`),
      page: currentPage?.fields,
    },
    revalidate: 60,
  }
}

export default Home
