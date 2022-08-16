import React, { useEffect, useRef, useState } from 'react';
import { Close } from '@mui/icons-material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link, useLocation } from 'react-router-dom';
import './sidebar.scss';
import menuItems from './menuItems';

const Sidebar = () => {
   const { pathname } = useLocation();
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

   return (
      <div className={`sidebarContainer ${open ? '' : 'closed'}`} ref={ref}>
         <div className="top">
            <div className="icon" onClick={() => setOpen(!open)}>
               {open ? <Close /> : <MenuIcon />}
            </div>
         </div>

         <div className="center">
            <ul>
               {menuItems.map((menuItem) => (
                  <Link
                     to={menuItem.link}
                     style={{ textDecoration: 'none', color: 'inherit' }}
                     key={menuItem.title}
                  >
                     <li className={pathname === menuItem.link ? 'active' : ''}>
                        <div className="listContainer">
                           <div className="icon">{menuItem.icon}</div>
                           <span>{menuItem.title}</span>
                        </div>
                     </li>
                  </Link>
               ))}
            </ul>
         </div>
      </div>
   );
};

export default Sidebar;
