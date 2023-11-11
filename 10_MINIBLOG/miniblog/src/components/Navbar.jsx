import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from './Navbar.module.css'

const Navbar = () => {
  return (
   

    <nav className={styles.navbar}> 
      <NavLink className={styles.brand} to="/"><p>Mini <strong>Blog</strong></p></NavLink>
      <ul className={styles.links_list}>
      <li>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? styles.active : "")}
          >
            Home
          </NavLink>
     
          <NavLink
            to="/login"
            className={({ isActive }) => (isActive ? styles.active : "")}
          >
            Login
          </NavLink>
          <NavLink
            to="/registro"
            className={({ isActive }) => (isActive ? styles.active : "")}
          >
            Registro
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) => (isActive ? styles.active : "")}
          >
            Sobre
          </NavLink>
        </li>
      </ul>
   
    </nav>

  )
}

export default Navbar