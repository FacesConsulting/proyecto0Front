import {
  AccountBalance,
  AccountBox,
  CalendarMonth,
  ExitToApp,
  Home,
  MedicalServices,
} from "@mui/icons-material";
import {
    Avatar,
  Box,
  List,
  ListItem,
  ListItemAvatar,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  ListSubheader,
  Typography,
} from "@mui/material";
import { signOut } from "next-auth/react";
import { useState } from "react";

const NavbarClinic = () => {
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
      icon: <Home color={selectedIndex === 0 ? "primary" : "inherit"} />,
    },
    {
      label: "Doctores",
      icon: <MedicalServices color={selectedIndex === 1 ? "primary" : "inherit"}  />,
    },
    {
      label: "Pacientes",
      icon: <AccountBox color={selectedIndex === 2 ? "primary" : "inherit"}  />,
    },
    {
      label: "Agenda",
      icon: <CalendarMonth color={selectedIndex === 3 ? "primary" : "inherit"}  />,
    },
    {
      label: "Banco",
      icon: <AccountBalance color={selectedIndex === 4 ? "primary" : "inherit"}  />,
    },
  ];
  return (
    <Box sx={{ overflow: "auto", p:1 }}>
      <List component={"nav"} aria-label="Menú navegación">
      <ListItem>
        <ListItemAvatar>
          <Avatar/>
        </ListItemAvatar>
        <ListItemText primary="Lorem Ipsum" secondary="Clinica" />
      </ListItem>
      <ListSubheader>Generales</ListSubheader>
        {navigate.map((item, index) => (
          <ListItemButton
            key={item.label}
            selected={selectedIndex === index}
            onClick={(event) => handleListItemClick(event, index)}
            dense={false}
            sx={{marginBottom: 1, borderRadius: 2}}
          >
            <ListItemIcon>{item.icon}</ListItemIcon>
            <ListItemText>
                <Typography color={selectedIndex === index ? "primary" : "inherit"}>{item.label}</Typography>
            </ListItemText>
          </ListItemButton>
        ))}
        <ListItemButton
            
            onClick={() => signOut()}
            dense={false}
            sx={{marginBottom: 1, borderRadius: 2}}
          >
            <ListItemIcon><ExitToApp /></ListItemIcon>
            <ListItemText>
                <Typography color={"inherit"}>Cerrar Sesión</Typography>
            </ListItemText>
          </ListItemButton>
      </List>
    </Box>
  );
};

export default NavbarClinic;
