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
                  <li
                     key={menuItem.title}
                     className={pathname === menuItem.link ? 'active' : ''}
                  >
                     <Link
                        to={menuItem.link}
                        style={{ textDecoration: 'none', color: 'inherit' }}
                     >
                        <div className="listContainer">
                           <div className="icon">{menuItem.icon}</div>
                           <span>{menuItem.title}</span>
                        </div>
                     </Link>
                  </li>
               ))}
            </ul>
         </div>
      </div>
   );
};

export default Sidebar;
