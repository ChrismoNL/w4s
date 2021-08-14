import React from "react"
import { Link, BlitzPage, useMutation, Routes, GetStaticPropsContext } from "blitz"
import Layout from "app/core/layouts/Layout"
import { useCurrentUser } from "app/core/hooks/useCurrentUser"
import logout from "app/auth/mutations/logout"
import { Nav } from "app/core/components/layout/nav"
import { useTranslations } from "next-intl"
import { Container } from "@chakra-ui/react"

/*
 * This file is just for a pleasant getting started page for your new app.
 * You can delete everything in here and start from scratch if you like.
 */

const Home: BlitzPage = () => {
  const t = useTranslations("Home")
  return (
    <Container maxW="container.lg">
      <h1>{t("hello")}</h1>
    </Container>
  )
}

Home.suppressFirstRenderFlicker = true
Home.getLayout = (page) => <Layout title="Home">{page}</Layout>

export function getStaticProps({ locale }) {
  return {
    props: {
      messages: require(`../locales/${locale}.json`),
    },
  }
}

export default Home
