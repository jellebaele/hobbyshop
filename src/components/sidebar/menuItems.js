import {
   AccountCircle,
   Home,
   LocalOffer,
   Logout,
   ShoppingCart,
} from '@mui/icons-material';

const menuItems = [
   {
      title: 'Home',
      link: '/',
      icon: <Home />,
   },
   {
      title: 'Producten',
      link: '/products',
      icon: <LocalOffer />,
   },
   {
      title: 'Orders',
      link: '/orders',
      icon: <ShoppingCart />,
   },
   {
      title: 'Profiel',
      link: '/profile',
      icon: <AccountCircle />,
   },
   {
      title: 'Log uit',
      link: '/logout',
      icon: <Logout />,
   },
];

export default menuItems;
