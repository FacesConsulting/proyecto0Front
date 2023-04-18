"use client";

import {
  AppBar,
  Box,
  Drawer,
  Hidden,
  IconButton,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
} from "@mui/material";
import { Home, Menu } from "@mui/icons-material";
import { useState } from "react";
import Link from "next/link";

const HeaderMobile = () => {
  const [open, setOpen] = useState<boolean>(false);
  const drawerWidth = 240;
  const [selectedIndex, setSelectedIndex] = useState<number>(0);

  const handleListItemClick = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
    index: number
  ) => {
    setSelectedIndex(index);
  };

  const navigate = [
    {
      label: "Inicio",
      icon: <Home color={selectedIndex === 0 ? "primary" : "inherit"} />
    }
  ]
  return (
    <Hidden mdUp>
      <AppBar
        position="fixed"
        sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
        color="inherit"
      >
        <Toolbar>
          <IconButton
            color="primary"
            size="large"
            edge="start"
            onClick={() => setOpen(!open)}
            sx={{ mr: 2, display: { xs: "flex", md: "none" } }}
          >
            <Menu />
          </IconButton>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ display: { xs: "none", md: "flex" }, flexGrow: 1 }}
          >
            {process.env.NEXT_PUBLIC_COMPANY_NAME}
          </Typography>
        </Toolbar>
      </AppBar>

      <Hidden mdUp>
        <Drawer
          variant="temporary"
          open={open}
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            [`& .MuiDrawer-paper`]: {
              width: drawerWidth,
              boxSizing: "border-box",
            },
          }}
          onClose={() => setOpen(false)}
        >
          <Toolbar />
          <Box sx={{ overflow: "auto", p: 1 }}>
            <List component={"nav"} aria-label="Menú navegación">
              {navigate.map((item, index) => (
                <ListItemButton
                  key={item.label}
                  selected={selectedIndex === index}
                  onClick={(event) => handleListItemClick(event, index)}
                  dense={false}
                  sx={{ marginBottom: 1, borderRadius: 2 }}
                >
                  <ListItemIcon>{item.icon}</ListItemIcon>
                  <ListItemText>
                    <Typography
                      color={selectedIndex === index ? "primary" : "inherit"}
                    >
                      {item.label}
                    </Typography>
                  </ListItemText>
                </ListItemButton>
              ))}
            </List>
          </Box>
        </Drawer>
      </Hidden>
    </Hidden>
  );
};

export default HeaderMobile;
