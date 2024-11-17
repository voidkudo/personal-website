import { useRef } from "react";
import { AppBar, Box, Button, IconButton, Toolbar } from "@mui/material"
import { PageRoutes } from "../pages/pageRoutes"
import { useNavigate } from "react-router-dom";
import MobileNavDrawer, { MobileNavDrawerHandle } from "./MobileNavDrawer";
import MenuIcon from "@mui/icons-material/Menu";


const Header = () => {
  const mobileNavDrawerRef = useRef<MobileNavDrawerHandle>(null)
  const navigate = useNavigate()

  const handlePageRouteClick = (path: string) => {
    navigate(path)
  }

  const handleDrawerOpen = () => {
    mobileNavDrawerRef.current?.handleDrawerOpen()
  }

  return (
    <Box component="header" sx={{ display: "flex" }}>
      <AppBar position="static" component="nav" >
        <Toolbar>
          <Box sx={{ flex: 1, textAlign: "start" }}>
            <Button
              size="large"
              sx={{ color: "white", fontSize: "x-large" }}
              onClick={() => handlePageRouteClick("/")}
            >
              Toby Yeung
            </Button>
          </Box>
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            {
              PageRoutes.map((route, index) => (
                <Button
                  key={index}
                  sx={{ color: "white", fontSize: "larger" }}
                  onClick={() => handlePageRouteClick(route.path)}
                >
                  {route.pageName}
                </Button>
              ))
            }
          </Box>
          <IconButton
            edge="end"
            sx={{ display: { sm: "none" } }}
            onClick={handleDrawerOpen}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <MobileNavDrawer
        ref={mobileNavDrawerRef}
        anchor="right"
      />
    </Box >
  )
}

export default Header