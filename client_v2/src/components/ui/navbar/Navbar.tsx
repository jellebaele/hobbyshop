import { Link } from 'react-router-dom'
import './navbar.scss'
import { Outlet } from 'react-router-dom'
import { useState } from 'react'

const Navbar = () => {
  const [isActive1, setIsActive1] = useState(true)
  const [isActive2, setIsActive2] = useState(false)


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
            <div className="navLink">
              <Link to="/" className={isActive1 ? 'active' : ''} onClick={() => { setIsActive1(true); setIsActive2(false) }}>Uitgelicht</Link>
              <Link to="/products" className={isActive2 ? 'active' : ""} onClick={() => { setIsActive1(false); setIsActive2(true) }}>Producten</Link>
              <Link to="/orders">Orders</Link>
              <Link to="/profile">Profiel</Link>
              <Link to="/logout">Logout</Link>
            </div>
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