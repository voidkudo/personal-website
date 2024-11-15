import { forwardRef, useImperativeHandle, useState } from "react"
import { Box, Drawer, DrawerProps, List, ListItem, ListItemButton, ListItemText } from "@mui/material"
import { PageRoutes } from "../pages/pageRoutes"
import { useNavigate } from "react-router-dom"

export type MobileNavDrawerHandle = {
  handleDrawerOpen: () => void,
  handleDrawerClose: () => void,
}

const MobileNavDrawer = forwardRef<MobileNavDrawerHandle, DrawerProps>((props, ref) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  
  const navigate = useNavigate()

  const handlePageRouteClick = (path: string) => {
    navigate(path)
  }

  const handleDrawerOpen = () => {
    setIsOpen(true)
  }

  const handleDrawerClose = () => {
    setIsOpen(false)
  }

  useImperativeHandle(ref, () => {
    return {
      handleDrawerOpen,
      handleDrawerClose,
    }
  })
  
  return (
    <nav>
      <Drawer {...props} open={isOpen} onClose={handleDrawerClose} >
        <Box sx={{ width: "40vw" }} onClick={handleDrawerClose}>
          <List>
            {
              PageRoutes.map((route, index) => (
                <ListItem
                  key={index}
                  disablePadding
                >
                  <ListItemButton
                    onClick={() => handlePageRouteClick(route.path)}
                  >
                    <ListItemText primary={route.pageName} />
                  </ListItemButton>
                </ListItem>
              ))
            }
          </List>
        </Box>
      </Drawer>
    </nav>
  )
})

export default MobileNavDrawer