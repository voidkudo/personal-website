import { AppBar, Box, Button, IconButton, Toolbar, Typography } from "@mui/material"
import { PageRoutes } from "../pages/pageRoutes"
import { useNavigate } from "react-router-dom";
import MenuIcon from '@mui/icons-material/Menu';

const Header = () => {
  const navigate = useNavigate()

  const handlePageRouteClick = (path: string) => {
    navigate(path)
  }


  return (
    <Box sx={{ display: "flex" }}>
      <AppBar position="static" component="nav" >
        <Toolbar>
          <IconButton
            edge="start"
            sx={{ display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            sx={{ flexGrow: 1, textAlign: { xs: 'center', sm: 'start' } }}
          >
            Toby Yeung
          </Typography>
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            {
              PageRoutes.map((route, index) => (
                <Button
                  key={index}
                  sx={{ color: "white" }}
                  onClick={() => handlePageRouteClick(route.path)}
                >
                  {route.pageName}
                </Button>
              ))
            }
          </Box>
        </Toolbar>
      </AppBar>
    </Box >
  )
}

export default Header