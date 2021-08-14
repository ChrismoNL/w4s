import {
  AppProps,
  ErrorBoundary,
  ErrorComponent,
  AuthenticationError,
  AuthorizationError,
  ErrorFallbackProps,
  useQueryErrorResetBoundary,
} from "blitz"
import LoginForm from "app/auth/components/LoginForm"
import { NextIntlProvider } from "next-intl"
import { ChakraProvider } from "@chakra-ui/react"
import { extendTheme } from "@chakra-ui/react"

export default function App({ Component, pageProps }: AppProps) {
  const getLayout = Component.getLayout || ((page) => page)

  const theme = extendTheme({
    colors: {
      ba: "#E5E8F0",
      black: "#000", // DEFAULT FOR SCHEME
      white: "#fff", // DEFAULT FOR SCHEME
      brand: {
        500: "#F9A824",
      },
      blue: {
        200: "#93A2C6",
        500: "#2150A6",
        900: "#00205C",
      },
      gray: {
        100: "#F2F3F7",
        200: "#E5E8F0",
        500: "#BEC6DC",
      },
    },
    fonts: {
      body: "'Raleway', sans-serif",
      heading: "'Roboto', sans-serif",
    },
    styles: {
      global: {
        // styles for the `body`
        body: {
          bg: "gray.200",
        },
        // styles for the `a`
        a: {
          _hover: {
            color: "brand.500",
          },
        },
      },
    },
  })

  return (
    <NextIntlProvider
      // To achieve consistent date, time and number formatting
      // across the app, you can define a set of global formats.
      formats={{
        dateTime: {
          short: {
            day: "numeric",
            month: "short",
            year: "numeric",
          },
        },
      }}
      messages={pageProps.messages}
      now={new Date(pageProps.now)}
      timeZone="Europe/Amsterdam"
    >
      <ChakraProvider theme={theme}>
        <ErrorBoundary
          FallbackComponent={RootErrorFallback}
          onReset={useQueryErrorResetBoundary().reset}
        >
          {getLayout(<Component {...pageProps} />)}
        </ErrorBoundary>
      </ChakraProvider>
    </NextIntlProvider>
  )
}

function RootErrorFallback({ error, resetErrorBoundary }: ErrorFallbackProps) {
  if (error instanceof AuthenticationError) {
    return <LoginForm onSuccess={resetErrorBoundary} />
  } else if (error instanceof AuthorizationError) {
    return (
      <ErrorComponent
        statusCode={error.statusCode}
        title="Sorry, you are not authorized to access this"
      />
    )
  } else {
    return (
      <ErrorComponent statusCode={error.statusCode || 400} title={error.message || error.name} />
    )
  }
}
