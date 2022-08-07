import {
   AccountCircle,
   Home,
   Inventory,
   LocalOffer,
   Logout,
   ShoppingCart,
   WorkHistory,
} from '@mui/icons-material';

const menuItems = [
   {
      title: 'Home',
      link: '/',
      icon: <Home />,
   },
   {
      title: 'Alle producten',
      link: '/products',
      icon: <LocalOffer />,
   },
   {
      title: 'Mijn producten',
      link: '/my-products',
      icon: <Inventory />,
   },
   {
      title: 'Winkelwagen',
      link: '/shopping-cart',
      icon: <ShoppingCart />,
   },
   {
      title: 'Orders',
      link: '/orders',
      icon: <WorkHistory />,
   },
   {
      title: 'Profiel',
      link: '/my-profile',
      icon: <AccountCircle />,
   },
   {
      title: 'Log uit',
      link: '/logout',
      icon: <Logout />,
   },
];

export default menuItems;
