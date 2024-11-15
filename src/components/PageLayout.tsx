import { Outlet } from "react-router-dom"
import Header from "./Header"
import Footer from "./Footer"
import { Box } from "@mui/material"

const PageLayout = () => {
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
      <Outlet />
      <Footer />
    </Box>
  )
}

export default PageLayout