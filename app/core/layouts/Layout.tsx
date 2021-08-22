import { ReactNode } from "react"
import { Head } from "blitz"
import { Nav } from "../components/layout/nav"
import { Flex } from "@chakra-ui/react"
import { Footer } from "../components/layout/footer"

type LayoutProps = {
  title?: string
  children: ReactNode
}

const Layout = ({ title, children }: LayoutProps) => {
  return (
    <>
      <Head>
        <title>{title || "W4S"}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Nav />
      {children}
      <Footer />
    </>
  )
}

export default Layout
