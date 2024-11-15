import { Box, Typography } from "@mui/material"

const Footer = () => {
  return (
    <Box component="footer">
      <Typography>
        Copyright © {new Date().getFullYear().toString()} Toby Yeung
      </Typography>
    </Box>

  )
}

export default Footer