import React, { useEffect, useRef, useState } from 'react';
import { styled } from '@mui/material/styles';
import MuiDrawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import MenuIcon from '@mui/icons-material/Menu';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { Close } from '@mui/icons-material';
import { Button, CssBaseline } from '@mui/material';
import {
   AccountCircle,
   Home,
   LocalOffer,
   Logout,
   People,
   ShoppingCart,
} from '@mui/icons-material';
import './sidebar.scss';

const drawerWidth = 240;

const menuItems = [
   {
      title: 'Overzicht',
      icon: <Home />,
   },
   {
      title: 'Assortiment',
      icon: <LocalOffer />,
   },
   {
      title: 'Bestellingen',
      icon: <ShoppingCart />,
   },
   {
      title: 'Groepen',
      icon: <People />,
   },
   {
      title: 'Profiel',
      icon: <AccountCircle />,
   },
   {
      title: 'Log uit',
      icon: <Logout />,
   },
];

const openedMixin = (theme) => ({
   width: drawerWidth,
   transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
   }),
   overflowX: 'hidden',
});

const closedMixin = (theme) => ({
   transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
   }),
   overflowX: 'hidden',
   width: `calc(${theme.spacing(7)} + 1px)`,
   [theme.breakpoints.down('sm')]: {
      width: `0`,
   },
});

const Drawer = styled(MuiDrawer, {
   shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
   width: drawerWidth,
   flexShrink: 0,
   whiteSpace: 'nowrap',
   boxSizing: 'border-box',
   ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
   }),
   ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
   }),
}));

export default function LeftMenuBig() {
   const [open, setOpen] = useState(false);
   const ref = useRef(null);

   useEffect(() => {
      const handleClickOutside = (event) => {
         if (ref.current && !ref.current.contains(event.target)) {
            setOpen(false);
         }
      };

      document.addEventListener('mousedown', handleClickOutside);
      return () => {
         document.removeEventListener('mousedown', handleClickOutside);
      };
   }, [ref]);

   const handleDrawer = () => {
      setOpen(!open);
   };

   return (
      <>
         <Drawer variant="permanent" open={open} ref={ref}>
            <Divider />
            <List>
               <ListItem button onClick={handleDrawer}>
                  <ListItemIcon>{open ? <Close /> : <MenuIcon />}</ListItemIcon>
                  <ListItemText />
               </ListItem>
               {menuItems.map((item) => (
                  <ListItem button key={item.title}>
                     <ListItemIcon>{item.icon}</ListItemIcon>
                     <ListItemText primary={item.title} />
                  </ListItem>
               ))}
            </List>
            <Divider />
         </Drawer>
         <CssBaseline />
         <div className="container">
            <div className="box">
               <Button
                  className="button"
                  onClick={handleDrawer}
                  startIcon={<MenuIcon />}
               >
                  Menu
               </Button>
            </div>
         </div>
      </>
   );
}
