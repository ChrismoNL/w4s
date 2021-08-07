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
      black: "#000", // DEFAULT FOR SCHEME
      white: "#fff", // DEFAULT FOR SCHEME
      brand: {
        50: "#FEE7C2",
        100: "#FEE0AE",
        150: "#FED89A",
        200: "#FED086",
        250: "#FEC872",
        300: "#FDC05D",
        350: "#FDB849",
        450: "#FDB035",
        500: "#FCA311", // DEFAULT FOR SCHEME
        550: "#FDA10D",
        600: "#F29602",
        650: "#DE8A02",
        700: "#CA7D02",
        750: "#B67102",
        800: "#A26402",
        850: "#8D5801",
        900: "#794B01",
      },
      blue: {
        50: "#32539A",
        100: "#2D4B8B",
        200: "#28427B",
        300: "#233A6C",
        400: "#1E325C",
        500: "#19294D",
        600: "#14213D", // DEFAULT FOR SCHEME
        700: "#0F192E",
        800: "#0A111F",
        900: "#05080F",
      },
      gray: {
        50: "#F5F5F5",
        100: "#E5E5E5", // DEFAULT FOR SCHEME
        150: "#E0E0E0",
        200: "#D6D6D6",
        250: "#CCCCCC",
        300: "#C2C2C2",
        350: "#B8B8B8",
        400: "#ADADAD",
        450: "#A3A3A3",
        500: "#999999",
        550: "#8F8F8F",
        600: "#858585",
        650: "#7A7A7A",
        700: "#707070",
        750: "#666666",
        800: "#5C5C5C",
        850: "#525252",
        900: "#474747",
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
