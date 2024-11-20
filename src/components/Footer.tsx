import { Box, Typography } from "@mui/material"

const Footer = () => {
  return (
    <Box component="footer">
      <Typography sx={{ padding: "3rem 0"}}>
        Copyright © {new Date().getFullYear().toString()} Toby Yeung
      </Typography>
    </Box>

  )
}

export default Footer