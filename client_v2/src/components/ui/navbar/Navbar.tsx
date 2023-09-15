import './navbar.scss'
import { Link, useLocation } from 'react-router-dom'
import { Outlet } from 'react-router-dom'
import { useState } from 'react';
import { useIsOutsideClick } from '../../../hooks/useIsClickOutside';
import { navbarItems } from './navbarItems';


const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const { pathname } = useLocation();

  const ref = useIsOutsideClick(() => setMenuOpen(false))

  const handleClickMenu = () => {
    setMenuOpen(!menuOpen)
  }

  const renderMenuItems = () => {
    return navbarItems.map(navbarItem => {
      return (<li className={`navigationItem ${pathname === navbarItem.link ? 'active' : ''}`} onClick={handleClickMenu} key={navbarItem.title}>
        <Link to={navbarItem.link} >{navbarItem.title}</Link>
      </li>)
    })
  }

  return (
    <>
      <nav className='navigationContainer'>
        <div className='logo'>
          <Link to='/'>
            <h1>Herman's hobbyshop</h1>
          </Link>
        </div>

        <div className="navigationMenu" ref={ref}>
          <div className='hamburger navigationItem' onClick={handleClickMenu}>{!menuOpen ? 'Menu' : 'Sluit'}</div>
          <ul className={menuOpen ? 'active' : ''}>
            {renderMenuItems()}
          </ul>
        </div>
      </nav>

      {/* An <Outlet> renders whatever child route is currently active,
          so you can think about this <Outlet> as a placeholder for
          the child routes we defined above. */}
      <Outlet />
    </>
  )
}

export default Navbar