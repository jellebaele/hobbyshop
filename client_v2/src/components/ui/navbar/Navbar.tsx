import { Link, useLocation } from 'react-router-dom'
import './navbar.scss'
import { Outlet } from 'react-router-dom'
import { navbarItems } from './navbarItems';
import { usePlatformType } from '../../../hooks/usePlatformType';
import { useState } from 'react';


const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const { pathname } = useLocation();
  const platformType = usePlatformType();

  const renderNavbarItemsDesktop = () => {
    return (navbarItems.map(navbarItem => {
      return (
        <div className={`navItem ${pathname === navbarItem.link ? 'active' : ''}`} key={navbarItem.title}>
          <div className={`navLink`}>
            <Link to={navbarItem.link} >{navbarItem.title}</Link>
          </div>
        </div>
      )
    }))
  }

  const renderNavbarItemsMobile = () => {
    return <div className='navItem hamburger' onClick={() => setMenuOpen(!menuOpen)}>Menu</div>
  }

  return (
    <>
      <nav>
        <section>
          <div className='logo'>
            <Link to='/'>
              <h1>Herman's hobbyshop</h1>
            </Link>
          </div>
          <div className="navContent">
            {platformType === 'desktop' ? renderNavbarItemsDesktop() : renderNavbarItemsMobile()}
          </div>

        </section>
      </nav>

      {/* An <Outlet> renders whatever child route is currently active,
          so you can think about this <Outlet> as a placeholder for
          the child routes we defined above. */}
      <Outlet />
    </>
  )
}

export default Navbar