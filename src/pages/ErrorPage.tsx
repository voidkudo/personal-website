import { Box, Container, Typography } from "@mui/material"
import { isRouteErrorResponse, useRouteError } from "react-router-dom"
import Header from "../components/Header"
import Footer from "../components/Footer"

const ErrorPage = () => {
  const error = useRouteError()
  console.error(error)

  const getErrorMessage = (error: unknown) => {
    if (isRouteErrorResponse(error)) {
      return `${error.status} ${error.statusText}`
    } else if (error instanceof Error) {
      return error.message
    } else if (typeof error === 'string') {
      return error
    } else {
      console.error(error)
      return 'Unknown error'
    }
  };

  return (
    <Box
      sx={{
        height: "100%",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        overflow: "auto"
      }}
    >
      <Header />
      <Container sx={{ flex: 1, textAlign: "start" }}>
        <Typography variant="h1">Oops!</Typography>
        <Typography variant="h3">Sorry, an unexpected error has occurred.</Typography>
        <Typography variant="h5">{getErrorMessage(error)}</Typography>
      </Container>
      <Footer />
    </Box>

  )
}

export default ErrorPage